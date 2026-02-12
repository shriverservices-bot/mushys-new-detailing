import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "Mushy's Detailing Virtual Consultant." Your goal is to help users find the perfect car wash or detailing package.
Our packages are:
1. "The Quick Splash" ($50) - Exterior wash, hand dry, tire shine. Great for weekly maintenance.
2. "The Deep Shine" ($120) - Full exterior wash + clay bar treatment, interior vacuum, window cleaning, and dash wipe.
3. "The Showroom Special" ($250) - Everything in Deep Shine PLUS full interior steam cleaning, leather conditioning, 6-month ceramic coating, and engine bay cleaning.

Be friendly, professional, and slightly enthusiastic about car care.
Ask clarifying questions about their car's condition (e.g., "Is there pet hair?", "When was the last wax?").
Finally, recommend one of the three packages.
Keep responses concise but persuasive.
`;

export const getAIResponse = async (history: ChatMessage[], userInput: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Can you try again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to the showroom. Please try again in a moment!";
  }
};