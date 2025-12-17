import React from 'react';
import { Mail, Facebook, MapPin, ClipboardList, Clock, Coins, Phone, Building2, Users, FileSpreadsheet, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Contactez-nous</h2>
        <p className="text-slate-500 font-medium">Pour commander ou tester la solution</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Carte Commander */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Coins size={100} />
          </div>
          
          <h3 className="font-bold text-2xl text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-emerald-100 p-2.5 rounded-xl">
               <Mail className="text-emerald-600" size={24} />
            </div>
            Commander DictaMed
          </h3>

          <div className="space-y-6 flex-grow">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <Mail className="text-blue-500 mt-1 flex-shrink-0" size={20} />
               <div>
                 <span className="block text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Email</span>
                 <a href="mailto:DictaMed.SPSS@gmail.com" className="text-slate-800 font-bold text-lg hover:text-blue-600 transition-colors break-all">
                   DictaMed.SPSS@gmail.com
                 </a>
               </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <Facebook className="text-blue-600 mt-1 flex-shrink-0" size={20} />
               <div>
                 <span className="block text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Facebook</span>
                 <a href="https://www.facebook.com/DictaMed.SPSS" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-bold text-lg hover:text-blue-600 transition-colors">
                   DictaMed.SPSS
                 </a>
               </div>
            </div>

            <div className="flex items-start gap-3 text-slate-600 font-medium bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
              <Coins className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
              <p>Tarification personnalisée selon le nombre de patients et de variables à collecter.</p>
            </div>
          </div>
        </div>

        {/* Carte Infos à fournir */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-5">
            <ClipboardList size={100} />
          </div>

          <h3 className="font-bold text-2xl text-slate-800 mb-6 flex items-center gap-3">
            <div className="bg-blue-100 p-2.5 rounded-xl">
               <ClipboardList className="text-blue-600" size={24} />
            </div>
            Informations à fournir
          </h3>
          
          <p className="text-slate-500 mb-6 font-medium">Pour établir un devis personnalisé, veuillez nous communiquer :</p>

          <ul className="space-y-4">
            {[
              { icon: Users, text: "Nom et prénom" },
              { icon: Phone, text: "Numéro de téléphone" },
              { icon: Building2, text: "Établissement" },
              { icon: Users, text: "Nombre de patients à inclure" },
              { icon: FileSpreadsheet, text: "Fichier SPSS avec vos variables définies" },
              { icon: Calendar, text: "Date de démarrage souhaitée" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="bg-slate-100 p-1.5 rounded-lg text-slate-500">
                  <item.icon size={16} />
                </div>
                {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-emerald-600 font-bold bg-emerald-50 py-3 rounded-xl">
            <Clock size={20} />
            Délai de réponse : 48 heures ouvrées
          </div>
        </div>

      </div>
      
      <div className="flex justify-center">
        <div className="flex items-center text-slate-400 text-sm bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
          <MapPin size={16} className="mr-2" />
          <p>DictaMed SAS - Paris, France</p>
        </div>
      </div>
    </div>
  );
};