import React from 'react';
import { Stethoscope, FileText, HelpCircle, Mail, FolderPlus, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange }) => {
  const navItems = [
    { id: 'normal', label: 'Dictée', icon: Stethoscope },
    { id: 'dmi', label: 'Mode DMI', icon: FolderPlus },
    { id: 'test', label: 'Mode Test', icon: FileText },
    { id: 'guide', label: 'Guide', icon: BookOpen },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onTabChange('normal')}>
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-blue-600">Dicta</span>
              <span className="text-emerald-500">Med</span>
            </span>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto no-scrollbar py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`
                    flex items-center px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap
                    ${isActive 
                      ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    }
                  `}
                >
                  <Icon size={18} className={`mr-2 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};