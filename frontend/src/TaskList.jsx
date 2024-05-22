import React from "react";
import './App.css'

const TaskList = ({tasks}) => {

    const onDelete = async (task_id) => {
        try{
            const options= {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_task/${task_id}`,options)
            if(response.status == 200){

            }
            else{
                console.error("Failed to delete")
            }
        }catch(error){
            alert(error)
        }
    }
    return <div>
        
    <div className="card-container">
      {tasks.map((task) => (
        <div className="card" key={task.id}>
          <div className="card-header">{task.taskTitle}</div>
          <div className="card-body">{task.taskDescription}</div>
          <div className="card-footer">
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
   
    </div>
  </div>
            
    
}

export default TaskList