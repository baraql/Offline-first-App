import React, { useState } from 'react';
import './ChatList.css';
import Chat from './Chat';

const ChatList = () => {
  const [selectedBoxId, setSelectedBoxId] = useState<number | null>(null);

  const handleBoxClick = (boxId: number) => {
    setSelectedBoxId(boxId);
  };

  const chatMessages = [
    { id: 1, sender: 'John', message: 'Hello!', timestamp: '10:00 AM' },
    { id: 2, sender: 'Jane', message: 'Hi John!', timestamp: '10:05 AM' },
    { id: 3, sender: 'John', message: 'How are you?', timestamp: '10:10 AM' },
    // Add more chat messages here
  ];

  return (
    <div className="chat-list">
      {chatMessages.map((message) => (
        <div key={message.id} className="chatContainer">
          <Chat
            title={message.sender}
            description={message.message}
            isSelected={selectedBoxId === message.id}
            onClick={() => {
              console.log("1box clicked")
              handleBoxClick(message.id)
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ChatList;
