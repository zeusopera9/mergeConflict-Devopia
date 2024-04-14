import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feedback = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:7000/quizzes');
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchQuizzes();
    }, []);

    return (
        <div style={{ height: '100vh', overflowY: 'auto' }}>
            <h1>Feedback!</h1>
            <h2>Quiz</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {quizzes.map((quiz) => (
                    <li key={quiz._id} style={{ marginBottom: '16px', backgroundColor: '#EADBC8', padding: '16px', borderRadius: '4px', color: 'black' }}>
                        <h3>Quiz for {quiz.userEmail}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {quiz.responses.map((response, index) => (
                                <li key={response._id} style={{ marginBottom: '8px' }}>
                                    <strong>Question:</strong> {response.question} <br />
                                    <strong>Student's Answer:</strong> {response.answer} <br />
                                    <strong>Correct Answer:</strong> {response.correct ? 'True' : 'False'} <br />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;
