import React, { useState } from 'react';
import { Sidebar } from './components/Global/Sidebar';
import { AppId, UserProfile } from './types';
import { HomeApp } from './apps/HomeApp/HomeApp';
import { ExternalAppLoader } from './components/Shared/ExternalAppLoader';
import { EXTERNAL_APP_CONFIG, IS_INTERNAL_APP } from './config';
import { Bell, Search, Globe, ArrowLeft, Home, Menu, LogOut } from 'lucide-react';
import { LoginPage } from './components/Global/LoginPage';

const App: React.FC = () => {
  // Authentication State
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [activeApp, setActiveApp] = useState<AppId>(AppId.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Logout
  const handleLogout = () => {
    setCurrentUser(null);
    setActiveApp(AppId.HOME);
  };

  // 1. Show Login Page if not authenticated
  if (!currentUser) {
    return <LoginPage onLogin={setCurrentUser} />;
  }

  // 2. Render Active App Logic
  const renderActiveApp = () => {
    if (IS_INTERNAL_APP(activeApp)) {
      if (activeApp === AppId.HOME) {
        return <HomeApp onNavigate={setActiveApp} />;
      }
    }

    const externalUrl = EXTERNAL_APP_CONFIG[activeApp];
    
    if (!externalUrl) {
      return (
        <div className="p-12 text-center">
           <Globe size={48} className="text-slate-300 mx-auto mb-4" />
           <h3 className="text-lg font-medium text-slate-900">Application Not Configured</h3>
           <p className="text-slate-500">Please add the GitHub Pages URL for <code>{activeApp}</code> in <code>config.ts</code></p>
        </div>
      );
    }

    return (
      <div className="h-[calc(100vh-8rem)] w-full animate-in fade-in duration-500">
        <ExternalAppLoader 
          url={externalUrl} 
          title={activeApp}
          currentUser={currentUser} 
        />
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeApp={activeApp} 
        onNavigate={setActiveApp} 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Layout */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-10">
          <div className="flex items-center text-sm text-slate-500 gap-2">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="mr-2 p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg md:hidden"
            >
              <Menu size={24} />
            </button>

            {/* Back Button */}
            {activeApp !== AppId.HOME && (
              <button 
                onClick={() => setActiveApp(AppId.HOME)}
                className="mr-1 p-1.5 md:p-2 md:-ml-2 text-slate-500 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all group flex items-center gap-2"
                title="Back to Dashboard"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-slate-700 group-hover:text-brand-700 hidden sm:inline">Back</span>
              </button>
            )}

            {/* Breadcrumbs */}
            <div className="hidden sm:flex items-center">
              {activeApp !== AppId.HOME ? (
                 <span className="mx-2 text-slate-300">|</span>
              ) : (
                 <Home size={18} className="mr-2 text-brand-600" />
              )}

              <span className={`font-medium ${activeApp === AppId.HOME ? 'text-slate-800' : 'text-slate-500'} hidden md:inline`}>HR Portal</span>
              
              {activeApp !== AppId.HOME && (
                <>
                  <span className="mx-2 hidden md:inline">/</span>
                  <span className="capitalize font-semibold text-brand-600 truncate max-w-[150px]">{activeApp.replace('-', ' ')}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative hidden md:block">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input 
                 type="text" 
                 placeholder="Search portal..." 
                 className="pl-9 pr-4 py-1.5 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-brand-300 focus:ring-2 focus:ring-brand-100 transition-all w-48 lg:w-64"
               />
            </div>
            
            <button className="relative p-2 text-slate-500 hover:text-brand-600 transition-colors">
              <Bell size={20} />
            </button>

            {/* User Profile & Logout */}
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-slate-800 leading-none">{currentUser.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{currentUser.email}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm border border-brand-200">
                {currentUser.name.charAt(0)}
              </div>
              <button 
                onClick={handleLogout}
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth bg-slate-50/50">
          <div className="max-w-7xl mx-auto w-full h-full">
            {renderActiveApp()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;