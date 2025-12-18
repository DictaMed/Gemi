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
      <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.12)] w-full max-w-md border border-slate-100 ring-1 ring-slate-200/60 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-100 border border-slate-50">
            <Stethoscope className="text-emerald-500" size={40} strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-3">
            <span className="text-blue-600">Se connecter à Dicta</span><span className="text-emerald-600">Med</span>
          </h2>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
             <ShieldCheck size={14} className="text-emerald-500" />
             <span>Espace Sécurisé</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">Votre identifiant Dr</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-800 font-bold placeholder:text-slate-400/70 transition-all outline-none"
                placeholder="Ex: dr.monastir"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">Code secret</label>
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
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold border border-rose-100 flex items-center gap-3 animate-shake">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center items-center py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/25 text-white bg-emerald-600 hover:bg-emerald-700 font-black text-lg transition-all transform active:scale-[0.98] mt-6"
          >
            <LogIn size={22} className="mr-3" strokeWidth={3} />
            se connecter
          </button>
        </form>

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