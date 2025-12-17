import React from 'react';
import { Mail, Facebook, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Contactez-nous</h2>
        <p className="text-slate-500">Notre équipe est à votre disposition</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-emerald-50 p-4 rounded-2xl mb-6">
            <Mail className="text-emerald-600" size={32} />
          </div>
          <h3 className="font-bold text-xl text-slate-800 mb-2">Support Technique</h3>
          <p className="text-slate-500 mb-6">Pour toute demande technique ou commerciale</p>
          <a href="mailto:support@dictamed.net" className="px-6 py-2 bg-slate-100 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors">
            support@dictamed.net
          </a>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-blue-50 p-4 rounded-2xl mb-6">
            <Facebook className="text-blue-600" size={32} />
          </div>
          <h3 className="font-bold text-xl text-slate-800 mb-2">Communauté</h3>
          <p className="text-slate-500 mb-6">Suivez notre actualité sur les réseaux</p>
          <a href="#" className="px-6 py-2 bg-slate-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            facebook.com/dictamed
          </a>
        </div>
      </div>
      
      <div className="flex items-center text-slate-400 text-sm bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
        <MapPin size={16} className="mr-2" />
        <p>DictaMed SAS - Paris, France</p>
      </div>
    </div>
  );
};