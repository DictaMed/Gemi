import React, { useState } from 'react';
import { Lock, User, ShieldCheck, LogIn, Stethoscope } from 'lucide-react';
import { UserCredentials } from '../types';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

interface AuthFormProps {
  onLogin: (creds: UserCredentials) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.trim() || !accessCode.trim()) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    onLogin({ login, accessCode });
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

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] w-full max-w-md border border-slate-100 ring-1 ring-slate-200/60 relative overflow-hidden">
        
        {/* Décoration d'arrière-plan plus subtile */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-100 border border-slate-50">
            <Stethoscope className="text-emerald-500" size={32} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-2">Espace Praticien</h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-semibold">
             <ShieldCheck size={12} className="text-emerald-500" />
             <span>Connexion Sécurisée</span>
          </div>
        </div>

        {/* --- Google Auth --- */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full relative flex items-center justify-center gap-3 py-3 px-6 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98] mb-8 group h-12"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-600 border-t-transparent"></div>
          ) : (
            <>
              {/* Force width and height on SVG to prevent layout shift */}
              <svg width="20" height="20" className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Continuer avec Google</span>
            </>
          )}
        </button>

        <div className="relative flex py-2 items-center mb-8">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">Ou via identifiant</span>
            <div className="flex-grow border-t border-slate-200"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-500 uppercase ml-1 tracking-wide">Identifiant</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                <User size={18} />
              </div>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 text-slate-800 font-semibold placeholder:text-slate-400/70 transition-all"
                placeholder="ID Cabinet"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-500 uppercase ml-1 tracking-wide">Code d'accès</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 text-slate-800 font-semibold placeholder:text-slate-400/70 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-rose-50 text-rose-600 rounded-lg text-xs font-bold border border-rose-100 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center items-center py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/20 text-white bg-emerald-600 hover:bg-emerald-700 font-bold transition-all transform active:scale-[0.98] mt-4"
          >
            <LogIn size={20} className="mr-2 opacity-90" strokeWidth={2.5} />
            Accéder au dossier
          </button>
        </form>
      </div>
    </div>
  );
};