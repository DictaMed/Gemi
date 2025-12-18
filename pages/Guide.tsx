import React from 'react';
import { BookOpen, AlertTriangle, Lightbulb, Mic, ListOrdered, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Guide: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 pb-24 relative">
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block p-4 bg-blue-50 rounded-full mb-4 shadow-sm">
            <BookOpen size={40} className="text-blue-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800">Guide d'Utilisation</h2>
        <p className="text-slate-500 mt-2 font-medium">Comprendre la méthode DictaMed et optimiser vos dictées</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        {/* Problématique */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <AlertTriangle size={120} />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-rose-100 p-3 rounded-2xl">
              <AlertTriangle size={24} className="text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">La Problématique</h3>
          </div>
          <ul className="space-y-4 text-slate-600 font-medium">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5 flex-shrink-0"></span>
              <span>La saisie manuelle dans SPSS est <strong>chronophage</strong> et détourne de l'analyse.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5 flex-shrink-0"></span>
              <span>Source d'erreurs fréquente.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5 flex-shrink-0"></span>
              <span>Jusqu'à <strong>40% du temps</strong> d'un chercheur peut être perdu dans cette tâche répétitive.</span>
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-sm border border-emerald-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Lightbulb size={120} />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-3 rounded-2xl shadow-sm">
              <Lightbulb size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">La Solution DictaMed</h3>
          </div>
          <ul className="space-y-4 text-slate-700 font-medium">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
              <span>Transformation vocale des observations en <strong>données structurées</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
              <span>Transcription IA → Envoi temps réel Google Sheets → Export SPSS.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
              <span><strong>Gain de temps : 70%</strong> avec une précision optimale.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Conseils */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-50 p-3 rounded-2xl">
            <Mic size={24} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Conseils pour une dictée optimale</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Utiliser un microphone de bonne qualité",
            "S'installer dans un environnement calme",
            "Articuler clairement chaque mot",
            "Marquer de légères pauses entre les valeurs",
            "Respecter l'ordre des variables défini",
            "Vérifier via la fonction 'Réécouter'"
          ].map((conseil, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700 font-medium">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              {conseil}
            </div>
          ))}
        </div>
      </div>

      {/* Processus - Étape 3 supprimée */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-50 p-3 rounded-2xl">
            <ListOrdered size={24} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Votre processus en 5 étapes</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {[
            { title: "Définition", desc: "Fixer les variables à collecter" },
            { title: "Template", desc: "Envoyer le fichier SPSS modèle" },
            { title: "Setup", desc: "Création du Google Sheet personnalisé" },
            { title: "Dictée", desc: "Dicter les données patient par patient" },
            { title: "Livrable", desc: "Obtenir le fichier SPSS prêt pour analyse", highlight: true },
          ].map((step, i) => (
            <div key={i} className={`
              rounded-2xl p-6 border flex flex-col h-full
              ${step.highlight 
                ? 'bg-gradient-to-br from-blue-600 to-teal-500 text-white border-transparent shadow-lg shadow-blue-200' 
                : 'bg-white border-slate-200 text-slate-600 shadow-sm'
              }
            `}>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-sm font-bold uppercase tracking-wider ${step.highlight ? 'text-blue-100' : 'text-slate-400'}`}>
                  Étape {i + 1}
                </span>
                {i < 4 && !step.highlight && <ArrowRight size={16} className="text-slate-300" />}
              </div>
              <h4 className={`text-lg font-bold mb-2 ${step.highlight ? 'text-white' : 'text-slate-800'}`}>{step.title}</h4>
              <p className={`font-medium leading-relaxed ${step.highlight ? 'text-blue-50' : 'text-slate-500'}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};