import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { UserCredentials, UserStats } from '../types';
import { 
  BarChart3, 
  Mic, 
  FolderPlus, 
  Clock, 
  TrendingUp, 
  Award, 
  Calendar,
  ArrowUpRight,
  Zap
} from 'lucide-react';

interface StatisticsProps {
  user: UserCredentials;
}

export const Statistics: React.FC<StatisticsProps> = ({ user }) => {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user.uid) return;
      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setStats(docSnap.data() as UserStats);
        } else {
          setStats({
            totalDictations: 0,
            totalDMI: 0,
            lastActivity: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user.uid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-emerald-500"></div>
          <span className="text-slate-400 font-medium text-sm animate-pulse">Chargement de vos performances...</span>
        </div>
      </div>
    );
  }

  // Calculs dérivés
  const totalDocs = (stats?.totalDictations || 0) + (stats?.totalDMI || 0);
  // Estimation : 1 dictée gagne environ 10 minutes de frappe
  const timeSavedMinutes = (stats?.totalDictations || 0) * 10 + (stats?.totalDMI || 0) * 5;
  const timeSavedHours = Math.floor(timeSavedMinutes / 60);
  const timeSavedRest = timeSavedMinutes % 60;
  
  // Niveaux d'utilisateur
  let userLevel = "Débutant";
  let progressToNext = 0;
  let levelColor = "text-slate-500";
  let levelBg = "bg-slate-100";
  
  if (totalDocs > 100) {
    userLevel = "Expert Or";
    progressToNext = 100;
    levelColor = "text-amber-600";
    levelBg = "bg-amber-100";
  } else if (totalDocs > 50) {
    userLevel = "Confirmé Argent";
    progressToNext = ((totalDocs - 50) / 50) * 100;
    levelColor = "text-slate-600";
    levelBg = "bg-slate-200";
  } else {
    userLevel = "Praticien Bronze";
    progressToNext = (totalDocs / 50) * 100;
    levelColor = "text-orange-600";
    levelBg = "bg-orange-100";
  }

  return (
    <div className="max-w-6xl mx-auto pb-24 animate-fade-in">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight flex items-center gap-3">
            Tableau de Bord
            <span className={`text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold ${levelBg} ${levelColor}`}>
              {userLevel}
            </span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            Bienvenue Dr. {user.login.split('@')[0]}
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 text-sm font-semibold text-slate-600">
          <Calendar size={16} className="text-emerald-500" />
          <span>Aujourd'hui : {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Card 1: Dictations */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,182,212,0.1)] hover:shadow-lg transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-cyan-100 p-2.5 rounded-xl text-cyan-600">
                <Mic size={22} strokeWidth={2.5} />
              </div>
              <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                <ArrowUpRight size={14} className="mr-1" />
                +12%
              </div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Dictées Réalisées</p>
            <h3 className="text-3xl font-extrabold text-slate-800">{stats?.totalDictations || 0}</h3>
          </div>
        </div>

        {/* Card 2: DMI */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(16,185,129,0.1)] hover:shadow-lg transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-600">
                <FolderPlus size={22} strokeWidth={2.5} />
              </div>
              <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                <ArrowUpRight size={14} className="mr-1" />
                +5%
              </div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Dossiers DMI</p>
            <h3 className="text-3xl font-extrabold text-slate-800">{stats?.totalDMI || 0}</h3>
          </div>
        </div>

        {/* Card 3: Time Saved */}
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-6 shadow-lg shadow-indigo-200 text-white relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform">
             <Clock size={100} />
          </div>
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl text-white">
                <Clock size={22} strokeWidth={2.5} />
              </div>
              <div className="flex items-center text-xs font-bold text-white/90 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10">
                <Zap size={14} className="mr-1 fill-yellow-400 text-yellow-400" />
                Productivité
              </div>
            </div>
            <p className="text-indigo-100 text-xs font-bold uppercase tracking-wider mb-1">Temps Économisé</p>
            <h3 className="text-3xl font-extrabold flex items-baseline gap-1">
              {timeSavedHours} <span className="text-base font-medium opacity-80">h</span>
              {timeSavedRest > 0 && <>{timeSavedRest} <span className="text-base font-medium opacity-80">min</span></>}
            </h3>
          </div>
        </div>

        {/* Card 4: Level Progress */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className={`${levelBg} p-2.5 rounded-xl ${levelColor}`}>
              <Award size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-bold text-slate-400">Prochain niveau</span>
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-xs font-bold mb-1.5">
               <span className="text-slate-700">{userLevel}</span>
               <span className="text-emerald-600">{Math.round(progressToNext)}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
               <div 
                  className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${progressToNext}%` }}
               ></div>
            </div>
          </div>
          <p className="text-slate-400 text-[10px] mt-2">
            Réalisez plus de dictées pour débloquer le badge Or.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Activity Graph Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <BarChart3 size={20} className="text-slate-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Activité Récente</h3>
             </div>
             <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/20">
                <option>7 derniers jours</option>
                <option>30 derniers jours</option>
             </select>
          </div>
          
          {/* Simulated Chart */}
          <div className="h-64 w-full flex items-end justify-between gap-2 sm:gap-4 px-2">
             {[35, 55, 40, 70, 45, 90, 65].map((h, i) => (
               <div key={i} className="flex flex-col items-center gap-2 w-full group cursor-pointer">
                  <div className="relative w-full flex justify-end flex-col h-full rounded-t-xl hover:bg-slate-50 transition-colors">
                     <div 
                        className="w-full bg-emerald-500/90 rounded-t-xl group-hover:bg-emerald-400 transition-all relative" 
                        style={{ height: `${h}%` }}
                     >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                           {h}
                        </div>
                     </div>
                  </div>
                  <span className="text-xs font-bold text-slate-400">J-{7-i}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Last Activity Detail */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
           <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-50 p-2 rounded-lg">
                <TrendingUp size={20} className="text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Dernière Action</h3>
           </div>

           <div className="flex-grow flex flex-col justify-center items-center text-center py-6">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg shadow-slate-100">
                 {stats?.lastActivity ? (
                   <CheckCircle2 size={32} className="text-emerald-500" />
                 ) : (
                   <Clock size={32} className="text-slate-300" />
                 )}
              </div>
              
              {stats?.lastActivity ? (
                <>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-1">Synchronisé le</p>
                  <p className="text-slate-800 font-extrabold text-xl mb-1">
                    {new Date(stats.lastActivity).toLocaleDateString()}
                  </p>
                  <p className="text-slate-500 font-medium">
                    à {new Date(stats.lastActivity).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </>
              ) : (
                <p className="text-slate-400 font-medium">Aucune activité enregistrée.</p>
              )}
           </div>

           <div className="bg-slate-50 rounded-xl p-4 mt-4 border border-slate-100">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 <p className="text-xs font-bold text-slate-600">Serveur opérationnel</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
// Helper icon component for internal use
const CheckCircle2 = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);
