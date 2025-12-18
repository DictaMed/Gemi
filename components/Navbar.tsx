import React from 'react';
import { Stethoscope, FileText, HelpCircle, Mail, FolderPlus, BookOpen, LogOut, BarChart3 } from 'lucide-react';
import { UserCredentials } from '../types';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  user: UserCredentials | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange, user, onLogout }) => {
  const navItems = [
    { id: 'normal', label: 'Dictée', icon: Stethoscope },
    { id: 'dmi', label: 'Dossier DMI', icon: FolderPlus },
    { id: 'stats', label: 'Stats', icon: BarChart3 }, 
    { id: 'test', label: 'Mode Test', icon: FileText },
    { id: 'guide', label: 'Guide', icon: BookOpen },
    { id: 'faq', label: 'Aide', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/60 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-28">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0 mr-6" 
            onClick={() => onTabChange('normal')}
          >
            <div className="bg-emerald-500 text-white p-2.5 rounded-xl shadow-emerald-200 shadow-lg group-hover:scale-105 transition-transform">
              <Stethoscope size={28} strokeWidth={3} />
            </div>
            <span className="text-2xl sm:text-3xl font-black tracking-tighter whitespace-nowrap">
              <span className="text-blue-600">Dicta</span><span className="text-emerald-600">Med</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="flex bg-slate-100/80 p-2 rounded-2xl overflow-x-auto no-scrollbar max-w-[calc(100vw-200px)] sm:max-w-none">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                
                if (item.id === 'stats' && !user) return null;

                return (
                  <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`
                      flex items-center px-7 py-4 rounded-xl text-base font-extrabold transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? 'bg-white text-emerald-700 shadow-md ring-1 ring-black/5 scale-[1.02]' 
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                      }
                    `}
                  >
                    <Icon size={22} className={`sm:mr-3 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} strokeWidth={2.5} />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {user && (
              <div className="hidden md:flex items-center gap-4 border-l border-slate-200 pl-6 flex-shrink-0">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-bold text-slate-800 max-w-[140px] truncate">Dr. {user.login.split('@')[0]}</span>
                  <span className="text-[10px] uppercase font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md tracking-wider">Connecté</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-3.5 rounded-xl bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-all hover:shadow-md"
                  title="Déconnexion"
                >
                  <LogOut size={24} strokeWidth={2.5} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};