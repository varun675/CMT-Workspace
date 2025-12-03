// Defines the contract for our internal Micro-apps
export enum AppId {
  HOME = 'home',
  OFFER_LETTERS = 'offer-letters',
  PAYSLIPS = 'payslips',
  APPOINTMENTS = 'appointments',
  EXPERIENCE_LETTERS = 'experience-letters',
  SMART_SIGN = 'smart-sign'
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'hr_admin' | 'employee';
  avatarUrl: string;
}

export interface GlobalState {
  theme: 'light' | 'dark';
  user: UserProfile;
  activeApp: AppId;
}

export interface AppManifest {
  id: AppId;
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}