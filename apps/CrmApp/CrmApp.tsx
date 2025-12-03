import React, { useState } from 'react';
import { Card } from '../../components/Shared/Card';
import { Search, MoreHorizontal, Mail, Phone, Calendar } from 'lucide-react';

const initialContacts = [
  { id: 1, name: 'Esther Howard', email: 'esther@example.com', role: 'Product Manager', company: 'Capsule', status: 'Active' },
  { id: 2, name: 'Cameron Williamson', email: 'cameron@example.com', role: 'Head of Design', company: 'Catalog', status: 'Pending' },
  { id: 3, name: 'Brooklyn Simmons', email: 'brooklyn@example.com', role: 'Marketing Lead', company: 'Sisyphus', status: 'Active' },
  { id: 4, name: 'Leslie Alexander', email: 'leslie@example.com', role: 'CTO', company: 'Quotient', status: 'Inactive' },
];

export const CrmApp: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredContacts = initialContacts.filter(c => 
    c.name.toLowerCase().includes(filter.toLowerCase()) || 
    c.company.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Customer Management</h1>
          <p className="text-slate-500">Manage your leads and customer relationships.</p>
        </div>
        <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700">
          Add Customer
        </button>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500 text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-900">{filteredContacts.length}</span> results
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                        {contact.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{contact.name}</div>
                        <div className="text-xs text-slate-500">{contact.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900">{contact.company}</div>
                    <div className="text-xs text-slate-500">{contact.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      contact.status === 'Active' ? 'bg-green-100 text-green-800' :
                      contact.status === 'Inactive' ? 'bg-slate-100 text-slate-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <button className="p-1 text-slate-400 hover:text-brand-600 transition-colors"><Mail size={16} /></button>
                        <button className="p-1 text-slate-400 hover:text-brand-600 transition-colors"><Phone size={16} /></button>
                        <button className="p-1 text-slate-400 hover:text-brand-600 transition-colors"><Calendar size={16} /></button>
                        <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors"><MoreHorizontal size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredContacts.length === 0 && (
            <div className="p-12 text-center text-slate-500">
                No customers found matching your search.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};