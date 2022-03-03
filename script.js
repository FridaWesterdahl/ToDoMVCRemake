let activeNotes = 0;
let checkboxCount = 0;

start();

function start() {
    filters();
    addNote();
    filterAll();
    filterActive();
    filterCompleted();
    toggleAll();
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
            itemsLeft();
            clearCompletedBtn();
            li.className = "completed";
        }
        if (!checkbox.checked) {
            activeNotes++;
            checkboxCount--;
            itemsLeft();
            clearCompletedBtn();
            li.className = "active";
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
            checkboxCount--;
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
        
        let items = document.querySelector("#todo-list").querySelectorAll("li");
        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {
                li.remove();
                checkboxCount--;
            }
        }
        checkClearBtn();
        filters();

        const toggleAllBtn = document.querySelector(".toggle-all");
        if (toggleAllBtn.checked) {
            toggleAllBtn.checked = false;
        }
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
    const toggleAllBtn = document.querySelector(".toggle-all");
    toggleAllBtn.onclick = () => {
        console.log("onclick toggleAll ;)");

        if (toggleAllBtn.checked) {  
            let items = document.querySelector("#todo-list").querySelectorAll("li");
            for (let li of items) {
                let checkbox = li.querySelector(".toggle");
                checkbox.checked = true;
                li.classList.replace("active", "completed");
                activeNotes--;
                checkboxCount++;   
            }
            console.log("activeNotes = 0", activeNotes)
        }
        if (!toggleAllBtn.checked) {
            let items = document.querySelector("#todo-list").querySelectorAll("li");
            for (let li of items) {
                let checkbox = li.querySelector(".toggle");
                checkbox.checked = false;
                li.classList.replace("completed", "active");
                activeNotes++;  
                checkboxCount--;
            }
        }
        itemsLeft();
        clearCompletedBtn();
    };
}

function filterAll() {
    const allBtn = document.querySelector("#all");
    allBtn.onclick = () => {
        console.log("onclick all ;)")

        let items = document.querySelector("#todo-list").querySelectorAll("li");
        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {             
                li.classList.remove("hidden");
            }
            if (!checkbox.checked) {
                li.classList.remove("hidden");
            }
        }
    };
}

function filterActive() {
    const activeBtn = document.querySelector("#active");  
    activeBtn.onclick = () => {
        console.log("onclick active ;)")

        let items = document.querySelector("#todo-list").querySelectorAll("li");
        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {
            li.classList.add("hidden");
            }
            if (!checkbox.checked) {
                li.classList.remove("hidden");
            }
        }
    };
}

function filterCompleted() {
    const completed = document.querySelector("#completed");
    completed.onclick = () => {
        console.log("onclick completed ;)")

        let items = document.querySelector("#todo-list").querySelectorAll("li");
        for (let li of items) {
            let checkbox = li.querySelector(".toggle");
            if (checkbox.checked) {
            li.classList.remove("hidden");
            }
            if (!checkbox.checked) {
                li.classList.add("hidden");
            }
        }
    };
}