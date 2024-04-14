import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Feedback = () => {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get('http://localhost:7000/quizzes');
                setQuiz(response.data);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchQuiz();
    }, []);
  return (
    <div>
        <h1>Feedback!</h1> 
        <h2>Quiz</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {quiz.map(quiz => (
                <li key={quiz._id} style={{ marginBottom: '8px', backgroundColor: '#EADBC8', padding: '8px', borderRadius: '4px', color: 'black' }}>
                    <strong>Question:</strong> {quiz.responses[0].question} <br />
                    <strong>Student's Answer:</strong> {quiz.responses[0].answer} <br />
                    <strong>Correct Answer:</strong> {quiz.responses[0].correct} <br />

                </li>
            ))}
        </ul> 
    </div>
  )
}

export default Feedback