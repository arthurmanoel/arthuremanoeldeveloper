const taskInput = document.querySelector(".task-content-input");
const taskButton = document.querySelector(".addTask-content-button");
const taskContainer = document.querySelector(".taskContainer");

const validateInput = () => {
  return taskInput.value.trim().length > 0;
};

const markTaskCompleted = (ev) => {
  let item = ev.currentTarget;
  item.classList.toggle("task-completed");
};

const deleteItem = (ev) => {
  let itemContent = ev.currentTarget.parentNode;

  itemContent.remove();
};

const createTask = () => {
  const taskContent = document.createElement("div");
  taskContent.classList.add("task-item");

  let taskItemName = document.createElement("p");

  let deleteTaskButton = document.createElement("i");

  taskItemName.innerText = taskInput.value;

  deleteTaskButton.classList.add("fa-solid");
  deleteTaskButton.classList.add("fa-delete-left");
  deleteTaskButton.classList.add("fa-lg");

  taskContent.append(taskItemName, deleteTaskButton);
  taskContainer.appendChild(taskContent);

  taskItemName.addEventListener("click", markTaskCompleted);

  deleteTaskButton.addEventListener("click", deleteItem);
};

const handleAddTask = () => {
  const validate = validateInput();

  if (!validate) {
    return taskInput.classList.add("error");
  }

  createTask();
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return taskInput.classList.remove("error");
  }
};

taskButton.addEventListener("click", handleAddTask);

taskInput.addEventListener("change", handleInputChange);

taskInput.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    handleAddTask();
  }
});
