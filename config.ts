import { AppId } from "./types";

// REPLACE THESE URLS WITH YOUR ACTUAL GITHUB PAGES LINKS
export const EXTERNAL_APP_CONFIG: Record<AppId, string> = {
  [AppId.HOME]: '', // Home is internal
  [AppId.SMART_SIGN]: 'https://varun675.github.io/Sign-PDF/',
  [AppId.OFFER_LETTERS]: 'https://varun675.github.io/OfferLetter/',
  [AppId.PAYSLIPS]: 'https://varun675.github.io/Payslip-Generator/',
  [AppId.APPOINTMENTS]: 'https://varun675.github.io/Appointment-Letter/',
  [AppId.EXPERIENCE_LETTERS]: 'https://varun675.github.io/Experience-Letter/'
};

export const IS_INTERNAL_APP = (id: AppId) => {
  return id === AppId.HOME;
};