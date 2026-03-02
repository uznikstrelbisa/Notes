function renderTasks() {
  const container = document.getElementById("tasks-container");
  container.innerHTML = "";
  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task" + (task.done ? " done" : "");
    div.innerHTML = `
      <strong>${task.title}</strong> (${task.dueDate})<br>
      ${task.description}<br>
      <button onclick="toggleDone(${index})">${task.done ? "Отметить как невыполнено" : "Выполнено"}</button>
      <button onclick="deleteTask(${index})">Удалить</button>
    `;
    container.appendChild(div);
  });
}

function addTask() {
  const title = document.getElementById("new-title").value;
  const desc = document.getElementById("new-desc").value;
  const date = document.getElementById("new-date").value;
  if (!title || !date) return alert("Заполните название и дату!");
  tasks.push({ title, description: desc, dueDate: date, done: false });
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Инициализация
renderTasks();
