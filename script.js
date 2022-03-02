let activeNotes = 0;
let checkboxCount = 0;
let isChecked = false;

start();

function start() {
    filters();
    addNote();
    filterAll();
    filterActive();
    filterCompleted();
}

function filters() {
    let filter = document.querySelector("#sort");
        if (activeNotes >= 1 || checkboxCount >= 1) {
            filter.classList.remove("hidden");
        }
        else {
            filter.classList.add("hidden");
        }
};

function addNote() {
    document.addEventListener("submit", (event) => {
    event.preventDefault();

    activeNotes++;
    console.log("activeNotes:", activeNotes);      
    filters();
    itemsLeft();
    clearCompletedBtn()

    let ul = document.querySelector("#todo-list");
    let li = document.createElement("li");
    ul.classList.remove("hidden");
    li.classList.add("active");
    ul.append(li);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "toggle");
    li.append(checkbox);
    console.log("input value:", input.value);
    checkbox.onclick = () => {
        if (checkbox.checked) {
            activeNotes--;
            checkboxCount++;
            console.log("checkboxCount:", checkboxCount);
            itemsLeft();
            li.classList.remove("active");
            li.classList.add("completed");
            clearCompletedBtn();
            li.className = "completed";
            isChecked = true;
        }
        if (!checkbox.checked) {
            activeNotes++;
            checkboxCount--;
            console.log("checkboxCount:", checkboxCount);
            itemsLeft();
            li.classList.remove("completed");
            li.classList.add("active");
            clearCompletedBtn();
            li.className = "active";
            isChecked = false;
        }
        filters();
    };

    let label = document.createElement("label");
    label.textContent = input.value;
    li.append(label);

    let removeBtn = document.createElement("button");
    removeBtn.className = "remove-button hidden";
    removeBtn.textContent = "❌";
    li.append(removeBtn);
    removeBtn.onclick = () => {
        if (checkbox.checked) {
            checkboxCount--;
            li.remove();
            filters();
            itemsLeft();
            clearCompletedBtn();
        }
        if (!checkbox.checked) {
            activeNotes--;
            li.remove();
            filters();
            itemsLeft();
            clearCompletedBtn();
        } 
    };  
    
    li.addEventListener("mouseenter", function (event) {
        event.target.querySelector(".remove-button").classList.remove("hidden");
    });
    li.addEventListener("mouseleave", function (event) {
        event.target.querySelector(".remove-button").classList.add("hidden");
    });
      
    document.querySelector("#input").value = "";
});
}

function itemsLeft() { 
    if (activeNotes === 1) {
        document.getElementById("active-tasks").innerHTML = activeNotes + " item left";
    }
    if (activeNotes >= 2 || activeNotes === 0) {
        document.getElementById("active-tasks").innerHTML = activeNotes + " items left";
    }
}

function clearCompletedBtn() {
    const clearCompleted = document.querySelector("#clear-completed");
    checkClearBtn();
    clearCompleted.onclick = () => {
        console.log("onclick clear ;)")
        checkboxCount = (checkboxCount - checkboxCount);
        console.log("checkboxCount:", checkboxCount);
        let items = document.querySelector("#todo-list").querySelectorAll("li");
        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {
                li.remove();
            }
        }
        checkClearBtn();
        filters();
    }
};

function checkClearBtn() {
    const clearCompleted = document.querySelector("#clear-completed");
    if (checkboxCount === 0) {
        clearCompleted.classList.add("hidden");     
    }
    if (checkboxCount >= 1) {
        clearCompleted.classList.remove("hidden");    
    }
}

function toggleAll() {

}

function filterAll() {
    const allBtn = document.querySelector("#all");
    allBtn.onclick = () => {
        console.log("onclick all ;)")

        let items = document.querySelector("#todo-list").querySelectorAll("li");
        let active = document.querySelector(".active");
        let completed = document.querySelector(".completed");

        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {             
                completed.className = "completed";
                active.className = "active";
            }
            if (!checkbox.checked) {
                completed.className = "completed";
                active.className = "active";
            }
        }
    };
}

function filterActive() {
    const activeBtn = document.querySelector("#active");  
    activeBtn.onclick = () => {
        console.log("onclick active ;)")

        let items = document.querySelector("#todo-list").querySelectorAll("li");
        let completed = document.querySelector(".completed");
        let active = document.querySelector(".active");

        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {
                active.className = "active";
                completed.className = "completed hidden";
            }
        }
    };
}

function filterCompleted() {
    const completed = document.querySelector("#completed");
    completed.onclick = () => {
        console.log("onclick completed ;)")

        let items = document.querySelector("#todo-list").querySelectorAll("li");
        let active = document.querySelector(".active");
        let completed = document.querySelector(".completed");

        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {
                active.className = "active hidden";
                completed.className = "completed";
            }
            // if (!checkbox.checked) {
            //     completed.className = "completed";
            //     active.className = "active hidden";
            // }
        }
    };
}

  