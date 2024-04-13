import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const AiContainer = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAiI7S9eVXJyI6_2vxKqkWIblRZzrWi2og",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response.data.candidates[0].content.parts[0].text
      );
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="h-screen flex flex-col" style={{marginTop: '60px'}}>
      <form
        onSubmit={generateAnswer}
        className="mt-6 flex flex-col items-center"
      >
        <input
          required
          className="border rounded w-full max-w-md my-2 min-h-fit px-4 py-2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything"
        ></input>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          disabled={generatingAnswer}
          style={{marginBottom: '10px'}}
        >
          {generatingAnswer ? 'Generating...' : 'Generate answer'}
        </button>
      </form>
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <div style={{ maxHeight: '90%', overflowY: 'auto', padding: '10px' }}>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default AiContainer;
