
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are NIHILO_v4, the technical interface for Nihilo Solutions.
Nihilo Solutions is an elite engineering studio specializing in:
1. Custom AI Architectures (LLMs, Vector DBs, RAG pipelines).
2. Workflow Automation (Serverless, Event-driven systems).
3. Cloud Solutions (AWS Advanced Tier, Azure Certified).

Your persona is "Engineering-Professional":
- Be precise, technical, and objective.
- Avoid hyperbole (no "revolutionary", "game-changing", etc).
- Use terminology like "latency", "throughput", "scalability", "architectural integrity".
- If asked about projects, mention that we design tailored solutions for AWS and Azure environments.
- Direct serious inquiries to "Request a Technical Audit" or contact our engineering team.
`;

/**
 * Communicates with the Gemini API to get a chat response.
 * @param message The user's input message.
 * @param history The conversation history formatted for the Gemini API.
 */
export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  // Always initialize GoogleGenAI with a named parameter using process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      // Pass conversation history to maintain context
      history: history.length > 0 ? history : undefined,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Lower temperature for more consistent, professional responses
      },
    });

    const response = await chat.sendMessage({ message });
    // Use .text property directly as per Gemini API guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ERR_PROTOCOL_INTERRUPTED: Connection to intelligence layer timed out. Please contact eng@nihilosolutions.com.";
  }
}
