function addTask() {
    const taskInput = document.getElementById('inputTask');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task before adding.");
        return;
    }

    const newTask = document.createElement('li');
    const taskText = document.createElement('span'); 
    taskText.textContent = taskValue;

    
    taskText.addEventListener('click', function () {
        taskText.classList.toggle('completed');
    });

    newTask.appendChild(taskText); 
    deleteTask(newTask);           
    document.getElementById('taskList').appendChild(newTask);

    taskInput.value = "";
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = function (e) {
        e.stopPropagation();
        newTask.remove();
    };

    newTask.appendChild(deleteBtn);
}