import React, { useState } from 'react';
import { PlusCircle, MinusCircle, Send, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { AudioRecorder } from './AudioRecorder';
import { PatientForm } from './PatientForm';
import { PatientInfo, AudioData, AppMode, UserCredentials } from '../types';
import { WEBHOOK_URLS } from '../config/webhooks';
import { db } from '../config/firebase';
import { doc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { mergeAudioBlobs } from '../utils/audioUtils';

interface DictationFormProps {
  mode: AppMode;
  user: UserCredentials;
}

export const DictationForm: React.FC<DictationFormProps> = ({ mode, user }) => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({ id: '', name: '' });
  const [showPart4, setShowPart4] = useState(false);
  const [blobs, setBlobs] = useState<AudioData>({ part1: null, part2: null, part3: null, part4: null });
  const [resetTrigger, setResetTrigger] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleBlobUpdate = (key: keyof AudioData) => (blob: Blob | null) => {
    setBlobs(prev => ({ ...prev, [key]: blob }));
  };

  const validateForm = () => {
    if (mode === AppMode.NORMAL) {
       if (!patientInfo.id.trim() || !patientInfo.name.trim()) return false;
    }
    const hasAudio = Object.values(blobs).some(b => b !== null);
    return hasAudio;
  };

  const isFormValid = validateForm();

  const updateStats = async (durationInSeconds: number) => {
    if (mode === AppMode.NORMAL && user.uid) {
      try {
        const userRef = doc(db, 'users', user.uid);
        try {
          await updateDoc(userRef, {
            totalDictations: increment(1),
            totalDictationTime: increment(durationInSeconds),
            lastActivity: new Date().toISOString()
          });
        } catch (e) {
          await setDoc(userRef, {
            totalDictations: 1,
            totalDictationTime: durationInSeconds,
            totalDMI: 0,
            totalWords: 0,
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
    if (!isFormValid) return;
    setIsSubmitting(true);
    setSubmitError(null);

    let finalDuration = 0;

    try {
      const formData = new FormData();

      // 1. Données Utilisateur
      const userName = user.login.split('@')[0].replace('.', ' '); 
      formData.append('nom_prénom_user', userName);
      formData.append('email', user.login);

      // 2. Données Patient
      formData.append('Num_Dossier', patientInfo.id);
      formData.append('nom_Prénom_Patient', patientInfo.name);

      // 3. Traitement Audio : Fusionner les parties
      const partsToMerge = [blobs.part1, blobs.part2, blobs.part3, blobs.part4].filter((b): b is Blob => b !== null);
      
      if (partsToMerge.length > 0) {
        try {
          // Fusion des blobs audio en un seul fichier WAV
          const { blob: mergedBlob, duration } = await mergeAudioBlobs(partsToMerge);
          finalDuration = duration;
          formData.append('fichier_audio', mergedBlob, 'audio_complet.wav');
        } catch (err) {
          console.error("Erreur lors de la fusion audio:", err);
          throw new Error("Erreur technique lors de la fusion des fichiers audio.");
        }
      } else {
        throw new Error("Aucun audio enregistré.");
      }

      const targetUrl = mode === AppMode.NORMAL ? WEBHOOK_URLS.AUDIO_NORMAL : WEBHOOK_URLS.AUDIO_TEST;
      
      try {
        const response = await fetch(targetUrl, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) throw new Error('Erreur serveur');
        
        await updateStats(finalDuration);

      } catch (err) {
        console.error("Erreur d'envoi:", err);
        if (mode !== AppMode.TEST) throw err;
      }

      setSubmitSuccess(true);
      setTimeout(() => {
        setPatientInfo({ id: '', name: '' });
        setBlobs({ part1: null, part2: null, part3: null, part4: null });
        setResetTrigger(prev => prev + 1);
        setSubmitSuccess(false);
        setShowPart4(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 3000);

    } catch (error: any) {
      setSubmitError(error.message || "Échec de connexion au serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-32 animate-fade-in text-center px-4">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-200/50">
          <CheckCircle2 size={48} className="text-emerald-500 animate-bounce" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">Transmission Réussie</h2>
        <p className="text-slate-500 text-lg max-w-md font-medium">Les données ont été fusionnées, cryptées et transférées au serveur.</p>
        <div className="mt-8 w-64 bg-slate-200 rounded-full h-1.5 overflow-hidden">
           <div className="h-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite] w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-40">
      
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {mode === AppMode.TEST ? 'Démonstration DictaMed' : 'Nouvelle Dictée'}
        </h2>
        <p className="text-slate-500 font-medium mt-2 flex items-center justify-center sm:justify-start gap-2">
           {mode === AppMode.TEST 
             ? <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md font-bold uppercase">Mode Test</span> 
             : <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-md font-bold uppercase">Production</span>
           }
           Enregistrement sécurisé multi-pistes (Fusion automatique)
        </p>
      </div>

      {mode === AppMode.TEST && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-1 shadow-lg shadow-blue-200 mb-10 overflow-hidden">
           <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                👋 Bienvenue sur la démo
              </h3>
              <p className="text-blue-100 text-sm mt-1 max-w-md font-medium leading-relaxed">
                Testez la transcription en temps réel sans inscription. Les données sont envoyées vers un tableau Google Sheet public.
              </p>
            </div>
            <a 
              href="https://docs.google.com/spreadsheets/d/1ReZHjndHc6o8O1bx1OfZXnZ8HWt8nLSo2X7IS6rcZXE/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-5 py-3 rounded-xl font-bold text-sm flex items-center shadow-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              <ExternalLink size={16} className="mr-2" />
              Voir le résultat (Google Sheet)
            </a>
           </div>
        </div>
      )}

      <PatientForm 
        info={patientInfo} 
        onChange={setPatientInfo} 
        disabled={isSubmitting}
        isTestMode={mode === AppMode.TEST}
      />

      <div className="space-y-6">
        {mode === AppMode.TEST ? (
          <>
            <AudioRecorder 
              title="Examen Clinique"
              subtitle="Symptômes, constantes, BMI..."
              sectionNumber="1"
              onBlobChange={handleBlobUpdate('part1')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Antécédents"
              subtitle="Chirurgicaux, familiaux, traitements..." 
              sectionNumber="2"
              onBlobChange={handleBlobUpdate('part2')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Biologie" 
              subtitle="Hémoglobine, leucocytes, plaquettes..."
              sectionNumber="3"
              onBlobChange={handleBlobUpdate('part3')}
              resetTrigger={resetTrigger}
            />
          </>
        ) : (
          <>
             <AudioRecorder 
              title="Données démographiques" 
              sectionNumber="1"
              onBlobChange={handleBlobUpdate('part1')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Antécédents médicaux" 
              sectionNumber="2"
              onBlobChange={handleBlobUpdate('part2')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Examen clinique / biologie" 
              sectionNumber="3"
              onBlobChange={handleBlobUpdate('part3')}
              resetTrigger={resetTrigger}
            />
            {showPart4 ? (
              <div className="animate-fade-in">
                <AudioRecorder 
                  title="Données complémentaires" 
                  sectionNumber="4"
                  onBlobChange={handleBlobUpdate('part4')}
                  resetTrigger={resetTrigger}
                />
                <button 
                  onClick={() => setShowPart4(false)}
                  className="text-xs font-bold text-rose-500 flex items-center hover:bg-rose-50 px-4 py-2 rounded-lg transition-colors ml-1 uppercase tracking-wide mt-2"
                >
                  <MinusCircle size={14} className="mr-2" />
                  Retirer cette section
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowPart4(true)}
                className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-6 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
              >
                <div className="bg-slate-100 group-hover:bg-emerald-100 p-2 rounded-full mr-3 transition-colors">
                  <PlusCircle size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-bold text-sm">Ajouter une section optionnelle</span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-6 left-4 right-4 z-40 flex justify-center pointer-events-none">
        <div className="glass-panel px-6 py-4 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] border border-white/50 w-full max-w-4xl pointer-events-auto flex items-center justify-between gap-4">
          
          <div className="hidden sm:flex flex-col">
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Statut du dossier</span>
             <div className="flex items-center gap-2">
               <div className={`w-2 h-2 rounded-full ${isFormValid ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
               <span className={`text-sm font-bold ${isFormValid ? 'text-slate-800' : 'text-slate-400'}`}>
                 {isFormValid ? 'Prêt à l\'envoi' : 'Incomplet'}
               </span>
             </div>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
             {submitError && (
               <span className="text-rose-600 text-xs font-bold hidden md:flex items-center bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100">
                 <AlertTriangle size={14} className="mr-2" />
                 Erreur réseau
               </span>
            )}
            
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              className={`
                flex-1 sm:flex-none px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center transition-all shadow-lg
                ${isFormValid && !isSubmitting
                  ? mode === AppMode.TEST
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200 hover:-translate-y-0.5' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Fusion & Envoi...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" strokeWidth={2.5} />
                  {mode === AppMode.TEST ? 'Envoyer le Test' : 'Finaliser le dossier'}
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};