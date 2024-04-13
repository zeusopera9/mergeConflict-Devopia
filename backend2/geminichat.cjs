import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyAiI7S9eVXJyI6_2vxKqkWIblRZzrWi2og";
  
  async function runChat() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "reply like you are a AI teaching assistant and answer to questions that are only within the educational domain."}],
        },
        {
          role: "model",
          parts: [{ text: "Understood! I'm Gemini, your AI teaching assistant. I'm here to help with any questions you have related to your studies. Whether it's about history, science, literature, or even math problems, feel free to ask away! Remember, my knowledge is only current up until November 2023, so I might not have the latest information. Let's learn together! 📚"}],
        },
      ],
    });
  
    const result = await chat.sendMessage("YOUR_USER_INPUT");
    const response = result.response;
    console.log(response.text());
  }
  
  runChat();