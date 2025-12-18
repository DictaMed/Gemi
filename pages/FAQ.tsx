import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Qu'est-ce que DictaMed ?",
      a: "DictaMed est une solution innovante de dictée médicale intelligente qui permet aux professionnels de santé de transformer leurs enregistrements vocaux en données structurées pour faciliter la collecte de données médicales et la création de fichiers SPSS."
    },
    {
      q: "Comment fonctionne le Mode Test ?",
      a: "Le Mode Test est une démonstration gratuite accessible sans authentification. Il vous permet d'enregistrer des données fictives et de voir en temps réel comment elles sont transcrites dans un Google Sheet public."
    },
    {
      q: "Mes données sont-elles sécurisées ?",
      a: "Absolument. DictaMed est conforme au RGPD et utilise un chiffrement de bout en bout pour toutes les données en Mode Normal. Les enregistrements sont stockés de manière sécurisée."
    },
    {
      q: "Quels navigateurs sont compatibles ?",
      a: "DictaMed fonctionne sur tous les navigateurs modernes : Google Chrome (recommandé), Mozilla Firefox, Microsoft Edge et Safari."
    },
    {
      q: "Comment obtenir un devis ?",
      a: "Contactez-nous par email à DictaMed.SPSS@gmail.com en fournissant les informations listées dans l'onglet Contact. Nous vous répondrons sous 48 heures ouvrées."
    },
    {
      q: "Quelle est la précision de la transcription ?",
      a: "Notre système d'intelligence artificielle atteint une précision optimale lorsque les consignes de dictée sont respectées (parler clairement, environnement calme)."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 pb-24 relative animate-fade-in">
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block p-4 bg-cyan-50 rounded-full mb-4 shadow-sm border border-cyan-100">
            <HelpCircle size={40} className="text-cyan-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800">FAQ</h2>
        <p className="text-slate-500 mt-2 font-medium">Tout savoir sur l'utilisation de DictaMed</p>
      </div>

      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center cursor-default bg-slate-50/30">
              <h3 className="font-bold text-slate-800 text-lg flex items-start gap-3">
                <span className="text-cyan-500 font-extrabold text-xl">Q.</span>
                {faq.q}
              </h3>
            </div>
            <div className="p-6 text-slate-600 leading-relaxed bg-white font-medium">
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};