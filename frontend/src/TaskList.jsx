import React from "react";

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
        <h2>Todoist</h2>
        <table>
            <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key = {task.id}>
                        <td>{task.taskTitle}</td>
                        <td>{task.taskDescription}</td>
                        <td>
                            <button onClick={() => onDelete(task.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default TaskList