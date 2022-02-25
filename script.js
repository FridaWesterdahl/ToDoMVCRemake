let newNote;
let itemsCount = 0;
let notes = [];
let checkboxCount = 0;


 function filters() {
    let filter = document.querySelector("#filter");
        if (itemsCount >= 1) {
            filter.style.visibility = "visible";
            console.log("filter itemCount:", itemsCount)
        }
        else {
            filter.style.visibility = "hidden";
        }

 };

document.addEventListener("submit", (event) => {
    event.preventDefault();

    itemsCount++;
    console.log("item count:", itemsCount);      
    filters();
    itemsLeft();
    clearAllBtn();

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
            checkboxCount++;
            console.log("checkboxCount:", checkboxCount);
            itemsLeft();
            note.style.color = "grey";
            note.style.textDecoration = "line-through";
            console.log("itemsCount:", itemsCount);
            note.className = "completed";
            clearAllBtn();
        }
        else {
            itemsCount++;
            checkboxCount--;
            console.log("checkboxCount:", checkboxCount);
            itemsLeft();
            console.log("itemsCount:", itemsCount);
            note.style.color = "black";
            note.style.textDecoration = "none";
            clearAllBtn();
        }
        filters();
    };

    let note = document.createElement("p");
    note.textContent = input.value;
    li.append(note);
    note.className = "active";

    let removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "❌";
    li.append(removeBtn);
    removeBtn.onclick = () => {
        li.remove();
        filters();
        itemsLeft();
        clearAllBtn();
        if (!checkbox.checked) {
            itemsCount--;
            itemsLeft();
            filters();
            console.log("itemsCount:", itemsCount);
        } 
    };  

    function clearAllBtn() {
        const clearAll = document.querySelector(".clear-all");
        if (checkboxCount < 1) {
            clearAll.style.visibility = "hidden";     
        }
        else {
            clearAll.style.visibility = "visible"; 
        }
    };

    document.querySelector("#input").value = "";
});

function itemsLeft() { 
    if (itemsCount <= 1) {
        document.getElementById("p").innerHTML = itemsCount + " item left";
    }
    if (itemsCount > 1) {
        document.getElementById("p").innerHTML = itemsCount + " items left";
    }
}

    const allNotes = document.querySelector(".all-notes");
    allNotes.onclick = () => {
        console.log("onclick all ;)")
    };

    const active = document.querySelector(".active");
    active.onclick = () => {
        console.log("onclick active ;)") 
    };

    const completed = document.querySelector(".completed");
    completed.onclick = () => {
        console.log("onclick completed ;)")
    };

    const clearAll = document.querySelector(".clear-all");
        clearAll.onclick = () => {
        console.log("onclick clear ;)")
    };
