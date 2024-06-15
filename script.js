// add , delete , check and uncheck task and save the task as well
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// console.log(inputBox);
// console.log(inputBox.value);

// inputBox.addEventListener("input", () => {
//   console.log(inputBox.value);
// });

function addTask() {
  if (inputBox.value === "") {
    alert("Please Enter Task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //  can achieve the same using span
    // let span = document.createElement("span");
    // span.innerHTML = "\u00d7";
    // li.appendChild(span);

    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.alt = "img";
    img.classList.add("delete");
    li.appendChild(img);
  }
  inputBox.value = "";
  //   save data when u add task.
  saveData();
}

listContainer.addEventListener("click", (event) => {
  console.log("clicked", event.target);
  //   save data when u check or uncheck the task
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  }
  //   delete the parent element
  else if (event.target.tagName === "IMG") {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showSavedData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showSavedData();
