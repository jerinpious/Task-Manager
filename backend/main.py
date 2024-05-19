from flask import request,jsonify
from config import db,app
from models import Task


@app.route("/")
def home():
    return jsonify({"message":"Hello World"})

# route for viewing all the tasks
@app.route("/tasks", methods =["GET"])
def tasks():
    tasks = Task.query.all()
    json_tasks = list(map(lambda x:x.to_json(), tasks))
    return jsonify({"tasks":json_tasks})
    

# route for creating new task
@app.route("/create_task", methods =["POST"])
def create_task():
    task_title = request.json.get("taskTitle")
    task_description = request.json.get("taskDescription")
    task_completed = request.json.get("taskCompleted")

    if not task_title :
        return(
            jsonify({"message":"You must include task title"}),404
        )
    if not task_description:
        return(
            jsonify({"message":"You must include task description"}),404
        )
    
    
    
    new_task = Task( task_title = task_title, task_description = task_description, task_completed =task_completed )
    try:
        db.session.add(new_task)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}),400
    
    return jsonify({"message":"Task Created"}),200



# route for deleting a task
@app.route("/delete_task/<int:task_id>", methods = ["DELETE"])
def delete_task(task_id):
    task = Task.query.get(task_id)

    if not task:
        return jsonify({"message":"Task not found"}),404
    
    db.session.delete(task)
    db.session.commit()

    return jsonify({"message":"Task deleted"}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)