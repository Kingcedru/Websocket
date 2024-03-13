import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message: "Hello" });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Message..."
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
