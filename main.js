function openForm(){
    document.getElementById('pop-up').style.display = "block";
    bookTitle = document.getElementById('bookTitle').value = "";
    bookAuthor = document.getElementById('bookAuthor').value = "";
    pages = document.getElementById('pageCount').value = "";

}

function closeForm(){
    document.getElementById('pop-up').style.display = "none";
}

library = [];

let bookTitle = ""
let bookAuthor = ""
let pages = ""

function book(title, author, pageCount){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(){
    library.push(new book(bookTitle, bookAuthor, pages))
}

function getBookInfo(){
    bookTitle = document.getElementById('bookTitle').value;
    bookAuthor = document.getElementById('bookAuthor').value;
    pages = document.getElementById('pageCount').value;
}

function showLibrary(){
    console.log(library[0].title)
}

function checkValid(){
    getBookInfo();
    if (bookTitle && bookAuthor && pages !== ""){
        submit.addEventListener("click", addBookToLibrary);
        submit.addEventListener("click", addNewRow);
        submit.addEventListener("click", showLibrary);
        submit.addEventListener("click", addToI);
        submit.addEventListener("click", closeForm);
    }
    else{
        alert("please fill in all fields!")
    }
}

let openBtn = document.querySelector('#addBookBtn')
openBtn.addEventListener("click", openForm);

let submit = document.querySelector('#registerBook')
submit.addEventListener("click", checkValid);


let table = document.querySelector('#libraryTable')

function toggleRead(){
    button = document.querySelector('#' + this.id)
    if(button.style.backgroundColor == "red"){
        button.textContent = "Yes"
        button.style.color = "white"
        button.style.backgroundColor = "green";
    }
    else if(button.style.backgroundColor == "green"){
        button.textContent = "No"
        button.style.backgroundColor = "red";
    }
}

let i = 0;

function addToI(){
    return i++
}

function deleteRow(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.closest("tr").remove();
    }
}




function addNewRow(){
    if ( bookTitle || bookAuthor || pages !== ""){
        let newRow = table.insertRow(-1);
        newRow.id = "newRow" + i
        let newCell1 = newRow.insertCell(0);
        let newText1 = document.createTextNode(library[i].title);
        newCell1.appendChild(newText1);
        let newCell2 = newRow.insertCell(1);
        let newText2 = document.createTextNode(library[i].author);
        newCell2.appendChild(newText2);
        let newCell3 = newRow.insertCell(2);
        let newText3 = document.createTextNode(library[i].pageCount);
        newCell3.appendChild(newText3);
        let newCell4 = newRow.insertCell(3);
        let newRead = document.createElement("button");
        newRead.style.backgroundColor = "red";
        newRead.style.color = "white"
        newRead.textContent = "No"
        newRead.id = "read" + i
        newRead.addEventListener("click", toggleRead)
        newCell4.appendChild(newRead);
        let newCell5 = newRow.insertCell(4);
        let newDelete = document.createElement("button");
        newDelete.textContent = "X"
        newDelete.id = "delete" + i
        newDelete.addEventListener("click", deleteRow);
        newCell5.appendChild(newDelete)
    }
    else{
        alert("Please fill in all fields!")
        openForm();
    }
}



