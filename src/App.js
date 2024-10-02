import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ChatBox from './components/ChatBox';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { type: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('http://localhost:5000/chat', { query: input });
            const botMessage = { type: 'bot', text: response.data.reply };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response:', error);
        }

        setInput('');
    };

    return (
        <div className="app">
            <h1>Chat with Gemini AI</h1>
            <ChatBox messages={messages} />
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
        </div>
    );
}

export default App;
