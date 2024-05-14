from flask import Flask
from flask import Flask,flash, redirect,render_template,request,url_for
app = Flask(__name__)
def add_task():
    task = input("Enter the task ")
    f = open("tasks.txt","a")
    f.write(task+"\n")
    f.close()
    print("Task added succesfully")
    return

def view_tasks():
    try:
        f = open("tasks.txt", "r")
        tasks = f.readlines()
        if tasks:
            print("Your tasks:")
            for i, task in enumerate(tasks, 1):
                print(f"{i}. {task.strip()}")
        else:
            print("No tasks found.")
        f.close()
    except FileNotFoundError:
        print("No tasks found.")
    return

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
    

