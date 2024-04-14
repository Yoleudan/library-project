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

function test(){
    console.log(library[0]);
}

let openBtn = document.querySelector('#addBookBtn')
openBtn.addEventListener("click", openForm);

let submit = document.querySelector('#registerBook')
submit.addEventListener("click", closeForm);
submit.addEventListener("click", getBookInfo);
submit.addEventListener("click", addBookToLibrary);
submit.addEventListener("click", test);
submit.addEventListener("click", addNewRow);

let table = document.querySelector('#libraryTable')

function addNewRow(){
    if ( bookTitle || bookAuthor || pages !== ""){
        let newRow = table.insertRow(-1);
        let newCell1 = newRow.insertCell(0);
        let newText1 = document.createTextNode(bookTitle);
        newCell1.appendChild(newText1);
        let newCell2 = newRow.insertCell(1);
        let newText2 = document.createTextNode(bookAuthor);
        newCell2.appendChild(newText2);
        let newCell3 = newRow.insertCell(2);
        let newText3 = document.createTextNode(pages);
        newCell3.appendChild(newText3);
    }
    else{
        alert("Please fill in all fields!")
        openForm();
    }
}


