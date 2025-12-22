import React, { useState } from 'react';
import { Lock, User, ShieldCheck, LogIn, Stethoscope, UserPlus, Mail, ArrowRight, KeyRound, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { UserCredentials } from '../types';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

interface AuthFormProps {
  onLogin: (creds: UserCredentials) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false); // État pour la vue Mot de passe oublié
  const [resetSuccess, setResetSuccess] = useState(false); // État succès envoi email
  
  const [login, setLogin] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // --- GESTION MOT DE PASSE OUBLIÉ ---
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.trim()) {
      setError("Veuillez entrer votre adresse email.");
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      await sendPasswordResetEmail(auth, login);
      setResetSuccess(true);
      setError('');
    } catch (err: any) {
      console.error("Erreur reset password:", err);
      if (err.code === 'auth/user-not-found') {
        setError("Aucun compte associé à cet email.");
      } else if (err.code === 'auth/invalid-email') {
        setError("Format d'email invalide.");
      } else {
        setError("Impossible d'envoyer l'email de réinitialisation.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const cancelReset = () => {
    setIsResettingPassword(false);
    setResetSuccess(false);
    setError('');
  };
  // -----------------------------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.trim() || !accessCode.trim()) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (isRegistering) {
        // --- MODE CRÉATION DE COMPTE (Firebase Auth) ---
        try {
          await createUserWithEmailAndPassword(auth, login, accessCode);
          // Le hook onAuthStateChanged dans App.tsx détectera la connexion et créera le profil BDD
        } catch (firebaseError: any) {
          console.error("Erreur inscription:", firebaseError.code);
          switch (firebaseError.code) {
            case 'auth/email-already-in-use':
              throw new Error("Cet email est déjà utilisé.");
            case 'auth/invalid-email':
              throw new Error("Format d'email invalide.");
            case 'auth/weak-password':
              throw new Error("Le mot de passe doit contenir au moins 6 caractères.");
            default:
              throw new Error("Erreur lors de la création du compte.");
          }
        }
      } else {
        // --- MODE CONNEXION ---
        
        // 1. Essayer d'abord la connexion Firebase (Email/Password)
        try {
           // On vérifie basiquement si c'est un email pour éviter un appel API inutile
           if (login.includes('@')) {
             await signInWithEmailAndPassword(auth, login, accessCode);
             // Succès : App.tsx prendra le relais
           } else {
             // Ce n'est pas un email, on passe directement au mode manuel
             throw new Error("ManualAuthRequired"); 
           }
        } catch (err: any) {
           // Si l'auth Firebase échoue (ou si c'est un ID Dr classique), on utilise la méthode manuelle legacy
           if (err.message === "ManualAuthRequired" || err.code === "auth/invalid-email" || err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
              onLogin({ login, accessCode });
           } else {
             throw err; // Vraie erreur technique
           }
        }
      }
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue.");
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      onLogin({ 
        login: user.email || user.uid, 
        accessCode: 'GOOGLE_AUTH_TOKEN' 
      });
    } catch (err: any) {
      console.error(err);
      setError("Authentification Google annulée ou échouée.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setError('');
    setLogin('');
    setAccessCode('');
  };

  // --- VUE RÉINITIALISATION MOT DE PASSE ---
  if (isResettingPassword) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.12)] w-full max-w-md border border-slate-100 relative overflow-hidden animate-fade-in">
          
          <button onClick={cancelReset} className="absolute top-8 left-8 text-slate-400 hover:text-slate-600 transition-colors">
             <ArrowLeft size={24} />
          </button>

          <div className="text-center mb-8 mt-4">
            <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-orange-100">
              <KeyRound className="text-orange-500" size={32} strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Mot de passe oublié ?</h2>
            <p className="text-slate-500 font-medium text-sm mt-2 px-4">
              Entrez votre email pour recevoir un lien de réinitialisation.
            </p>
          </div>

          {resetSuccess ? (
             <div className="text-center animate-fade-in">
                <div className="bg-emerald-50 text-emerald-700 p-6 rounded-2xl border border-emerald-100 mb-8">
                   <div className="flex justify-center mb-3">
                     <CheckCircle2 size={32} />
                   </div>
                   <p className="font-bold">Email envoyé !</p>
                   <p className="text-sm mt-1 opacity-90">Vérifiez votre boîte de réception (et vos spams).</p>
                </div>
                <button 
                  onClick={cancelReset}
                  className="w-full py-4 rounded-2xl font-black text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                >
                  Retour à la connexion
                </button>
             </div>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">
                  Votre Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 text-slate-800 font-bold placeholder:text-slate-400/70 transition-all outline-none"
                    placeholder="docteur@exemple.com"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold border border-rose-100 flex items-center gap-3 animate-shake">
                  <AlertTriangleIcon />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-4 px-6 rounded-2xl shadow-xl text-white font-black text-lg transition-all transform active:scale-[0.98] bg-orange-500 hover:bg-orange-600 shadow-orange-500/25"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
                ) : (
                  "Envoyer le lien"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // --- VUE NORMALE (Connexion / Inscription) ---
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.12)] w-full max-w-md border border-slate-100 ring-1 ring-slate-200/60 relative overflow-hidden transition-all duration-500">
        
        <div className={`absolute top-0 right-0 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none transition-colors duration-500 ${isRegistering ? 'bg-blue-400/10' : ''}`}></div>
        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none transition-colors duration-500 ${isRegistering ? 'bg-emerald-400/10' : ''}`}></div>

        <div className="text-center mb-10 relative z-10">
          <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-100 border border-slate-50">
            <Stethoscope className={isRegistering ? "text-blue-500" : "text-emerald-500"} size={40} strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-3">
            {isRegistering ? (
              <>
                <span className="text-black">Créer un </span>
                <span className="text-blue-600">Compte</span>
              </>
            ) : (
              <>
                <span className="text-black">Se connecter à </span>
                <span className="text-blue-600">Dicta</span><span className="text-emerald-600">Med</span>
              </>
            )}
          </h2>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
             <ShieldCheck size={14} className={isRegistering ? "text-blue-500" : "text-emerald-500"} />
             <span>Espace Sécurisé</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">
              {isRegistering ? "Email Professionnel" : "Identifiant Dr ou Email"}
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                {isRegistering ? <Mail size={20} /> : <User size={20} />}
              </div>
              <input
                type={isRegistering ? "email" : "text"}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-800 font-bold placeholder:text-slate-400/70 transition-all outline-none"
                placeholder={isRegistering ? "docteur@exemple.com" : "Dr Flen ou email"}
                required={isRegistering}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
               <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">
                 {isRegistering ? "Mot de passe (6 car. min)" : "Code secret ou Mot de passe"}
               </label>
               {/* LIEN MOT DE PASSE OUBLIÉ (Uniquement en mode Login) */}
               {!isRegistering && (
                 <button 
                   type="button" 
                   onClick={() => setIsResettingPassword(true)}
                   className="text-[11px] font-bold text-blue-600 hover:text-blue-700 hover:underline"
                 >
                   Mot de passe oublié ?
                 </button>
               )}
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-800 font-bold placeholder:text-slate-400/70 transition-all outline-none"
                placeholder="••••••••"
                required
                minLength={isRegistering ? 6 : 1}
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold border border-rose-100 flex items-center gap-3 animate-shake">
              <AlertTriangleIcon />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`
              w-full flex justify-center items-center py-4 px-6 rounded-2xl shadow-xl text-white font-black text-lg transition-all transform active:scale-[0.98] mt-6
              ${isRegistering 
                ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25' 
                : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25'
              }
              ${isLoading ? 'opacity-80 cursor-wait' : ''}
            `}
          >
            {isLoading ? (
               <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
            ) : isRegistering ? (
              <>
                <UserPlus size={22} className="mr-3" strokeWidth={3} />
                Créer le compte
              </>
            ) : (
              <>
                <LogIn size={22} className="mr-3" strokeWidth={3} />
                Se connecter
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={toggleMode}
            className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center justify-center mx-auto gap-2 group"
          >
            {isRegistering ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? Créer un compte"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">Accès rapide</span>
            <div className="flex-grow border-t border-slate-100"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-600 border-t-transparent"></div>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Continuer avec Google</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Helper component for icon
const AlertTriangleIcon = () => (
  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
);