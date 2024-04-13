import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizInterface = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [userEmail, setUserEmail] = useState(''); // Assuming you have the user's email stored somewhere

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=boolean');
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setQuestions(data.results);
        }
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
      }
    };

    fetchQuizQuestions();
  }, []);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // Check if the selected answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer.toLowerCase() === currentQuestion.correct_answer.toLowerCase();
    if (isCorrect) {
      setScore(score + 1);
    }

    // Add the response to the userResponses array
    setUserResponses([...userResponses, { question: currentQuestion.question, answer: selectedAnswer, correct: isCorrect }]);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  const handleQuizCompletion = async () => {
    try {
      const response = await axios.post('http://localhost:7000/saveQuizResponses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userEmail: userEmail,
          responses: userResponses
        })
      });
      // Handle response if needed
    } catch (error) {
      console.error('Error saving quiz responses:', error);
    }
  };

  console.log(userResponses);

  if (quizCompleted) {
    handleQuizCompletion(); // Call handleQuizCompletion when quiz is completed
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}/{questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="toggle-container">
        <h1>Quiz Page</h1>
      </div>
      {questions.length > 0 && (
        <div>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p style={{ margin: '20px' }}>{questions[currentQuestionIndex].question}</p>
          <div>
            <button style={{ margin: '10px' }} onClick={() => handleAnswerSelection('True')}>True</button>
            <button style={{ margin: '10px' }} onClick={() => handleAnswerSelection('False')}>False</button>
          </div>
          {selectedAnswer && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizInterface;
