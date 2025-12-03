import React from 'react';
import { Card } from '../../components/Shared/Card';
import { Calendar, UserPlus, FileSignature, ChevronRight } from 'lucide-react';

export const AppointmentApp: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Appointment Letters</h1>
          <p className="text-slate-500">Manage onboarding appointments and issue confirmation letters.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Quick Actions">
            <div className="grid grid-cols-2 gap-4">
                <button className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-300 hover:shadow-md transition-all text-left group">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <UserPlus size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900">New Appointment</h3>
                    <p className="text-xs text-slate-500 mt-1">Schedule for new hire</p>
                </button>
                <button className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-300 hover:shadow-md transition-all text-left group">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <FileSignature size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900">Bulk Generate</h3>
                    <p className="text-xs text-slate-500 mt-1">From CSV import</p>
                </button>
            </div>
        </Card>

        <Card title="Upcoming Onboarding">
            <div className="space-y-4">
                {[
                    { name: "Alice Freeman", role: "Marketing Intern", time: "Tomorrow, 10:00 AM" },
                    { name: "Bob Smith", role: "DevOps Engineer", time: "Mon, 9:00 AM" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-3">
                             <div className="bg-white p-2 rounded shadow-sm text-slate-700">
                                 <Calendar size={18} />
                             </div>
                             <div>
                                 <p className="text-sm font-medium text-slate-900">{item.name}</p>
                                 <p className="text-xs text-slate-500">{item.role}</p>
                             </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-medium text-brand-600">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
      </div>

      <h3 className="text-lg font-semibold text-slate-800 mt-8 mb-4">Template Library</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Standard Full-Time', 'Contractor Agreement', 'Internship Offer'].map((template, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-300 cursor-pointer transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                          <FileSignature size={16} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{template}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-brand-500" />
              </div>
          ))}
      </div>
    </div>
  );
};