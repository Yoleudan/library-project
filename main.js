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
    if (bookTitle || bookAuthor || pages !== ""){
        table.insertRow();
    }
    else{
        alert("Please fill in form parameters")
        openForm();
    }
}


