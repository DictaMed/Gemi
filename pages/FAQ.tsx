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
      a: "Le Mode Test est une démonstration gratuite accessible sans authentification. Il vous permet d'enregistrer des données fictives et de voir en temps réel comment elles sont transcrites dans un Google Sheet public. C'est l'occasion idéale pour découvrir DictaMed avant de vous engager."
    },
    {
      q: "Mes données sont-elles sécurisées ?",
      a: "Absolument. DictaMed est conforme au RGPD et utilise un chiffrement de bout en bout pour toutes les données en Mode Normal. Les enregistrements sont stockés de manière sécurisée et ne sont accessibles qu'aux personnes autorisées avec leurs identifiants personnels."
    },
    {
      q: "Quels navigateurs sont compatibles ?",
      a: "DictaMed fonctionne sur tous les navigateurs modernes : Google Chrome (recommandé), Mozilla Firefox, Microsoft Edge et Safari. L'application est également optimisée pour mobile et tablette."
    },
    {
      q: "Puis-je mettre en pause un enregistrement ?",
      a: "Oui, chaque section d'enregistrement dispose d'une fonction pause qui vous permet d'interrompre temporairement votre dictée et de la reprendre ensuite. Le timer exclut automatiquement le temps de pause."
    },
    {
      q: "Comment obtenir un devis ?",
      a: "Contactez-nous par email à DictaMed.SPSS@gmail.com en fournissant les informations listées dans l'onglet Contact. Nous vous répondrons sous 48 heures ouvrées avec un devis personnalisé adapté à vos besoins."
    },
    {
      q: "Quelle est la précision de la transcription ?",
      a: "Notre système d'intelligence artificielle atteint une précision supérieure à 95% pour les données médicales structurées, particulièrement lorsque les consignes de dictée sont respectées (parler clairement, environnement calme)."
    },
    {
      q: "Puis-je personnaliser les paramètres ?",
      a: "Oui, chaque client en Mode Normal reçoit une configuration personnalisée adaptée à ses variables SPSS spécifiques. Le nombre de sections et les champs peuvent être ajustés selon vos besoins."
    },
    {
      q: "Y a-t-il une limite au nombre d'enregistrements ?",
      a: "En Mode Test, vous pouvez effectuer un nombre illimité d'essais. En Mode Normal, le nombre d'enregistrements est défini selon votre forfait (nombre de patients de votre étude)."
    },
    {
      q: "Que se passe-t-il après la transcription ?",
      a: "Les données transcrites sont automatiquement ajoutées à votre Google Sheet personnalisé où vous pouvez les vérifier et les corriger si nécessaire. Une fois validées, elles sont exportées vers votre fichier SPSS prêt pour l'analyse statistique."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 pb-24">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-cyan-50 rounded-full mb-4 shadow-sm">
            <HelpCircle size={40} className="text-cyan-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800">Centre d'Aide</h2>
        <p className="text-slate-500 mt-2 font-medium">Tout savoir sur l'utilisation de DictaMed</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center cursor-default bg-slate-50/30">
              <h3 className="font-bold text-slate-800 text-lg flex items-start gap-3">
                <span className="text-cyan-500 font-extrabold text-xl">Q.</span>
                {faq.q}
              </h3>
            </div>
            <div className="p-6 text-slate-600 leading-relaxed bg-white">
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};