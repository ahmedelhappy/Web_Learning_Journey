import dayjs from 'dayjs';
import { useState }from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import './ChatInput.css'


export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  // used useState because when react re-renders the function, doesn't set it back to "false"
  // Check out MS whiteboard lesson 3.
  const [isLoading, setIsLoading] = useState(false); 

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
        time: dayjs().valueOf(), 
      },
      {
        // Loading msg, will be deleted later.
        message: <img src={LoadingSpinnerImage} className="loading-spinner-img" />,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(), 
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
