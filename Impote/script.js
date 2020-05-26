//console.log("welcome");
showNotes();
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click",function (e) {
    let addtxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
function showNotes () {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach( function (element,index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"> ${element}
          </p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use 'Add Note' option above to add notes.`;
    }
    
}
function deleteNotes (index) {
    //console.log("I am Deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('searchTxt'); 
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    //console.log('Input event fired!!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach( function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if(cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
