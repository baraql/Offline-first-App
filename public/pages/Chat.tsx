import React from 'react';
import './Chat.css';

interface ChatProps {
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const Chat: React.FunctionComponent<ChatProps> = ({ title, description, isSelected, onClick }) => {
  return (
    <div
      className={`box ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick()}
    >
      <div className="chatText">
        <div>
          <b className="chatTitle">{title}</b>
        </div>
        <div>
          <b className="chatDesc">{description}</b>
        </div>
      </div>
    </div>
  );
};

export default Chat;
