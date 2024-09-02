import React, { useState } from 'react';
import './Chat.css';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Instructor', text: 'Hola, ¿cómo están todos?' },
    { id: 2, user: user.name, text: 'Estoy bien, gracias. ¿Cuándo es la próxima clase?' },
    { id: 3, user: 'Instructor', text: 'La próxima clase es el miércoles a las 18:00.' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: user.name, text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <h1>Chat del Curso</h1>
      <hr />
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.user === user.name ? 'sent' : 'received'}`}>
            <strong>{message.user}:</strong>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
