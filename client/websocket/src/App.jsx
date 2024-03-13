import { useState } from 'react'
import io from "socket.io-client"
const socket = io.connet("http://localhost:3000");


function App() {
const sendMessage = ()=>{
  socket.emit()
}
  return (
    <div className='App'>
     <input type='text' placeholder='Message...'/>
     <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
