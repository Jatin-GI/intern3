// lib/ai.js
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Model name must be exact and without leading space
const MODEL_NAME = "gemini-1.5-flash";

let chatSession;
let genAiCodeSession;

const initializeAI = async () => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey)
      throw new Error("❌ NEXT_PUBLIC_GEMINI_API_KEY is not defined");

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
      generationConfig: {
        temperature: 0.9,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });

    // Start chat sessions
    chatSession = await model.startChat({ history: [] });

    genAiCodeSession = await model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.9,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      },
    });

    console.log("✅ Gemini model initialized.");
  } catch (error) {
    console.error("❌ AI Model Initialization Error:", error);
    throw error;
  }
};

// Only initialize once
const aiReady = initializeAI();

export async function getChatSession() {
  await aiReady;
  return chatSession;
}

export async function getGenAiCode() {
  await aiReady;
  return genAiCodeSession;
}
