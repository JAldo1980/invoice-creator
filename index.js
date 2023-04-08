// array holding tasks
const taskOutput = document.getElementById("task-output");
const costOutput = document.getElementById("cost-output");

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

// ITEM event listener
document.addEventListener("click", function (e) {
  let clickedTask;
  tasks.forEach(function (task) {
    if (task.id === e.target.id) {
      clickedTask = task;
    }
  });

  //   check for duplicates in addedArray
  let duplicate = false;
  addedTasks.forEach(function (task) {
    if (task.name === clickedTask.name) {
      duplicate = true;
    }
  });

  // function to capture task details & PUSH to new array (addedTasks)

  if (!duplicate) {
    addedTasks.push({ name: clickedTask.name, cost: clickedTask.cost });

    //   RENDER task list
    taskOutput.innerHTML += `
    <div class="task-output">
        <div>${clickedTask.name}</div>
    </div>
`;
    //   RENDER cost list
    costOutput.innerHTML += `
    <div class="cost-output">
    <div>$ ${clickedTask.cost}</div>
    </div>
    `;

    // RENDER note output
    document.getElementById("note-output").innerHTML = `
    <p>We accept cash, credit card or PayPal.</p>
    `;

    // CALCULATE total costs
    let totalCost = 0;
    addedTasks.forEach(function (task) {
      totalCost += task.cost;
    });

    // RENDER total output
    document.getElementById("total-output").innerHTML = `
    <p class="adjust-class">$ ${totalCost}</p>
    `;
  } else {
    console.log("Duplicate task not added to addedTasks array.");
  }
});

document.getElementById("send-invoice").addEventListener("click", function () {
  addedTasks = [];
  taskOutput.innerHTML = "";
  costOutput.innerHTML = "";
  document.getElementById("note-output").innerHTML = "";
  document.getElementById("total-output").innerHTML = "";
  alert("Thank you, your invoice has been sent!");
});
