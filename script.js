let newNote;
let itemsCount = 0;
let notes = [];


document.addEventListener("submit", (event) => {
    event.preventDefault();

    itemsCount++;
    console.log("item count:", itemsCount)

    notes.push(input.value);
    console.log("notes[]:", notes);

    let ul = document.querySelector(".todo-list");
    let li = document.createElement("li");
    ul.append(li);

    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    li.append(checkbox);
    console.log("input value:", input.value);
    checkbox.onclick = () => {
        if (checkbox.checked) {
            itemsCount--;
            note.style.color = "grey";
            note.style.textDecoration = "line-through";
            console.log("itemsCount when checked:", itemsCount);
            note.id = "completed";
        }
        else {
            itemsCount++;
            console.log("itemsCount when unchecked:", itemsCount);
            note.style.color = "black";
            note.style.textDecoration = "none";
        }
    };

    let note = document.createElement("p");
    note.textContent = input.value;
    li.append(note);
    note.id = "active";

    let removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "❌";
    li.append(removeBtn);
    removeBtn.onclick = () => {
        li.remove();
        itemsCount--;
        console.log("itemsCount when removed:", itemsCount);
    }  
    

    document.querySelector("#input").value = "";
});


function addNote() {
    
}

function activateFilter() {

    let filter = document.createElement("div");
    filter.className = "filter-notes";
   
    let items = document.createElement("p");
    items.textContent = itemsCount + " items left";

    let allBtn = document.createElement("button");
    allBtn.textContent = "All";
    allBtn.onclick = () => {
        showAllNotes();
    }

    let activeBtn = document.createElement("button");
    activeBtn.textContent = "Active";
    activeBtn.onclick = () => {
        showActive();
    }

    let completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.onclick = () => {
        showCompleted();
    }

    let clearComBtn = document.createElement("button");
    clearComBtn.className = "clearAll";
    clearComBtn.textContent = "Clear completed";
    clearComBtn.onclick = () => {
        // li.remove();

    }  

    document.querySelector("#filter").append(filter);
    filter.append(items);
    filter.append(allBtn);
    filter.append(activeBtn);
    filter.append(completedBtn);
    filter.append(clearComBtn);

}

function showAllNotes() {
    // Show all notes in filter
}

function showActive() {
    // Show active notes in filter
}

function showCompleted() {
    // Show completed notes in filter
}

function markDone() {
    console.log("markDone");


}