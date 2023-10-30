const myLibrary = [];

// Object constructor
function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
}

Book.prototype.toogleRead = function () {
    this.isread = !this.isread
}

function toogleRead(index) {
    myLibrary[index].toogleRead();
    displayBooksOnPage();
}

function addBookToLibrary() {
  let titleInput = document.getElementById("title");
  let authorInput = document.getElementById("author");
  let pagesInput = document.getElementById("pages");
  let isread = document.getElementById("is-read").checked;

  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;

  let newBook = new Book(title, author, pages, isread);
  myLibrary.push(newBook);
  displayBooksOnPage();

  titleInput.value = ""
  authorInput.value = ""
  pagesInput.value = ""

  closeForm();
}

function displayBooksOnPage() {
  let Books = document.getElementById("books");
  Books.innerHTML = "";

  // Loop over the Library array and display to
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div"); // This line creates a new HTML element using javascript
    bookElement.classList.add("book-card"); // This line adds a CSS class to the newly created `div` element
    bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.isread ? "Yes" : "No"}</p>
        <button class="remove-btn" onclick=remove(${i}) >Remove</button>
        <button class="isread-btn" onclick=toogleRead(${i})>Read</button>
        `;
    Books.appendChild(bookElement);
  }
}

function remove(index) {
    console.log(index)
    myLibrary.splice(index, 1)
    displayBooksOnPage()
}

document.addEventListener("DOMContentLoaded", function () {
  let addBookBtn = document.getElementById("addBookBtn");
  let newBookForm = document.querySelector(".new-book-form");
  let closeButton = document.querySelector(".cross-button");
  // let btnSubmit = document.querySelector(".btn-submit")

  addBookBtn.addEventListener("click", function () {
    newBookForm.style.display = "block";
  });

  newBookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary();
  });

  closeButton.addEventListener("click", function () {
    closeForm();
  });


});

function closeForm() {
  document.querySelector(".new-book-form").style.display = "none";
}
