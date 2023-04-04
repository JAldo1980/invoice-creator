// array holding tasks
let tasks = [
  { name: "Wash Car", cost: 10, id: "001" },
  { name: "Mow Lawn", cost: 20, id: "002" },
  { name: "Pull Weeds", cost: 30, id: "003" },
];

// array holding REQUESTED task (upon button click)
let addedTasks = [];

// task buttons
tasks.forEach(function (task) {
  document.querySelector(".task-btn-box").innerHTML += `
    <button class="btn task-btn" id="${task.id}">${task.name}: $${task.cost}</button>
    `;
});

// function to capture task details & PUSH to new array (addedTasks)
document.addEventListener("click", function (e) {
  let clickedTask;
  tasks.forEach(function (task) {
    if (task.id === e.target.id) {
      clickedTask = task;
    }
  });

  //   check for duplicates
  let duplicate = false;
  addedTasks.forEach(function (task) {
    if (task.name === clickedTask.name) {
      duplicate = true;
    }
  });

  if (!duplicate) {
    addedTasks.push({ name: clickedTask.name, cost: clickedTask.cost });
  } else {
    console.log("Duplicate task not added to addedTasks array.");
  }
});

// REMOVE THESE BEFORE SUBMISSION!!
console.log(addedTasks);
