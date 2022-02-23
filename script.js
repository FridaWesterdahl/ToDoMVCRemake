let note = document.querySelector("#input");
let noteList = document.querySelector("todo-list");
let newNote;
let itemsCount = 0;
let doneItems = 0;
let undoneItems = [];
let notes = [];
let done = [];

document.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("input:", input.value);

    itemsCount++;

    console.log("un")
    console.log("item count:", itemsCount)

    notes.push(input.value);
    console.log("note array:", notes);


    if (itemsCount === 1) {
        addNote();
        document.querySelector("#input").value = "";
        activateFilter();
    }
    else {
        addNote();
        document.querySelector("#input").value = "";
    }
    
  });


function addNote() {
    let ul = document.querySelector("#todo-list");
    let li = document.createElement("li");
    ul.append(li);

    let doneBtn = document.createElement("button");
    doneBtn.className = "done";
    doneBtn.textContent = "✅";
    li.append(doneBtn);
    doneBtn.onclick = () => {
        markDone();
    }

    let createNote = document.createElement("textbox");
    createNote.className = "text";
    li.append(createNote);
    newNote = note.value;
    console.log("Array note:", this.arrayNote);
    createNote.append(newNote);
    console.log(newNote);

    let removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "❌";
    li.append(removeBtn);
    removeBtn.onclick = () => {
        li.remove();
        itemsCount--;
    }  
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
    done.push(this.arrayNote);
    console.log("done array:", done);

    // let btn = document.querySelector("text").style.textDecorationLine;
}