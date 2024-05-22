import { useState } from "react";
import './App.css'
const TaskForm = () => {
    const [taskTitle, setTaskTitle] = useState ("")
    const [taskDescription, setTaskDescription] = useState ("")
    const [taskCompleted, setTaskCompleted] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            taskTitle,
            taskDescription,
            taskCompleted
        }

        const url = "http://127.0.0.1:5000/create_task"
        const options ={
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }

        const response = await fetch(url,options)
        if(response.status !== 201 && response.status !==200){
            const data = await response.json()
            alert(data.message)
        }
        else{

        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="taskTitle">Task Title</label>
                <input type="text"
                id="taskTitle"
                value={taskTitle}
                onChange={(e)=> setTaskTitle(e.target.value)} />

            </div>
            <div>
                <label htmlFor="taskdescription">Task Description</label>
                <input type="text"
                id="taskDescription"
                value={taskDescription}
                onChange={(e)=> setTaskDescription(e.target.value)} />

            </div>
            
            <button type="submit">New Task</button>

        </form>
    )

}

export default TaskForm