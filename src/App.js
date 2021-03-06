import React, { useState } from "react";
import NewMessage from "./components/NewMessage";
import TasksList from "./components/TasksList";

export default function App () {
const initMessages = [{text: 'Task1', completed: false}, {text: 'Task2', completed: false}, {text: 'Task3', completed: true}]

const [messages, setMessages] = useState(initMessages)

  const addNewMessage = (newMessage) => {
    setMessages([...messages, newMessage])
   }

 const toggleMessage = (index) => {
    
      const newMessages = [...messages]
      newMessages[index]= {...newMessages[index], completed: !newMessages[index].completed}
      setMessages(newMessages)
    }

  return (
    <div style={{maxWidth: 800, minWidth: 400, margin: "0 auto"}}>
    <NewMessage addNewMessage={addNewMessage}/>
    <TasksList messages={messages} toggleMessage={toggleMessage}/>
    </div>
  )
  
}
  
 