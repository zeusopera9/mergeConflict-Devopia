import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tdashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:7000/user');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);



    return (
        <div style={{ display: 'flex', margin: '7%' }}>
            <div style={{ marginRight: '20px' }}>
                <h1>Dashboard</h1>
                <h2>Students</h2>
                <div style={{ height: '400px', overflowY: 'scroll' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {users.map(user => (
                            <li key={user._id} style={{ marginBottom: '8px', backgroundColor: '#EADBC8', padding: '8px', borderRadius: '4px', color: 'black' }}>
                                <strong>Email:</strong> {user.email} <br />
                                <strong>First name:</strong> {user.fname} <br />
                                <strong>Last name:</strong> {user.lname}
                                <button className="bg-white ml-8">View Quiz Score</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                {/* <h2>Quiz</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {quiz.map(quiz => (
                        <li key={quiz._id} style={{ marginBottom: '8px', backgroundColor: '#EADBC8', padding: '8px', borderRadius: '4px', color: 'black' }}>
                            <strong>Question:</strong> {quiz.question} <br />
                            <strong>Option A:</strong> {quiz.optionA} <br />
                            <strong>Option B:</strong> {quiz.optionB} <br />
                            <strong>Option C:</strong> {quiz.optionC} <br />
                            <strong>Option D:</strong> {quiz.optionD} <br />
                            <strong>Correct Answer:</strong> {quiz.correctAnswer} <br />
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
}

export default Tdashboard;
