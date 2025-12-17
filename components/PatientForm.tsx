import React from 'react';
import { User, FileText, Contact } from 'lucide-react';
import { PatientInfo } from '../types';

interface PatientFormProps {
  info: PatientInfo;
  onChange: (info: PatientInfo) => void;
  disabled?: boolean;
  isTestMode?: boolean;
}

export const PatientForm: React.FC<PatientFormProps> = ({ info, onChange, disabled = false, isTestMode = false }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8 relative overflow-hidden">
      {/* Accent de couleur sur le côté */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>

      <div className="flex items-center gap-4 mb-6">
        <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 shadow-sm border border-blue-100">
          <Contact size={24} strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800 tracking-tight">Identification Patient</h3>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            {isTestMode ? "Mode Démonstration" : "Données Administratives"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-600 ml-1 uppercase tracking-wide">
            IPP / Numéro Patient {!isTestMode && <span className="text-rose-500">*</span>}
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FileText size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              value={info.id}
              maxLength={50}
              disabled={disabled}
              onChange={(e) => onChange({ ...info, id: e.target.value })}
              className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-300"
              placeholder="Ex: 872049"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-600 ml-1 uppercase tracking-wide">
            Identité Complète {!isTestMode && <span className="text-rose-500">*</span>}
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              value={info.name}
              maxLength={50}
              disabled={disabled}
              onChange={(e) => onChange({ ...info, name: e.target.value })}
              className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-300"
              placeholder="NOM Prénom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};