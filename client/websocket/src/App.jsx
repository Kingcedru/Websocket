import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessaeReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessaeReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Message..."
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Messages Received : </h1>
      <p>{messageReceived}</p>
    </div>
  );
}

export default App;
