import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { UserProfile } from '../../types';
import logoImage from '../../src/assets/company-logo.PNG';

interface LoginPageProps {
  onLogin: (user: UserProfile) => void;
}

// Configuration for allowed users
// keys must be strictly lowercase for case-insensitive matching
const ALLOWED_CREDENTIALS: Record<string, string> = {
  'rahul.sharma@codesmotech': 'Rahul Sharma',
  'rahul.sharma@codesmotech.com': 'Rahul Sharma',
  'sachin.s@codesmotech': 'Sachin Sharma',
  'sachin.s@codesmotech.com': 'Sachin Sharma',
  'rashmi.bhatia@codesmotech.com': 'Rashmi Bhatia'
};

const PASSWORD_SECRET = 'CMT@123';

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay for better UX
    setTimeout(() => {
      // 1. NORMALIZE INPUT: Trim whitespace and convert to lowercase strictly
      const normalizedEmail = email.trim().toLowerCase();
      
      // 2. Validate Password
      if (password !== PASSWORD_SECRET) {
        setError('Invalid password provided.');
        setIsLoading(false);
        return;
      }

      // 3. Validate User ID using normalized email
      const userName = ALLOWED_CREDENTIALS[normalizedEmail];
      
      if (!userName) {
        setError('Access Denied: This email ID is not authorized to access the portal.');
        setIsLoading(false);
        return;
      }

      // 4. Success
      const userProfile: UserProfile = {
        id: normalizedEmail.split('@')[0],
        name: userName,
        email: normalizedEmail, // Store the normalized email
        role: 'hr_admin',
        avatarUrl: ''
      };

      onLogin(userProfile);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-200 relative z-10 overflow-hidden animate-in fade-in zoom-in duration-500">
        {/* Header */}
        <div className="bg-slate-900 p-8 text-center relative">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
           <div className="flex flex-col justify-center items-center mb-2">
             <div className="bg-white rounded-lg p-2 inline-block mb-3 shadow-lg">
               <img 
                 src={logoImage} 
                 alt="CODESMOTECH" 
                 className="h-20 w-auto object-contain"
               />
             </div>
           </div>
           <p className="text-brand-100 text-sm font-medium">Unified HR Workspace</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-sm p-3 rounded-lg flex items-start gap-2 animate-in slide-in-from-top-2">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email ID</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900"
                  placeholder="name@codesmotech.com"
                  autoFocus
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Sign In to Workspace
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              Restricted Access. Activity is monitored.<br/>
              © Codesmotech Consulting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};