import React from 'react';
import { Mail, Facebook, MapPin, ClipboardList, Clock, Coins, Phone, Building2, Users, FileSpreadsheet, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 pb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Contactez DictaMed</h2>
        <p className="text-slate-500 font-bold mt-2 text-lg">Solution de dictée intelligente pour la recherche clinique</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Carte Commander */}
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
            <Coins size={120} />
          </div>
          
          <h3 className="font-black text-2xl text-slate-800 mb-8 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-2xl">
               <Mail className="text-emerald-600" size={28} />
            </div>
            Commander la solution
          </h3>

          <div className="space-y-8 flex-grow">
            <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100">
               <Mail className="text-blue-500 mt-1 flex-shrink-0" size={24} />
               <div>
                 <span className="block text-xs text-slate-400 font-black uppercase tracking-widest mb-1">Email direct</span>
                 <a href="mailto:DictaMed.SPSS@gmail.com" className="text-slate-800 font-black text-xl hover:text-blue-600 transition-colors break-all">
                   DictaMed.SPSS@gmail.com
                 </a>
               </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100">
               <Facebook className="text-blue-600 mt-1 flex-shrink-0" size={24} />
               <div>
                 <span className="block text-xs text-slate-400 font-black uppercase tracking-widest mb-1">Facebook</span>
                 <a href="https://www.facebook.com/DictaMed.SPSS" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-black text-xl hover:text-blue-600 transition-colors">
                   DictaMed.SPSS
                 </a>
               </div>
            </div>

            <div className="flex items-start gap-4 text-slate-600 font-bold bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100">
              <Coins className="text-emerald-500 mt-1 flex-shrink-0" size={24} />
              <p className="text-base leading-relaxed">Tarification sur-mesure adaptée à la taille de votre étude et au nombre de variables.</p>
            </div>
          </div>
        </div>

        {/* Carte Infos */}
        <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl flex flex-col h-full relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
            <ClipboardList size={120} className="text-white" />
          </div>

          <h3 className="font-black text-2xl text-white mb-8 flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-2xl">
               <ClipboardList className="text-white" size={28} />
            </div>
            Dossier de candidature
          </h3>
          
          <p className="text-blue-100/70 mb-8 font-bold text-base leading-relaxed">Pour un déploiement rapide, communiquez-nous :</p>

          <ul className="space-y-5">
            {[
              { icon: Users, text: "Identité complète du praticien" },
              { icon: Phone, text: "Coordonnées de contact direct" },
              { icon: Building2, text: "Établissement ou Laboratoire" },
              { icon: FileSpreadsheet, text: "Structure du fichier SPSS (Variables)" },
              { icon: Calendar, text: "Calendrier prévisionnel de l'étude" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-white font-bold text-base">
                <div className="bg-white/10 p-2 rounded-xl text-blue-400">
                  <item.icon size={20} />
                </div>
                {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-3 text-emerald-400 font-black bg-white/5 py-4 rounded-2xl">
            <Clock size={22} />
            Étude de faisabilité sous 48h
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="flex items-center text-slate-500 font-black text-base bg-white px-10 py-5 rounded-3xl shadow-md border border-slate-100 group transition-all hover:bg-slate-50">
          <MapPin size={24} className="mr-3 text-blue-600 group-hover:animate-bounce" />
          <p>DictaMed - Monastir - Tunisie</p>
        </div>
      </div>
    </div>
  );
};