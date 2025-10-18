const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState("");
  
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    // Saving it in newChatMessages variable to save the new value in it to pass it to the useState,
    // Because useState is async.
    const newChatMessages = [ 
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  function clickEnter(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        value={inputText} //"controlled input" to be able to reset it after clicking the button.
        onChange={saveInputText}
        onKeyDown={clickEnter}
      />
      <button onClick={sendMessage} >Send</button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  return (
    <div>
      {sender === "robot" && <img src="imgs/robot.png" width={50} />}
      {message}
      {sender === "user" && <img src="imgs/user.png" width={50} />}
    </div>
  );
}

// This uses ChatMessage as a blueprint
function ChatMessages({ chatMessages }) {
  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
}

function App() {
  const [chatMessages, setChatMessages] = React.useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is September 27",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
    </div>
  );
}

root.render(<App />);
