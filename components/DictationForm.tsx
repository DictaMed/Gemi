import React, { useState } from 'react';
import { PlusCircle, MinusCircle, Send, CheckCircle2, AlertTriangle, ExternalLink, Info, Lightbulb } from 'lucide-react';
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
      // Extraction du nom pour affichage (ex: jean.dupont -> jean dupont)
      const userName = user.login.split('@')[0].replace('.', ' '); 
      
      // Envoi des métadonnées
      formData.append('nom_prenom_user', userName);
      
      // CRITIQUE : Envoi de l'email exact de l'utilisateur connecté
      formData.append('email', user.login);
      
      formData.append('num_dossier', patientInfo.id);
      formData.append('nom_prenom_patient', patientInfo.name);

      const partsToMerge = [blobs.part1, blobs.part2, blobs.part3, blobs.part4].filter((b): b is Blob => b !== null);
      
      if (partsToMerge.length > 0) {
        try {
          const { blob: mergedBlob, duration } = await mergeAudioBlobs(partsToMerge);
          finalDuration = duration;
          formData.append('fichier_audio', mergedBlob, 'audio_complet.wav');
        } catch (err) {
          console.error("Erreur fusion:", err);
          throw new Error("Erreur technique lors de la fusion.");
        }
      } else {
        throw new Error("Aucun audio enregistré.");
      }

      const targetUrl = mode === AppMode.NORMAL ? WEBHOOK_URLS.AUDIO_NORMAL : WEBHOOK_URLS.AUDIO_TEST;
      const response = await fetch(targetUrl, { method: 'POST', body: formData });
      if (!response.ok) throw new Error('Erreur serveur');
      
      await updateStats(finalDuration);

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
      setSubmitError(error.message || "Échec de l'envoi.");
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
        <h2 className="text-3xl font-black text-slate-800 mb-3 tracking-tight">Données transmises !</h2>
        <p className="text-slate-500 text-lg max-w-md font-bold">Le dossier a été envoyé avec succès au serveur DictaMed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-44">
      {mode === AppMode.TEST && (
        <div className="mb-10 text-center sm:text-left animate-fade-in">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Démonstration DictaMed</h2>
          
          <div className="mt-8 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-xl text-blue-600"><Info size={24} /></div>
                📝 Consignes d'utilisation
              </h3>
              <p className="text-sm font-bold text-slate-600 mb-6 uppercase tracking-wider">Pour une reconnaissance optimale, suivez ces recommandations :</p>
              <ul className="space-y-4 text-slate-600 font-bold">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                  <span>Autorisez l'accès au microphone quand le navigateur vous le demande 🎤</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                  <span>Parlez à haute voix, clairement et lentement 🗣️</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                  <span>Privilégiez un environnement calme sans bruit de fond 🔇</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                  <span>Marquez une courte pause entre chaque valeur dictée ⏸️</span>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-3 mb-6">
                  <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600"><Lightbulb size={24} /></div>
                  💬 Exemples de dictée par section
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-black text-slate-800 flex items-center gap-2 mb-3 text-sm">📋 Section 1 - Données cliniques :</h4>
                    <p className="text-base text-slate-600 font-bold italic mb-3">"Âge 45 ans, sexe masculin, BMI 28, tabac oui"</p>
                    <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">
                      💡 Astuce : vous pouvez dire : Pas de tabac, patient non tabagique, tabac non
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-black text-slate-800 flex items-center gap-2 mb-3 text-sm">🏥 Section 2 - Antécédents :</h4>
                    <p className="text-base text-slate-600 font-bold italic mb-3">"HTA oui, DT2 non, DYSLIPIDEMIE oui, AVC non"</p>
                    <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">
                      💡 Astuce : vous pouvez dire : pas d'HTA ou patient non hypertendu ou HTA oui , etc
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-black text-slate-800 flex items-center gap-2 mb-3 text-sm">🧪 Section 3 - Biologie :</h4>
                    <p className="text-base text-slate-600 font-bold italic mb-3">"Hémoglobine 13.5, globules blancs 7000, plaquettes 250000"</p>
                    <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">
                      💡 Astuce : Dictez les valeurs sans les unités.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <p className="text-white text-sm font-black leading-relaxed">
                Les résultats s'affichent instantanément dans le Google Sheet public.
              </p>
              <a 
                href="https://docs.google.com/spreadsheets/d/1ReZHjndHc6o8O1bx1OfZXnZ8HWt8nLSo2X7IS6rcZXE/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-emerald-700 px-6 py-4 rounded-2xl font-black text-base flex items-center shadow-2xl hover:bg-emerald-50 transition-all hover:scale-105"
              >
                <ExternalLink size={20} className="mr-2" />
                Voir le résultat
              </a>
            </div>
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
              title="Données Cliniques"
              subtitle="Dicter ses variables : Âge, sexe, BMI, tabac"
              sectionNumber="1"
              onBlobChange={handleBlobUpdate('part1')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Antécédents"
              subtitle="Dicter ses variables : HTA, DT2, DYSLIPIDEMIE, AVC" 
              sectionNumber="2"
              onBlobChange={handleBlobUpdate('part2')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Biologie" 
              subtitle="Dicter ses variables : Hémoglobine, globules blancs, plaquettes, urée, Créatinine, ionogramme complet (sodium, potassium, chlore)"
              sectionNumber="3"
              onBlobChange={handleBlobUpdate('part3')}
              resetTrigger={resetTrigger}
            />
          </>
        ) : (
          <>
             <AudioRecorder 
              title="Partie 1" 
              sectionNumber="1"
              onBlobChange={handleBlobUpdate('part1')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Partie 2" 
              sectionNumber="2"
              onBlobChange={handleBlobUpdate('part2')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Partie 3" 
              sectionNumber="3"
              onBlobChange={handleBlobUpdate('part3')}
              resetTrigger={resetTrigger}
            />
            {showPart4 ? (
              <div className="animate-fade-in">
                <AudioRecorder 
                  title="Partie 4" 
                  sectionNumber="4"
                  onBlobChange={handleBlobUpdate('part4')}
                  resetTrigger={resetTrigger}
                />
                <button 
                  onClick={() => setShowPart4(false)}
                  className="text-xs font-black text-rose-500 flex items-center hover:bg-rose-50 px-4 py-2 rounded-lg transition-colors ml-1 uppercase tracking-widest mt-2"
                >
                  <MinusCircle size={14} className="mr-2" />
                  Retirer cette section
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowPart4(true)}
                className="w-full border-2 border-dashed border-slate-200 rounded-3xl p-8 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
              >
                <div className="bg-slate-100 group-hover:bg-emerald-100 p-3 rounded-2xl mr-4 transition-colors">
                  <PlusCircle size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-black text-lg">Ajouter une section optionnelle</span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-8 left-4 right-4 z-40 flex justify-center pointer-events-none">
        <div className="glass-panel px-8 py-5 rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.2)] border border-white/50 w-full max-w-4xl pointer-events-auto flex items-center justify-between gap-6">
          <div className="hidden sm:flex flex-col">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Progression</span>
             <div className="flex items-center gap-2 mt-1">
               <div className={`w-2.5 h-2.5 rounded-full ${isFormValid ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
               <span className={`text-sm font-black ${isFormValid ? 'text-slate-800' : 'text-slate-400'}`}>
                 {isFormValid ? 'Données prêtes' : 'données incomplètes'}
               </span>
             </div>
          </div>
          
          <div className="flex items-center gap-5 w-full sm:w-auto">
             {submitError && (
               <span className="text-rose-600 text-xs font-black flex items-center bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">
                 <AlertTriangle size={16} className="mr-2" />
                 Échec envoi
               </span>
            )}
            
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              className={`
                flex-1 sm:flex-none px-12 py-4.5 rounded-2xl font-black text-lg flex items-center justify-center transition-all shadow-2xl
                ${isFormValid && !isSubmitting
                  ? mode === AppMode.TEST
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200 hover:-translate-y-1' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi...
                </>
              ) : (
                <>
                  <Send size={22} className="mr-3" strokeWidth={3} />
                  Envoyer
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};