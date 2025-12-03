import React from 'react';
import { LayoutDashboard, FileText, Banknote, CalendarCheck, Settings, LogOut, PenTool, Medal, X, ShieldAlert } from 'lucide-react';
import { AppId, AppManifest } from '../../types';

interface SidebarProps {
  activeApp: AppId;
  onNavigate: (appId: AppId) => void;
  isOpen: boolean;
  onClose: () => void;
}

const apps: AppManifest[] = [
  { id: AppId.HOME, name: 'Overview', description: 'Dashboard', icon: 'LayoutDashboard' },
  { id: AppId.SMART_SIGN, name: 'Smart Sign PDF', description: 'Digital Signatures', icon: 'PenTool' },
  { id: AppId.OFFER_LETTERS, name: 'Offer Letters', description: 'Generate Contracts', icon: 'FileText' },
  { id: AppId.APPOINTMENTS, name: 'Appointments', description: 'Onboarding & Docs', icon: 'CalendarCheck' },
  { id: AppId.PAYSLIPS, name: 'Payslips', description: 'Payroll History', icon: 'Banknote' },
  { id: AppId.EXPERIENCE_LETTERS, name: 'Experience', description: 'Relieving Letters', icon: 'Medal' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeApp, onNavigate, isOpen, onClose }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutDashboard': return <LayoutDashboard size={20} />;
      case 'FileText': return <FileText size={20} />;
      case 'Banknote': return <Banknote size={20} />;
      case 'CalendarCheck': return <CalendarCheck size={20} />;
      case 'Settings': return <Settings size={20} />;
      case 'PenTool': return <PenTool size={20} />;
      case 'Medal': return <Medal size={20} />;
      default: return <Hexagon size={20} />;
    }
  };

  const handleNavigation = (id: AppId) => {
    onNavigate(id);
    onClose(); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Brand */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/Company Logo.png" 
              alt="CODESMOTECH" 
              className="h-full w-auto"
            />
          </div>
          {/* Mobile Close Button */}
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Modules</p>
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => handleNavigation(app.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 group ${
                activeApp === app.id
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/50'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className={activeApp === app.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}>
                {getIcon(app.icon)}
              </span>
              <span className="font-medium text-sm">{app.name}</span>
              {activeApp === app.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Audit / Warning Footer */}
        <div className="p-4 border-t border-slate-800 flex-shrink-0">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
             <ShieldAlert size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
             <div className="min-w-0">
               <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5 tracking-wider">Audit Active</p>
               <p className="text-[10px] leading-tight text-slate-500">
                 Activity on this app is being monitored. Logs and screenshots are taken for audit purposes.
               </p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};