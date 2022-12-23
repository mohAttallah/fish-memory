let inputTxt = document.querySelector(".container .inputDiv input");
let btnInput = document.querySelector(".container .inputDiv button");
let tasksSection = document.querySelector(".tasks");
let btnClearAll = document.querySelector(".clearAll");

function appendTasks(task) {
  let span = document.createElement("span");
  let spanTxt = document.createTextNode(task);
  let divtasks = document.createElement("div");

  // create delete Button
  let btnDel = document.createElement("button");
  let txtbtnDel = document.createTextNode("Delete");
  // document.createElement(task);
  // btnDel.classList.add(task[1]);
  // append child
  btnDel.appendChild(txtbtnDel);
  span.appendChild(spanTxt);
  divtasks.classList.add("task1");
  divtasks.appendChild(span);
  divtasks.appendChild(btnDel);
  tasksSection.appendChild(divtasks);
  // delete task
  btnDel.onclick = function (e) {
    e.target.parentElement.remove();
    localStorage.removeItem(task);
  };
}
function save(task) {
  localStorage.setItem(task, task);
}
// clear All
function clearAll() {
  if (tasksSection.children.length > 0) {
    localStorage.clear();
    while (tasksSection.firstChild) {
      tasksSection.removeChild(tasksSection.firstChild);
    }
  }
}
// get iteam from localStorage
if (localStorage.length > 0) {
  console.log(true);
  for (let i = 0; i < localStorage.length; i++) {
    appendTasks(localStorage.key(i));
  }
  btnClearAll.style.display = "block";
}

btnInput.onclick = function () {
  if (inputTxt.value !== "") {
    let task = inputTxt.value;
    save(task);
    appendTasks(task);
    inputTxt.value = "";
    btnClearAll.style.display = "block";
  }
};

// event when press Enter
inputTxt.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    if (inputTxt.value !== "") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      let task = inputTxt.value;
      save(task);
      appendTasks(task);
      inputTxt.value = "";
      btnClearAll.style.display = "block";
    }
  }
});

btnClearAll.onclick = function () {
  clearAll();
  btnClearAll.style.display = "none";
};
