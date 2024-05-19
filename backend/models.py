from config import db

# database model for the project 

class Task(db.Model):
    task_id = db.Column(db.Integer, primary_key = True)
    task_title = db.Column(db.String(80), unique = False, nullable = False)
    task_description = db.Column(db.String(120), unique = False, nullable = True)
    task_completed = db.Column(db.Boolean, default = False , nullable = False)

    def to_json(self):
        return{
            "id":self.task_id,
            "taskTitle":self.task_title,
            "taskDescription":self.task_description,
            "taskCompleted":self.task_completed
        }