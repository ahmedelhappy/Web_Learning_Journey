const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState("");

  // used useState because when react re-renders the function, doesn't set it back to "false"
  // Check out MS whiteboard lesson 3.
  const [isLoading, setIsLoading] = React.useState(false); 

  function saveInputText(event) {
    setInputText(event.target.value);
  }


  async function sendMessage() {    
    // Saving it in newChatMessages variable to save the new value in it to pass it to the useState,
    // Because useState is async.
    setInputText("");

    if (inputText === "") {
      console.log("Enter a Valid Message");
      return;
    }

    if(isLoading) {
      console.log("Wait for model response");
      return;
    }

    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        // User message.
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        // Loading msg, will be deleted later.
        message: "Loading...",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages); // update the chatMessage (state) to show the Loading msg.


    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages.slice(0, newChatMessages.length - 1), // remove the loading message.
      {
        // Robot Response.
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setIsLoading(false);
  }


  function onKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
    if (e.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        value={inputText} //"controlled input" to be able to reset it after clicking the button.
        onChange={saveInputText}
        onKeyDown={onKeyDown}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

// This uses ChatMessageBlueprint as a blueprint
function ChatMessages({ chatMessages }) {
  function ChatMessageBlueprint({ message, sender }) {
    return (
      <div>
        {sender === "robot" && <img src="imgs/robot.png" width={50} />}
        {message}
        {sender === "user" && <img src="imgs/user.png" width={50} />}
      </div>
    );
  }

  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessageBlueprint
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
