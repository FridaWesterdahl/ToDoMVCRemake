let activeTasks = 0;
let completedTasks = 0;
let filterStatus = "all";

start();

function start() {
    Input();
    setupTemplate();
    setupToggleAll();
    setupClearCompleted();
    setupShowAllButton();
    setupShowActiveButton();
    setupCompletedButton();
}

function Input() {
    let inputBar = document.querySelector(".input-bar");
    let input = inputBar.querySelector("#input");

    inputBar.onsubmit = event => {
        console.log("input:", input.value);
        event.preventDefault();
        addNote(input.value);
        updateButtons();
        document.querySelector(".toggle-all").checked = false;
        input.value = "";
    };
}

function addNote(text) {
    let li = template.content.firstElementChild.cloneNode(true);  
    let label = li.querySelector(".todo-text");
    label.textContent = text;

    let doneButton = li.querySelector(".toggle");
    let removeButton = li.querySelector(".remove-button");
    removeButton.onclick = () => {
        if (doneButton.checked) {
            completedTasks--;
        }
        else {
            activeTasks--;
        }
        li.remove();
        updateButtons();
    };

    li.addEventListener("mouseenter", function (event) {
        event.target.querySelector(".remove-button").classList.remove("hidden");
    });
    li.addEventListener("mouseleave", function (event) {
        event.target.querySelector(".remove-button").classList.add("hidden");
    });

    doneButton.onclick = () => {
        toggleDone(li, doneButton.checked);
        updateButtons();
    };

    setItemViewStatus(li);
    
    let ul = document.querySelector("#todo-list");
    ul.append(li);
    activeTasks++;
}

function setupTemplate() {
    template = document.querySelector("#todo-template");
    template.remove();
}

function setupToggleAll() {
    let checkBox = document.querySelector(".toggle-all");
    checkBox.onclick = () => {
        toggleAll(checkBox.checked);
        updateButtons();
    };
}

function setupShowAllButton() {
    let button = document.querySelector("#all");
    button.onclick = () => {
        filterView("all");
    };
}

function setupShowActiveButton() {
    let button = document.querySelector("#active");
    button.onclick = () => {
        filterView("active");
    };
}

function setupCompletedButton() {
    let button = document.querySelector("#completed");
    button.onclick = () => {
        filterView("completed");
    };
}

function setupClearCompleted() {
    let button = document.querySelector("#clear-completed");
    button.onclick = () => {
        removeAllCompletedItems();
        updateButtons();
        document.querySelector(".toggle-all").checked = false;
    };
}

function updateButtons() {
    let todolist = document.querySelector("#todo-list");
    let statusField = document.querySelector("#status-field");
    let removeAllCompletedItemsButton = statusField.querySelector("#clear-completed");
    let itemsLeft = statusField.querySelector("#active-tasks");

    if (completedTasks > 0) {
        removeAllCompletedItemsButton.classList.remove("hidden");
    }
    else {
        removeAllCompletedItemsButton.classList.add("hidden");
    }

    if (completedTasks === 0 && activeTasks === 0) {
        statusField.classList.add("hidden");
        todolist.classList.add("hidden");
    }
    else {
        statusField.classList.remove("hidden");
        todolist.classList.remove("hidden");
        itemsLeft.textContent = activeTasks;
    }
}

function filterView(newStatus) {
    filterStatus = newStatus;
    let liItems = document.querySelector("#todo-list").querySelectorAll("li");
    for (const li of liItems) {
        setItemViewStatus(li);
    }

    let allButton = document.querySelector("#all");
    let activeButton = document.querySelector("#active");
    let completedButton = document.querySelector("#completed");

    allButton.classList.remove("active");
    activeButton.classList.remove("active");
    completedButton.classList.remove("active");

    switch (newStatus) {
        case "all":
            allButton.classList.add("active");
            break;
        case "active":
            activeButton.classList.add("active");
            break;
        case "completed":
            completedButton.classList.add("active");
            break;
        default:
            break;
    };
}

function setItemViewStatus(li) {
    let hidden = "hidden";

    switch (filterStatus) {
        case "all":
            li.classList.remove(hidden);
            break;
        case "active":
            if (!li.classList.contains("completed")) {
                li.classList.remove(hidden);
            }
            else {
                li.classList.add(hidden);
            }
            break;
        case "completed":
            if (li.classList.contains("completed")) {
                li.classList.remove(hidden);
            }
            else {
                li.classList.add(hidden);
            }
            break;
        default:
            break;
    }
}

function removeAllCompletedItems() {
    let liItems = document.querySelector("#todo-list").querySelectorAll("li");
    for (const li of liItems) {
        let checkBox = li.querySelector(".toggle");
        if (checkBox.checked) {
            completedTasks--;
            li.remove();
        }
    }
}

function toggleAll(isChecked) {
    let liItems = document.querySelector("#todo-list").querySelectorAll("li");

    for (const li of liItems) {
        let toggle = li.querySelector(".toggle");
        if (toggle.checked != isChecked) {
            toggle.checked = isChecked;
            toggleDone(li, isChecked);
        }
    }
}

function toggleDone(li, isChecked) {
    if (isChecked) {
        li.classList.add("completed");
        completedTasks++;
        activeTasks--;
    }
    else if (!isChecked) {
        li.classList.remove("completed");
        completedTasks--;
        activeTasks++;
    }
    setItemViewStatus(li);
}

