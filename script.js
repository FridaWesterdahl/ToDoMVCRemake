let note = document.querySelector("#input");
let noteList = document.querySelector("todo-list");
let itemsCount = 0;
let undoneItems;
let notes = [];

document.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("input:", input.value);

    itemsCount++;
    console.log("item count:", itemsCount)

    notes.push(input.value);
    console.log("note array:", notes);


    if (itemsCount === 1) {
        firstNote();
        document.querySelector("#input").value = "";
    }
    else {
        addNote();
        document.querySelector("#input").value = "";
    }
    
  });

function firstNote() {
    addNote();

    let filter = document.createElement("div");
    filter.className = "filter-notes";

    let items = document.createElement("p");
    items.textContent = undoneItems,"items left"

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

    document.querySelector("#filter").append(filter);
    filter.append(items);
    filter.append(allBtn);
    filter.append(activeBtn);
    filter.append(completedBtn);

}

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

    let createNote = document.createElement("checkbox");
    createNote.className = "text";
    li.append(createNote);
    let newNote = note.value;
    createNote.append(newNote);
    console.log(newNote);

    let removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "❌";
    li.append(removeBtn);
    removeBtn.onclick = () => {
        li.remove();
        itemsCount--;
        removeFromArray();
    }

  

}

function removeFromArray() {
    console.log("Array after remove:", notes)
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
    // Mark note as done
}