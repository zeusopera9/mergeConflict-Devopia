import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

let endPoint = "http://localhost:5000";
let socket = io.connect(`${endPoint}`);

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState(""); // Add message state

    useEffect(() => {
        // Add the event listener when the component mounts
        socket.on("message", msg => {
            setMessages(prevMessages => [...prevMessages, msg]);
        });
    
        // Clean up the event listener when the component unmounts
        return () => {
            socket.off("message");
        };
    }, []);

    const onChange = e => {
        setMessage(e.target.value);
    };

    const onClick = () => {
        if(message.trim() !== "") { // Trim the message to remove whitespace
            socket.emit("message", { message, type: "user" });
            setMessage("");
        } else {
            alert("Please add a message");
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                {/* <h2>Chat Application</h2> */}
            </div>
            <div className="chat-messages">
                {/* Display chat messages here */}
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`} style={{ color: msg.type === "user" ? "green" : "red" }}>
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                {/* Input field for sending messages */}
                <input value={message} name="message" onChange={onChange} />
                <button onClick={onClick}>Send Message</button>
            </div>
        </div>
    );
}

export default ChatContainer;
