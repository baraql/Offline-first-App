import React from "react";
import reactDom from "react-dom";

console.log("hello?????");

// Your React components go here
const WelcomeMessage = () => {
  return <h1>Hello, Welcome to our App!</h1>;
};

const ChatList = ({ chats }) => {
  return (
    <ul>
      {chats.map((chat) => (
        <li key={chat.chat_identifier}>{chat.display_name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  // Example data for the chat list (assuming it's fetched from the server)
  const chatsData = [
    { chat_identifier: 1, display_name: "John Doe" },
    { chat_identifier: 2, display_name: "Jane Smith" },
    { chat_identifier: 3, display_name: "Bob Johnson" },
  ];

  return (
    <div>
      <WelcomeMessage />
      <ChatList chats={chatsData} />
    </div>
  );
};

// Render the main App component to the "root" element in the index.html
ReactDOM.render(<App />, document.getElementById("root"));
