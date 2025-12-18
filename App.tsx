import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AuthForm } from './components/AuthForm';
import { DictationForm } from './components/DictationForm';
import { DMIForm } from './components/DMIForm';
import { Statistics } from './pages/Statistics';
import { FAQ } from './pages/FAQ';
import { Guide } from './pages/Guide';
import { Contact } from './pages/Contact';
import { AppMode, UserCredentials } from './types';
import { auth, db } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

function App() {
  const [currentTab, setCurrentTab] = useState('normal');
  const [user, setUser] = useState<UserCredentials | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // 1. Définir l'état local de l'utilisateur
        setUser({
          login: firebaseUser.email || 'Utilisateur Google',
          accessCode: 'GOOGLE_SECURED',
          uid: firebaseUser.uid 
        });

        // 2. Initialiser automatiquement la base de données pour cet utilisateur
        try {
          const userRef = doc(db, 'users', firebaseUser.uid);
          const userSnap = await getDoc(userRef);

          if (!userSnap.exists()) {
            // Création du document initial si c'est la première connexion
            await setDoc(userRef, {
              login: firebaseUser.email,
              totalDictations: 0,
              totalDMI: 0,
              totalDictationTime: 0,
              totalWords: 0,
              lastActivity: new Date().toISOString(),
              accountCreated: new Date().toISOString(),
              isPraticien: true
            });
            console.log("Base de données utilisateur initialisée.");
          } else {
            // Mise à jour de la dernière activité si l'utilisateur existe déjà
            await updateDoc(userRef, {
              lastActivity: new Date().toISOString()
            });
          }
        } catch (err) {
          console.error("Erreur auto-initialisation DB:", err);
        }

      } else {
        setUser(prev => (prev?.accessCode === 'GOOGLE_SECURED' ? null : prev));
      }
      setLoadingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const handleManualLogin = (creds: UserCredentials) => {
    setUser(creds);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur déconnexion", error);
    }
    setUser(null);
    setCurrentTab('normal');
  };

  const renderContent = () => {
    if (loadingAuth && currentTab === 'normal') {
      return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-100 border-t-emerald-500"></div></div>;
    }

    switch (currentTab) {
      case 'normal':
        if (!user) return <AuthForm onLogin={handleManualLogin} />;
        return <DictationForm mode={AppMode.NORMAL} user={user} />;
      
      case 'dmi':
        if (!user) return (
           <div className="animate-fade-in">
              <div className="max-w-md mx-auto mb-8 bg-blue-50 border border-blue-100 p-6 rounded-3xl text-center">
                 <p className="text-blue-800 font-black">Veuillez vous identifier pour accéder au module DMI</p>
              </div>
              <AuthForm onLogin={handleManualLogin} />
           </div>
        );
        return <DMIForm user={user} />;

      case 'stats':
        if (!user) return <AuthForm onLogin={handleManualLogin} />;
        return <Statistics user={user} />;
      
      case 'test':
        return <DictationForm mode={AppMode.TEST} user={{ login: 'DEMO_MED', accessCode: '0000' }} />;
      
      case 'guide':
        return <Guide />;

      case 'faq':
        return <FAQ />;
      
      case 'contact':
        return <Contact />;
      
      default:
        return <div className="p-8 text-center font-black">Section en développement</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar 
        currentTab={currentTab} 
        onTabChange={(tab) => setCurrentTab(tab)} 
        user={user}
        onLogout={handleLogout}
      />
      <main className="flex-grow container mx-auto px-4 py-12">
        {renderContent()}
      </main>
      <footer className="bg-white border-t border-slate-100 py-10 text-center">
        <span className="text-slate-400 font-black tracking-widest uppercase text-xs">
          &copy; {new Date().getFullYear()} DictaMed
        </span>
      </footer>
    </div>
  );
}

export default App;