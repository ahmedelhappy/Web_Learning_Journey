const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function ChatInput() {
  return (
    <div>
      <input placeholder="Send a message to Chatbot" size="30" />
      <button>Send</button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  // if (sender === "robot") {
  //   return (
  //     <div>
  //       <img src="imgs/robot.png" width={50} />
  //       {message}
  //     </div>
  //   );
  // }
  return (
    <div>
      {sender === "robot" && <img src="imgs/robot.png" width={50} />}
      {message}
      {sender === "user" && <img src="imgs/user.png" width={50} />}
    </div>
  );
}

function App() {
  return (
    <div>
      <ChatInput />
      <ChatMessage message="hello chatbot" sender="user" />
      <ChatMessage message="Hello! How can I help you?" sender="robot" />
      <ChatMessage message="can you get me todays date?" sender="user" />
      <ChatMessage message="Today is Oct 15" sender="robot" />
    </div>
  );
}

root.render(<App />);
