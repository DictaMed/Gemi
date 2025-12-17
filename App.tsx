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
import { auth } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [currentTab, setCurrentTab] = useState('normal');
  const [user, setUser] = useState<UserCredentials | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Observer l'état de l'authentification Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          login: firebaseUser.email || 'Utilisateur Google',
          accessCode: 'GOOGLE_SECURED',
          uid: firebaseUser.uid // Stockage de l'UID pour Firestore
        });
      } else {
        setUser(prev => (prev?.accessCode === 'GOOGLE_SECURED' ? null : prev));
      }
      setLoadingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  // Gestion du login manuel (fallback)
  const handleManualLogin = (creds: UserCredentials) => {
    setUser(creds);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur de déconnexion", error);
    }
    setUser(null);
    setCurrentTab('normal');
  };

  const renderContent = () => {
    if (loadingAuth && currentTab === 'normal') {
      return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div></div>;
    }

    switch (currentTab) {
      case 'normal':
        if (!user) {
          return <AuthForm onLogin={handleManualLogin} />;
        }
        return <DictationForm mode={AppMode.NORMAL} user={user} />;
      
      case 'dmi':
        if (!user) {
           return (
             <div>
                <div className="text-center mb-6 text-cyan-600 font-medium bg-cyan-50 p-3 rounded-lg inline-block mx-auto">
                   Veuillez vous connecter pour accéder au Mode DMI
                </div>
                <AuthForm onLogin={handleManualLogin} />
             </div>
           );
        }
        return <DMIForm user={user} />;

      case 'stats':
        if (!user) {
          return (
            <div>
               <div className="text-center mb-6 text-indigo-600 font-medium bg-indigo-50 p-3 rounded-lg inline-block mx-auto">
                  Veuillez vous connecter pour voir vos statistiques
               </div>
               <AuthForm onLogin={handleManualLogin} />
            </div>
          );
       }
       return <Statistics user={user} />;
      
      case 'test':
        return <DictationForm mode={AppMode.TEST} user={{ login: 'TEST_USER', accessCode: '0000' }} />;
      
      case 'guide':
        return <Guide />;

      case 'faq':
        return <FAQ />;
      
      case 'contact':
        return <Contact />;
      
      default:
        return <div className="p-8 text-center">Page introuvable</div>;
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
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} DictaMed. Application Frontend sécurisée avec Firebase.
      </footer>
    </div>
  );
}

export default App;