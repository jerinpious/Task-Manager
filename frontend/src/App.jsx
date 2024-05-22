import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
function App() {
  const [tasks, setTasks] = useState([]) //setting up state to set up the tasks
  const [isModalOpen , setIsModalOpen] = useState(false)


  useEffect(() => {
    fetchTasks()
  },[])
  
const fetchTasks = async () => {
  const response = await fetch("http://127.0.0.1:5000/tasks")
  const data = await response.json()
  setTasks(data.tasks)
  console.log(data.tasks)
}

const closeModal = () => {
  setIsModalOpen(false)
}
const openCreateModal = () => {
  if(!isModalOpen) setIsModalOpen(true)
}

  return (
    <>
    <div className="main"><h2>Todoist</h2>
    <button className='newtask'onClick={openCreateModal}>Add Task</button>
    </div>
    
      {
        isModalOpen && <div className='Modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <TaskForm />
          </div>
        </div>
      } 
      <TaskList tasks = {tasks}/>
      
    </>
  )
}

export default App
