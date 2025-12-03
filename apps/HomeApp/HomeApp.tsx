import React from 'react';
import { Card } from '../../components/Shared/Card';
import { FileText, Banknote, CalendarCheck, ExternalLink, Activity, PenTool, Medal, Quote } from 'lucide-react';
import { AppId } from '../../types';
import { EXTERNAL_APP_CONFIG } from '../../config';

export const HomeApp: React.FC<{ onNavigate: (id: AppId) => void }> = ({ onNavigate }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-brand-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start justify-between">
            <div className="max-w-xl">
                <h1 className="text-2xl md:text-3xl font-bold mb-3">CODESMOTECH Workspace</h1>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                    Welcome to the unified consulting portal. Access your tools for signing documents, managing HR, and generating reports from a single secure location.
                </p>
                <div className="inline-flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <Quote className="text-brand-400 flex-shrink-0" size={20} />
                    <div>
                        <p className="text-sm italic text-slate-200">
                            "Empowering our team with unified tools is the key to our collective success. Welcome home." <span className="not-italic font-medium text-brand-300 ml-1">— Sachin Sharma</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Launchpad Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Activity size={20} className="text-brand-600"/> 
            Application Launchpad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* App Card: Smart Sign PDF */}
             <button 
                onClick={() => onNavigate(AppId.SMART_SIGN)}
                className="group relative flex flex-col items-start p-6 bg-white rounded-xl border border-brand-200 shadow-sm hover:shadow-lg hover:border-brand-400 transition-all duration-300 text-left ring-1 ring-brand-100"
             >
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                  <PenTool size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors">Smart Sign PDF</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Digitally sign PDF documents securely. Hosted by CODESMOTECH.
                </p>
                <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
                    {EXTERNAL_APP_CONFIG[AppId.SMART_SIGN] ? new URL(EXTERNAL_APP_CONFIG[AppId.SMART_SIGN]).hostname : 'No URL'}
                  </span>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-500" />
                </div>
             </button>

             {/* App Card: Offer Letters */}
             <button 
                onClick={() => onNavigate(AppId.OFFER_LETTERS)}
                className="group relative flex flex-col items-start p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 text-left"
             >
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors">Offer Letters</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Create, review and send candidate offer letters.
                </p>
                <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
                    {EXTERNAL_APP_CONFIG[AppId.OFFER_LETTERS] ? new URL(EXTERNAL_APP_CONFIG[AppId.OFFER_LETTERS]).hostname : 'No URL'}
                  </span>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-500" />
                </div>
             </button>

             {/* App Card: Payslips */}
             <button 
                onClick={() => onNavigate(AppId.PAYSLIPS)}
                className="group relative flex flex-col items-start p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 text-left"
             >
                <div className="bg-green-50 p-3 rounded-lg text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  <Banknote size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors">Payslip Generator</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Generate salary slips and view tax breakdowns.
                </p>
                <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-slate-50">
                   <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
                    {EXTERNAL_APP_CONFIG[AppId.PAYSLIPS] ? new URL(EXTERNAL_APP_CONFIG[AppId.PAYSLIPS]).hostname : 'No URL'}
                  </span>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-500" />
                </div>
             </button>

             {/* App Card: Appointments */}
             <button 
                onClick={() => onNavigate(AppId.APPOINTMENTS)}
                className="group relative flex flex-col items-start p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 text-left"
             >
                <div className="bg-purple-50 p-3 rounded-lg text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  <CalendarCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors">Appointment Letter</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Generate appointment confirmation docs.
                </p>
                <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-slate-50">
                   <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
                    {EXTERNAL_APP_CONFIG[AppId.APPOINTMENTS] ? new URL(EXTERNAL_APP_CONFIG[AppId.APPOINTMENTS]).hostname : 'No URL'}
                  </span>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-500" />
                </div>
             </button>

             {/* App Card: Experience Letters */}
             <button 
                onClick={() => onNavigate(AppId.EXPERIENCE_LETTERS)}
                className="group relative flex flex-col items-start p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 text-left"
             >
                <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                  <Medal size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors">Experience Letter</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Generate relieving and experience certificates.
                </p>
                <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-slate-50">
                   <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
                    {EXTERNAL_APP_CONFIG[AppId.EXPERIENCE_LETTERS] ? new URL(EXTERNAL_APP_CONFIG[AppId.EXPERIENCE_LETTERS]).hostname : 'No URL'}
                  </span>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-brand-500" />
                </div>
             </button>
          </div>
        </div>

        {/* Status / Info Column */}
        <div className="space-y-6">
           <Card title="System Status">
             <div className="space-y-4">
               <div className="flex items-center justify-between text-sm">
                 <span className="text-slate-600">Host Application</span>
                 <span className="flex items-center text-green-600 gap-1 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" /> Online
                 </span>
               </div>
               <div className="h-px bg-slate-100" />
               <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Integrations</h4>
               
               {[
                 { name: 'Smart Sign PDF', url: EXTERNAL_APP_CONFIG[AppId.SMART_SIGN] },
                 { name: 'Offer Letters', url: EXTERNAL_APP_CONFIG[AppId.OFFER_LETTERS] },
                 { name: 'Payslips', url: EXTERNAL_APP_CONFIG[AppId.PAYSLIPS] },
                 { name: 'Appointments', url: EXTERNAL_APP_CONFIG[AppId.APPOINTMENTS] },
                 { name: 'Experience', url: EXTERNAL_APP_CONFIG[AppId.EXPERIENCE_LETTERS] }
               ].map((app, i) => (
                 <div key={i} className="flex items-center justify-between text-sm">
                   <span className="text-slate-700">{app.name}</span>
                   {app.url ? (
                     <span className="text-slate-400 text-xs">Linked</span>
                   ) : (
                     <span className="text-red-400 text-xs">Pending</span>
                   )}
                 </div>
               ))}
             </div>
           </Card>
        </div>
      </div>
    </div>
  );
};