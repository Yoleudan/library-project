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

let openBtn = document.querySelector('#addBookBtn')
openBtn.addEventListener("click", openForm);

let submit = document.querySelector('#registerBook')
submit.addEventListener("click", closeForm);
submit.addEventListener("click", getBookInfo);
submit.addEventListener("click", addBookToLibrary);
submit.addEventListener("click", addNewRow);
submit.addEventListener("click", showLibrary);
submit.addEventListener("click", addToI);

let table = document.querySelector('#libraryTable')

function toggleRead(){
    button = document.querySelector('#' + this.id)
    if(button.style.backgroundColor == "red"){
        button.style.color = "white"
        button.style.backgroundColor = "green";
    }
    else if(button.style.backgroundColor == "green"){
        button.style.backgroundColor = "red";
    }
}

let i = 0;

function addToI(){
    return i++
}

function addNewRow(){
    if ( bookTitle || bookAuthor || pages !== ""){
        let newRow = table.insertRow(-1);
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
        newRead.textContent = "Read"
        newRead.id = "read" + i
        newRead.addEventListener("click", toggleRead)
        newCell4.appendChild(newRead);
    }
    else{
        alert("Please fill in all fields!")
        openForm();
    }
}



