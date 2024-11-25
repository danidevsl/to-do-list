// app.js
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = () => removeTask(li);

    li.appendChild(deleteButton);
    li.onclick = () => toggleCompletion(li);

    taskList.appendChild(li);
    taskInput.value = '';

    saveTasks();
}

function toggleCompletion(li) {
    li.classList.toggle('completed');
    saveTasks();
}

function removeTask(li) {
    li.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    const taskList = document.getElementById('task-list');
    const items = taskList.querySelectorAll('li');

    items.forEach(item => {
        tasks.push({
            text: item.textContent.replace('Excluir', '').trim(),
            completed: item.classList.contains('completed')
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = () => removeTask(li);

        li.appendChild(deleteButton);
        li.onclick = () => toggleCompletion(li);

        taskList.appendChild(li);
    });
}
