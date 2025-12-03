import { GoogleGenAI } from "@google/genai";
import { AppId } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (
  prompt: string, 
  currentContext: AppId, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  
  // Define context-aware system instructions for HR tasks
  let systemInstruction = `You are the intelligent assistant for CODESMOTECH Consulting's Unified Portal.
  The user is currently using the "${currentContext}" module.
  Your tone should be professional, confidential, and helpful.
  `;

  if (currentContext === AppId.OFFER_LETTERS) {
    systemInstruction += " You are an expert in drafting employment contracts. Help the user write offer letters, calculate compensation packages, and ensure professional language.";
  } else if (currentContext === AppId.PAYSLIPS) {
    systemInstruction += " You are an expert in payroll, tax deductions, and salary breakdowns. Explain net pay vs gross pay, tax codes, and deductions clearly.";
  } else if (currentContext === AppId.APPOINTMENTS) {
    systemInstruction += " You help schedule onboarding appointments and draft appointment confirmation letters.";
  } else if (currentContext === AppId.EXPERIENCE_LETTERS) {
    systemInstruction += " You help draft experience letters (relieving letters) for employees leaving the company. Ensure details about tenure and designation are accurate.";
  } else if (currentContext === AppId.SMART_SIGN) {
    systemInstruction += " You are assisting with the Smart Sign PDF tool. Help the user understand digital signatures, how to place fields on a PDF, and ensure document validity.";
  } else {
    systemInstruction += " You are a general assistant helping the user navigate the CODESMOTECH portal.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to the AI service. Please check your API key.";
  }
};