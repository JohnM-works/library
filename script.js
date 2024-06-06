const myLibrary = [];
const modalDisplay = document.querySelector(".modal");
const addBtn = document.querySelector(".add-button");
const closeModal = document.querySelector(".close-button");

let submitForm = document.querySelector(".main-form-div");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const bookImage = document.querySelector("#img-url");
const bookStatusRead = document.querySelector("#read");

function Book(title, author, pages, img, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.img = img;
  this.read = read;
}

Book.prototype.toggleStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, img, readStatus) {
  const newBook = new Book(title, author, pages, img, readStatus);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const cardContainer = document.querySelector(".cards");
  cardContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const cardItems = document.createElement("div");
    cardItems.classList.add("card-items");
    cardItems.setAttribute("data-index", index);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("card-images");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("card-title");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardButton = document.createElement("div");
    cardButton.classList.add("card-button");

    //book image
    const cardImage = document.createElement("img");
    cardImage.src = `${book.img}`;

    cardImage.addEventListener("error", (e) => {
      e.target.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDXslEygIMFZ7idMhPxbHG6vDRtehix0NDg&s";
    });

    //Title of the Book
    const cardTitle = document.createElement("h1");
    cardTitle.textContent = `${book.title}`;

    //Author of the book
    const cardAuthor = document.createElement("p");
    cardAuthor.textContent = `By ${book.author}`;

    //number of pages
    const cardPages = document.createElement("p");
    cardPages.textContent = `${book.pages} Pages`;

    //read button
    const btnRead = document.createElement("button");
    btnRead.classList.add("read");
    btnRead.textContent = `${book.read ? "Read" : "Unread"}`;

    btnRead.textContent == "Read"
      ? (btnRead.style.backgroundColor = "#53AF44")
      : (btnRead.style.backgroundColor = "#CC4F4F");

    btnRead.addEventListener("click", () => {
      const index = cardItems.getAttribute("data-index");
      myLibrary[index].toggleStatus();
      displayBooks();
    });

    //remove button
    const btnRemove = document.createElement("button");
    btnRemove.classList.add("delete");
    btnRemove.textContent = `Delete`;

    btnRemove.addEventListener("click", () => {
      const index = cardItems.getAttribute("data-index");
      removeBookToLibrary(index);
    });

    cardContainer.appendChild(cardItems);
    cardItems.appendChild(imageDiv);
    cardItems.appendChild(titleDiv);
    cardItems.appendChild(cardContent);
    cardItems.appendChild(cardButton);

    imageDiv.appendChild(cardImage);
    titleDiv.appendChild(cardTitle);
    cardContent.appendChild(cardAuthor);
    cardContent.appendChild(cardPages);
    cardButton.appendChild(btnRead);
    cardButton.appendChild(btnRemove);
  });
}

function removeBookToLibrary(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const readStatus = bookStatusRead.checked
    ? (bookStatusRead.value = true)
    : (bookStatusRead.value = false);

  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const img = bookImage.value;

  console.log(readStatus);
  console.log(title);
  console.log(author);
  console.log(pages);
  console.log(img);

  addBookToLibrary(title, author, pages, img, readStatus);

  submitForm.reset();

  modalDisplay.style.visibility = "hidden";
});

//Modal
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalDisplay.style.visibility = "visible";
});

closeModal.addEventListener("click", () => {
  modalDisplay.style.visibility = "hidden";

  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookImage.value = "";
  bookStatus.checked = bookStatusRead;
});

addBookToLibrary(
  "Soul",
  "Olivia Wilson",
  450,
  "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
  true
);

addBookToLibrary(
  "Memory",
  "Angelina Aludo",
  500,
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220",
  false
);
