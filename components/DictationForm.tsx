import React, { useState } from 'react';
import { PlusCircle, MinusCircle, Send, CheckCircle, AlertTriangle, Settings2, Info, ExternalLink, Mic, Volume2, PauseCircle } from 'lucide-react';
import { AudioRecorder } from './AudioRecorder';
import { PatientForm } from './PatientForm';
import { PatientInfo, AudioData, AudioFormat, AppMode, UserCredentials, WebhookPayload } from '../types';
import { blobToBase64 } from '../utils/audioUtils';
import { WEBHOOK_URLS } from '../config/webhooks';

interface DictationFormProps {
  mode: AppMode;
  user: UserCredentials;
}

export const DictationForm: React.FC<DictationFormProps> = ({ mode, user }) => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({ id: '', name: '' });
  // Default to WAV as preferred by browser/backend
  const [audioFormat] = useState<AudioFormat>(AudioFormat.WAV);
  const [showPart4, setShowPart4] = useState(false);
  
  // Audio blobs state
  const [blobs, setBlobs] = useState<AudioData>({
    part1: null,
    part2: null,
    part3: null,
    part4: null,
  });

  // Helper to trigger resets in children
  const [resetTrigger, setResetTrigger] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleBlobUpdate = (key: keyof AudioData) => (blob: Blob | null) => {
    setBlobs(prev => ({ ...prev, [key]: blob }));
  };

  const validateForm = () => {
    // In Test Mode, fields are optional
    if (mode === AppMode.NORMAL) {
       if (!patientInfo.id.trim() || !patientInfo.name.trim()) return false;
    }
    const hasAudio = Object.values(blobs).some(b => b !== null);
    return hasAudio;
  };

  const isFormValid = validateForm();

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare payload
      const payload: WebhookPayload = {
        mode,
        user: { login: user.login },
        patient: {
          id: patientInfo.id,
          name: patientInfo.name
        },
        audio: {
          partie_1: blobs.part1 ? await blobToBase64(blobs.part1) : null,
          partie_2: blobs.part2 ? await blobToBase64(blobs.part2) : null,
          partie_3: blobs.part3 ? await blobToBase64(blobs.part3) : null,
          partie_4: blobs.part4 ? await blobToBase64(blobs.part4) : null,
        },
        audio_format: audioFormat, // Kept for backend compatibility
        timestamp: new Date().toISOString()
      };

      // Select URL from config file
      const targetUrl = mode === AppMode.NORMAL 
        ? WEBHOOK_URLS.AUDIO_NORMAL 
        : WEBHOOK_URLS.AUDIO_TEST;
      
      try {
        const response = await fetch(targetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        if (!response.ok) throw new Error('Erreur serveur');
      } catch (err) {
        console.error("Erreur d'envoi:", err);
        if (mode === AppMode.TEST) {
             console.log("Mode Test: Simulation réussite si échec réseau (pour démo)");
        } else {
             throw err;
        }
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

    } catch (error) {
      setSubmitError("Échec de l'envoi vers le serveur. Vérifiez votre connexion.");
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
        <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Transmission Réussie</h2>
        <p className="text-slate-500 text-lg max-w-md font-medium">Le dossier a été transmis avec succès au serveur DictaMed.</p>
        <div className="mt-8 w-full max-w-xs bg-slate-200 rounded-full h-2 overflow-hidden">
           <div className="h-full bg-emerald-500 animate-[pulse_3s_ease-in-out_infinite]" style={{width: '100%'}}></div>
        </div>
        <p className="text-sm text-slate-400 mt-4 font-semibold">Retour au formulaire...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-32">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            {mode === AppMode.TEST ? 'Mode Test (DictaMed)' : 'Dictée Médicale'}
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <Info size={16} className="text-emerald-500" />
            <p className="text-slate-500 text-sm font-medium">
              {mode === AppMode.TEST 
                ? 'Simulation d\'envoi vers le webhook de test.' 
                : 'Envoi sécurisé vers le serveur de production Audio.'}
            </p>
          </div>
        </div>
      </div>

      {/* --- INSTRUCTIONS MODE TEST --- */}
      {mode === AppMode.TEST && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 -mx-8 -mt-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2">
                🎉 Bienvenue dans le Mode Test !
              </h3>
              <p className="text-blue-50 mt-1">Testez gratuitement DictaMed avec des données fictives. Aucune inscription requise !</p>
            </div>
            
            <a 
              href="https://docs.google.com/spreadsheets/d/1ReZHjndHc6o8O1bx1OfZXnZ8HWt8nLSo2X7IS6rcZXE/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold flex items-center shadow-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              <ExternalLink size={18} className="mr-2" />
              Ouvrir le Google Sheet Public
            </a>
          </div>

          <div className="mb-8">
            <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
              <span className="bg-slate-100 p-1.5 rounded-lg text-slate-600">📝</span> Consignes d'utilisation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Mic, text: "Autorisez le micro" },
                { icon: Volume2, text: "Parlez clairement et lentement" },
                { icon: Volume2, text: "Environnement calme requis" },
                { icon: PauseCircle, text: "Pause entre chaque valeur" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700 font-medium text-sm">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">{i + 1}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
              <span className="bg-slate-100 p-1.5 rounded-lg text-slate-600">💬</span> Exemples de dictée
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                <strong className="text-blue-800 block mb-2">📋 Section 1 - Clinique</strong>
                <p className="text-slate-600 italic mb-3">"Âge 45 ans, sexe masculin, BMI 28, tabac oui"</p>
                <div className="text-xs text-blue-600 bg-blue-100/50 p-2 rounded-lg font-medium">
                  💡 Astuce : "Pas de tabac", "patient non tabagique" ou "tabac non" fonctionnent aussi.
                </div>
              </div>

              <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                <strong className="text-emerald-800 block mb-2">🏥 Section 2 - Antécédents</strong>
                <p className="text-slate-600 italic mb-3">"HTA oui, DT2 non, DYSLIPIDEMIE oui, AVC non"</p>
                <div className="text-xs text-emerald-600 bg-emerald-100/50 p-2 rounded-lg font-medium">
                  💡 Astuce : "Pas d'HTA" ou "patient non hypertendu" fonctionnent aussi.
                </div>
              </div>

              <div className="bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                <strong className="text-purple-800 block mb-2">🧪 Section 3 - Biologie</strong>
                <p className="text-slate-600 italic mb-3">"Hémoglobine 13.5, globules blancs 7000, plaquettes 250000"</p>
                <div className="text-xs text-purple-600 bg-purple-100/50 p-2 rounded-lg font-medium">
                  💡 Astuce : Dictez uniquement les valeurs, sans les unités.
                </div>
              </div>
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
              title="Examen Clinique"
              subtitle="Décrivez l'examen clinique et les symptômes observés..."
              sectionNumber="01"
              onBlobChange={handleBlobUpdate('part1')}
              resetTrigger={resetTrigger}
              isTestMode={true}
            />
            <AudioRecorder 
              title="Antécédents"
              subtitle="Décrivez les antécédents médicaux et familiaux..." 
              sectionNumber="02"
              onBlobChange={handleBlobUpdate('part2')}
              resetTrigger={resetTrigger}
              isTestMode={true}
            />
            <AudioRecorder 
              title="Biologie" 
              subtitle="Décrivez les résultats d'analyses biologiques..."
              sectionNumber="03"
              onBlobChange={handleBlobUpdate('part3')}
              resetTrigger={resetTrigger}
              isTestMode={true}
            />
          </>
        ) : (
          <>
             <AudioRecorder 
              title="Partie 1 – Données démographiques" 
              onBlobChange={handleBlobUpdate('part1')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Partie 2 – Antécédents médicaux" 
              onBlobChange={handleBlobUpdate('part2')}
              resetTrigger={resetTrigger}
            />
            <AudioRecorder 
              title="Partie 3 – Examen clinique / biologie" 
              onBlobChange={handleBlobUpdate('part3')}
              resetTrigger={resetTrigger}
            />
            {showPart4 ? (
              <div className="animate-fade-in">
                <AudioRecorder 
                  title="Partie 4 – Données complémentaires" 
                  onBlobChange={handleBlobUpdate('part4')}
                  resetTrigger={resetTrigger}
                />
                <button 
                  onClick={() => setShowPart4(false)}
                  className="text-sm font-semibold text-rose-500 flex items-center hover:bg-rose-50 px-4 py-2.5 rounded-xl transition-colors ml-1"
                >
                  <MinusCircle size={18} className="mr-2" />
                  Retirer la partie optionnelle
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowPart4(true)}
                className="w-full border-2 border-dashed border-slate-300 rounded-3xl p-6 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
              >
                <PlusCircle size={28} className="mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-lg">Ajouter une partie "Données Complémentaires"</span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-4 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
               {mode === AppMode.TEST ? 'État de la démonstration' : 'État du dossier'}
            </span>
            <span className={`text-sm font-bold ${isFormValid ? 'text-emerald-600' : 'text-slate-600'}`}>
              {isFormValid 
                 ? '✓ Prêt à l\'envoi' 
                 : mode === AppMode.TEST 
                    ? `${Object.values(blobs).filter(b => b!==null).length} section(s) enregistrée(s)`
                    : 'En attente de dictée et d\'infos'
              }
            </span>
          </div>
          
          <div className="w-full md:w-auto flex flex-col md:flex-row items-end gap-3">
            {submitError && (
               <span className="text-rose-600 text-sm font-bold flex items-center bg-rose-50 px-4 py-2 rounded-xl border border-rose-100 animate-pulse">
                 <AlertTriangle size={16} className="mr-2" />
                 {submitError}
               </span>
            )}
            
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              className={`
                w-full md:w-auto px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-lg
                ${isFormValid && !isSubmitting
                  ? mode === AppMode.TEST
                    ? 'bg-slate-500 text-white hover:bg-slate-600 hover:shadow-slate-300'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-emerald-200 transform hover:-translate-y-0.5' 
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
                  Envoi en cours...
                </>
              ) : (
                <>
                  {mode === AppMode.TEST ? (
                      <>Envoyer les données Test</>
                  ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Envoyer le dossier
                      </>
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};