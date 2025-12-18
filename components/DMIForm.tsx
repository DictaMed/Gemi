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

  const updateStats = async (wordCount: number) => {
    if (user.uid) {
      try {
        const userRef = doc(db, 'users', user.uid);
        try {
          await updateDoc(userRef, {
            totalDMI: increment(1),
            totalWords: increment(wordCount),
            lastActivity: new Date().toISOString()
          });
        } catch (e) {
           await setDoc(userRef, {
            totalDictations: 0,
            totalDictationTime: 0,
            totalDMI: 1,
            totalWords: wordCount,
            lastActivity: new Date().toISOString(),
            accountCreated: new Date().toISOString()
          }, { merge: true });
        }
      } catch (err) {
        console.error("Erreur stats:", err);
      }
    }
  };

  const handleSubmit = async () => {
    if (!text.trim() && images.length === 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    try {
      const formData = new FormData();
      const userName = user.login.split('@')[0].replace('.', ' '); 
      
      // Clé normalisée (sans accent)
      formData.append('nom_prenom_user', userName);
      formData.append('email', user.login);

      if (text.trim()) formData.append('Texte_DMI', text);
      images.forEach((file, index) => formData.append('Photo_DMI', file, `photo_${index + 1}_${file.name}`));

      // Utilisation de la clé centralisée mise à jour
      const response = await fetch(WEBHOOK_URLS.DMI_SUBMISSION, { method: 'POST', body: formData });
      if (!response.ok) throw new Error('Erreur envoi');

      await updateStats(wordCount);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setText('');
        setImages([]);
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      setSubmitError("Échec de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-32 animate-fade-in text-center px-4">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-emerald-200">
          <CheckCircle size={48} className="text-emerald-500 animate-bounce" />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-3 tracking-tight">Données envoyées !</h2>
        <p className="text-slate-500 text-lg max-w-md font-bold">Votre observation DMI a été transmise avec succès.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-44 animate-fade-in">
      <div className="mb-10">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Mode DMI</h2>
        <p className="text-slate-500 text-base mt-2 font-bold">Saisie rapide d'observations et capture de documents médicaux</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 sm:p-10 mb-8">
        <label className="block text-sm font-black text-slate-700 mb-4 flex items-center gap-3 uppercase tracking-widest">
          <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><FileText size={20} /></div>
          Observations cliniques
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-80 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none text-slate-700 leading-relaxed font-bold text-lg placeholder:text-slate-300 outline-none"
          placeholder="Dictez ou saisissez vos observations ici..."
        />
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 sm:p-10 mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <label className="block text-sm font-black text-slate-700 flex items-center gap-3 uppercase tracking-widest">
            <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600"><ImageIcon size={20} /></div>
            Pièces jointes
          </label>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-2xl font-black text-base transition-all shadow-xl shadow-emerald-200 active:scale-95"
          >
            <Camera size={22} />
            Prendre une photo
          </button>
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" multiple className="hidden" />
        </div>

        {images.length === 0 ? (
          <div className="border-4 border-dashed border-slate-100 rounded-[2rem] p-12 text-center text-slate-300">
            <Camera size={60} className="mx-auto mb-4 opacity-10" />
            <p className="font-black text-lg">Aucun document ajouté</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {images.map((file, index) => (
              <div key={index} className="relative group aspect-square bg-slate-50 rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover" />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-rose-500 text-slate-700 hover:text-white p-2.5 rounded-2xl transition-all shadow-xl"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-8 left-4 right-4 z-40 flex justify-center pointer-events-none">
        <div className="glass-panel px-10 py-6 rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.2)] border border-white/50 w-full max-w-4xl pointer-events-auto flex items-center justify-end gap-6">
          {submitError && (
             <span className="text-rose-600 text-sm font-black flex items-center bg-rose-50 px-4 py-2 rounded-xl">
               <AlertTriangle size={18} className="mr-2" />
               Erreur
             </span>
          )}
          
          <button
            onClick={handleSubmit}
            disabled={(!text && images.length === 0) || isSubmitting}
            className={`
              px-16 py-4.5 rounded-2xl font-black text-xl flex items-center justify-center transition-all shadow-2xl
              ${(!text && images.length === 0) || isSubmitting
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-200 hover:-translate-y-1'
              }
            `}
          >
            {isSubmitting ? 'Envoi...' : (
              <>
                <Send size={24} className="mr-3" strokeWidth={3} />
                Envoyer
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};