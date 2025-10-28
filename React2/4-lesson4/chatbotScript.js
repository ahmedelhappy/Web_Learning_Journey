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
        message: <img src="loading-spinner.gif" className="loading-spinner-img" />,
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
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        value={inputText} //"controlled input" to be able to reset it after clicking the button.
        onChange={saveInputText}
        onKeyDown={onKeyDown}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src="robot.png" className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src="user.png" className="chat-message-profile" />
      )}
    </div>
  );
}

function useAutoScroll(dependencies) {
  const containerRef  = React.useRef(null);
  
  React.useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, dependencies);

  return containerRef ;
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  React.useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = React.useState([]);

  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}

      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);
