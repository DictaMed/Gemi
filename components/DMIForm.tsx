import React, { useState, useRef } from 'react';
import { Camera, Send, X, AlertTriangle, FileText, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { UserCredentials } from '../types';
import { WEBHOOK_URLS } from '../config/webhooks';
import { db } from '../config/firebase';
import { doc, updateDoc, increment, setDoc } from 'firebase/firestore';

interface DMIFormProps {
  user: UserCredentials;
}

export const DMIForm: React.FC<DMIFormProps> = ({ user }) => {
  const [text, setText] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages(prev => [...prev, ...newFiles]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  };

  const updateStats = async () => {
    if (user.uid) {
      try {
        const userRef = doc(db, 'users', user.uid);
        try {
          await updateDoc(userRef, {
            totalDMI: increment(1),
            lastActivity: new Date().toISOString()
          });
        } catch (e) {
           await setDoc(userRef, {
            totalDictations: 0,
            totalDMI: 1,
            lastActivity: new Date().toISOString(),
            accountCreated: new Date().toISOString()
          }, { merge: true });
        }
      } catch (err) {
        console.error("Erreur mise à jour stats:", err);
      }
    }
  };

  const handleSubmit = async () => {
    if (!text.trim() && images.length === 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const timestamp = new Date().toISOString();
      const promises = [];

      // 1. Prepare Text Payload (if text exists)
      if (text.trim()) {
        const textPayload = {
          mode: 'dmi_text',
          user: { login: user.login },
          text: text,
          timestamp: timestamp
        };
        
        promises.push(
          fetch(WEBHOOK_URLS.DMI_TEXT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(textPayload)
          }).then(res => {
            if (!res.ok) throw new Error('Erreur envoi texte');
            return res;
          })
        );
      }

      // 2. Prepare Images Payload (if images exist)
      if (images.length > 0) {
        const base64Images = await Promise.all(images.map(fileToBase64));
        const photosPayload = {
          mode: 'dmi_photos',
          user: { login: user.login },
          images: base64Images,
          timestamp: timestamp
        };

        promises.push(
          fetch(WEBHOOK_URLS.DMI_PHOTOS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(photosPayload)
          }).then(res => {
            if (!res.ok) throw new Error('Erreur envoi photos');
            return res;
          })
        );
      }

      // Execute both requests concurrently
      await Promise.all(promises);

      // Mettre à jour les stats Firestore
      await updateStats();

      setSubmitSuccess(true);
      
      setTimeout(() => {
        setText('');
        setImages([]);
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      console.error(error);
      setSubmitError("Échec de l'envoi (un ou plusieurs services indisponibles).");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-32 animate-fade-in text-center px-4">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 animate-bounce">
          <CheckCircle size={48} className="text-emerald-500" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Dossier DMI Transmis</h2>
        <p className="text-slate-500 text-lg max-w-md font-medium">Les observations et/ou photos ont été distribuées aux services concernés.</p>
        <p className="text-sm text-slate-400 mt-4 font-semibold">Retour au formulaire...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800">Dossier Médical Informatisé (DMI)</h2>
        <p className="text-slate-500 text-sm mt-1 font-medium">Saisie rapide d'observations et capture photographique</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-6">
        <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
          <FileText size={20} className="text-blue-500" />
          Observation / Compte rendu
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-64 p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none text-slate-700 leading-relaxed font-medium placeholder:text-slate-400"
          placeholder="Saisissez vos observations cliniques ici..."
        />
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <label className="block text-sm font-bold text-slate-700 flex items-center gap-2">
            <ImageIcon size={20} className="text-blue-500" />
            Photos & Documents
          </label>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-5 py-2.5 rounded-xl font-bold transition-colors"
          >
            <Camera size={20} />
            Ajouter une photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            multiple
            className="hidden"
          />
        </div>

        {images.length === 0 ? (
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center text-slate-400">
            <Camera size={48} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium">Aucune photo sélectionnée</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((file, index) => (
              <div key={index} className="relative group aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-white/90 hover:bg-rose-500 text-slate-700 hover:text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-3 truncate pt-8 font-medium">
                  {file.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/20 shadow-lg p-4 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-end gap-4">
          {submitError && (
             <span className="text-rose-600 text-sm font-bold flex items-center bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">
               <AlertTriangle size={16} className="mr-2" />
               {submitError}
             </span>
          )}
          
          <button
            onClick={handleSubmit}
            disabled={(!text && images.length === 0) || isSubmitting}
            className={`
              px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center transition-all shadow-lg
              ${(!text && images.length === 0) || isSubmitting
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                : 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-emerald-200 transform hover:-translate-y-0.5'
              }
            `}
          >
            {isSubmitting ? 'Envoi...' : (
              <>
                <Send size={20} className="mr-2" />
                Enregistrer le DMI
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};