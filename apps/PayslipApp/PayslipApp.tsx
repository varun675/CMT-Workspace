import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from '../../components/Shared/Card';
import { Download, DollarSign, TrendingUp, Calendar } from 'lucide-react';

const data = [
  { month: 'Jan', net: 4200, tax: 1200, deductions: 300 },
  { month: 'Feb', net: 4200, tax: 1200, deductions: 300 },
  { month: 'Mar', net: 4500, tax: 1350, deductions: 300 }, // Bonus
  { month: 'Apr', net: 4200, tax: 1200, deductions: 300 },
  { month: 'May', net: 4200, tax: 1200, deductions: 300 },
  { month: 'Jun', net: 4200, tax: 1200, deductions: 300 },
];

export const PayslipApp: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Payslip Generator</h1>
          <p className="text-slate-500">View salary history and generate monthly payslips.</p>
        </div>
        <button className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 flex items-center gap-2">
           <Download size={16} />
           Export All (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                    <DollarSign size={24} />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">Last Net Pay</p>
                    <h3 className="text-2xl font-bold text-slate-900">$4,200.00</h3>
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <TrendingUp size={24} />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">YTD Earnings</p>
                    <h3 className="text-2xl font-bold text-slate-900">$25,500.00</h3>
                </div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                    <Calendar size={24} />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">Next Pay Date</p>
                    <h3 className="text-2xl font-bold text-slate-900">July 30</h3>
                </div>
            </div>
        </div>
      </div>

      <Card title="Salary Breakdown & History">
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="net" stackId="a" fill="#3b82f6" name="Net Pay" radius={[0, 0, 4, 4]} />
                <Bar dataKey="tax" stackId="a" fill="#cbd5e1" name="Tax" />
                <Bar dataKey="deductions" stackId="a" fill="#94a3b8" name="Deductions" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
      </Card>

      <Card title="Recent Documents">
          <div className="divide-y divide-slate-100">
              {['June 2024', 'May 2024', 'April 2024'].map((month, i) => (
                  <div key={i} className="py-4 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                          <div className="bg-slate-100 p-2 rounded text-slate-500"><FileTextIcon /></div>
                          <div>
                              <p className="text-sm font-medium text-slate-900">Payslip - {month}</p>
                              <p className="text-xs text-slate-500">Generated automatically</p>
                          </div>
                      </div>
                      <button className="text-brand-600 hover:text-brand-700 text-sm font-medium flex items-center gap-1">
                        <Download size={14} /> Download
                      </button>
                  </div>
              ))}
          </div>
      </Card>
    </div>
  );
};

const FileTextIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
);