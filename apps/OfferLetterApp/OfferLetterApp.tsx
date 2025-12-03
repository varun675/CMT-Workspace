import React, { useState } from 'react';
import { Card } from '../../components/Shared/Card';
import { Search, Plus, FileCheck, Clock, CheckCircle, XCircle, MoreVertical, Download } from 'lucide-react';

const candidates = [
  { id: 1, name: 'Elena Rodriguez', role: 'Senior React Dev', department: 'Engineering', status: 'Draft', date: '2023-10-24' },
  { id: 2, name: 'Marcus Chen', role: 'Product Owner', department: 'Product', status: 'Sent', date: '2023-10-22' },
  { id: 3, name: 'Sarah Miller', role: 'UX Designer', department: 'Design', status: 'Accepted', date: '2023-10-20' },
  { id: 4, name: 'James Wilson', role: 'Data Analyst', department: 'Data', status: 'Rejected', date: '2023-10-18' },
];

export const OfferLetterApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Offer Letter Management</h1>
          <p className="text-slate-500">Create, track, and manage candidate offers.</p>
        </div>
        <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 flex items-center gap-2">
          <Plus size={16} />
          Create New Offer
        </button>
      </div>

      <Card className="p-0 overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex space-x-1 bg-slate-200/50 p-1 rounded-lg">
                {['all', 'draft', 'sent'].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-all ${
                            activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Search candidates..." 
                    className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
            </div>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100">
            {candidates.map(candidate => (
                <div key={candidate.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold">
                            {candidate.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900">{candidate.name}</h4>
                            <p className="text-xs text-slate-500">{candidate.role} • {candidate.department}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 w-28">
                            {candidate.status === 'Draft' && <FileCheck size={16} className="text-slate-400" />}
                            {candidate.status === 'Sent' && <Clock size={16} className="text-blue-500" />}
                            {candidate.status === 'Accepted' && <CheckCircle size={16} className="text-green-500" />}
                            {candidate.status === 'Rejected' && <XCircle size={16} className="text-red-500" />}
                            <span className={`text-sm font-medium ${
                                candidate.status === 'Accepted' ? 'text-green-700' :
                                candidate.status === 'Rejected' ? 'text-red-700' : 
                                candidate.status === 'Sent' ? 'text-blue-700' : 'text-slate-600'
                            }`}>{candidate.status}</span>
                        </div>
                        <div className="text-sm text-slate-500 w-24 text-right">{candidate.date}</div>
                        <div className="flex items-center gap-1">
                          <button className="p-2 text-slate-300 hover:text-brand-600 rounded-full hover:bg-brand-50 transition-colors" title="Download Offer">
                              <Download size={16} />
                          </button>
                          <button className="p-2 text-slate-300 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors">
                              <MoreVertical size={16} />
                          </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Card>
    </div>
  );
};