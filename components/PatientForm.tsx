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
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60 mb-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-blue-50 p-3 rounded-2xl">
          <Contact size={28} className="text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">Informations Patient</h3>
          <p className="text-sm font-medium text-slate-500">
            {isTestMode ? "Données (facultatif en mode test)" : "Données administratives obligatoires"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
            Numéro Patient / IPP {!isTestMode && <span className="text-rose-500">*</span>}
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FileText className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              value={info.id}
              maxLength={50}
              disabled={disabled}
              onChange={(e) => onChange({ ...info, id: e.target.value })}
              className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
              placeholder="Ex: 12345678"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
            Nom Prénom {!isTestMode && <span className="text-rose-500">*</span>}
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              value={info.name}
              maxLength={50}
              disabled={disabled}
              onChange={(e) => onChange({ ...info, name: e.target.value })}
              className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
              placeholder="Ex: DURAND Jean"
            />
          </div>
        </div>
      </div>
    </div>
  );
};