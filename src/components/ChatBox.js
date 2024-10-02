import React from 'react';
import './ChatBox.css';

const ChatBox = ({ messages }) => {
    return (
        <div className="chat-box">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                    {message.text}
                </div>
            ))}
        </div>
    );
};

export default ChatBox;
