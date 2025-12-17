import React, { useState } from 'react';
import { Lock, User, ChevronRight, ShieldCheck } from 'lucide-react';
import { UserCredentials } from '../types';

interface AuthFormProps {
  onLogin: (creds: UserCredentials) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.trim() || !accessCode.trim()) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    onLogin({ login, accessCode });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-md border border-slate-100">
        <div className="text-center mb-10">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 shadow-inner">
            <Lock className="text-blue-600" size={36} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">Connexion</h2>
          <div className="flex items-center justify-center gap-2 mt-3 text-slate-500 text-sm font-medium">
            <div className="bg-emerald-100 p-1 rounded-full">
               <ShieldCheck size={14} className="text-emerald-600" />
            </div>
            <span>Espace Praticien Sécurisé</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Identifiant</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                placeholder="Votre identifiant"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Code d'accès</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="p-4 bg-rose-50 text-rose-600 rounded-xl text-sm font-medium border border-rose-100 flex items-center gap-2 animate-pulse">
              <span className="bg-rose-200 w-1.5 h-1.5 rounded-full block"></span> {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-lg shadow-emerald-200 text-lg font-bold text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all transform hover:translate-y-[-2px] active:translate-y-0"
          >
            Se connecter
            <ChevronRight size={20} className="ml-2 opacity-90" />
          </button>
        </form>
      </div>
    </div>
  );
};