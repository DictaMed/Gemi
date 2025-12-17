import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AuthForm } from './components/AuthForm';
import { DictationForm } from './components/DictationForm';
import { DMIForm } from './components/DMIForm';
import { FAQ } from './pages/FAQ';
import { Guide } from './pages/Guide';
import { Contact } from './pages/Contact';
import { AppMode, UserCredentials } from './types';

function App() {
  const [currentTab, setCurrentTab] = useState('normal');
  const [user, setUser] = useState<UserCredentials | null>(null);

  const handleLogin = (creds: UserCredentials) => {
    setUser(creds);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'normal':
        if (!user) {
          return <AuthForm onLogin={handleLogin} />;
        }
        return <DictationForm mode={AppMode.NORMAL} user={user} />;
      
      case 'dmi':
        if (!user) {
           // Reuse the AuthForm for DMI if not logged in
           return (
             <div>
                <div className="text-center mb-6 text-cyan-600 font-medium bg-cyan-50 p-3 rounded-lg inline-block mx-auto">
                   Veuillez vous connecter pour accéder au Mode DMI
                </div>
                <AuthForm onLogin={handleLogin} />
             </div>
           );
        }
        return <DMIForm user={user} />;
      
      case 'test':
        // Test mode uses a dummy user
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
      <Navbar currentTab={currentTab} onTabChange={(tab) => {
        setCurrentTab(tab);
      }} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} DictaMed. Application Frontend sécurisée.
      </footer>
    </div>
  );
}

export default App;