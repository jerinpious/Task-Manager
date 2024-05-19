import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './TaskList'

function App() {
  const [tasks, setTasks] = useState([]) //setting up state to set up the tasks

  useEffect(() => {
    fetchTasks()
  },[])
  
const fetchTasks = async () => {
  const response = await fetch("http://127.0.0.1:5000/tasks")
  const data = await response.json()
  setTasks(data.tasks)
  console.log(data.tasks)
}

  return (
    <>
      <TaskList tasks = {tasks}/>
    </>
  )
}

export default App
