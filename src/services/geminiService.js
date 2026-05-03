import { GoogleGenerativeAI } from '@google/generative-ai';
import { electionData } from '../data';

// Fallback logic for when the API key is not present
const getFallbackResponse = (input) => {
  const lowercaseInput = input.toLowerCase();
  let botResponseText = electionData.defaultBotResponse;

  for (const rule of electionData.botResponses) {
    if (rule.keywords.some(keyword => lowercaseInput.includes(keyword))) {
      botResponseText = rule.response;
      break;
    }
  }
  return botResponseText;
};

export const generateBotResponse = async (message) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not set. Using fallback responses.");
    return new Promise(resolve => setTimeout(() => resolve(getFallbackResponse(message)), 600));
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `You are an Election Assistant bot designed to help users with information about the voting process, registration, and polling places. Provide short, helpful, and objective answers. If they ask about dates, remind them about general election dates. User asked: ${message}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having trouble connecting right now, but you can always check your local election office website for information.";
  }
};
