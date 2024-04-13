import React, { useState } from 'react';
import ChatContainer from '../components/Chat/ChatContainer';
import AiContainer from '../components/Chat/AiContainer';

const Chat = () => {
  const [teacher, setTeacher] = useState(true);

  const changeRecipient = () => {
    setTeacher(!teacher);
  };

  return (
    <>
      {/* Header */}
      <h1 className="text-2xl font-bold py-5">Chat Application</h1>

      {/* Toggle between Teacher and AI Assistant */}
      <div className="toggle-container">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={teacher}
            onChange={changeRecipient}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {teacher ? 'Chat with your Teacher' : 'Chat with AI Bot'}
          </span>
        </label>
      </div>
      
      <div>
        {/* Conditionally render ChatContainer based on teacher state */}
        {teacher && <ChatContainer />}
        {!teacher && <AiContainer />}
      </div>
    </>
  );
};

export default Chat;
