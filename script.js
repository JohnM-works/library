const myLibrary = [];
const modalDisplay = document.querySelector(".modal");
const addBtn = document.querySelector(".add-button");
const closeModal = document.querySelector(".close-button");
const readBtn = document.querySelectorAll(".read");

function Book(title, author, pages, img, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.img = img;
  this.read = read;
}

function addBookToLibrary(title, author, pages, img, read) {
  const newBook = new Book(title, author, pages, img, read);
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

    const cardImage = document.createElement("img");
    cardImage.src = `${book.img}`;

    const cardTitle = document.createElement("h1");
    cardTitle.textContent = `${book.title}`;

    const cardAuthor = document.createElement("p");
    cardAuthor.textContent = `By ${book.author}`;

    const cardPages = document.createElement("p");
    cardPages.textContent = `${book.pages} Pages`;

    const btnRead = document.createElement("button");
    btnRead.classList.add("read");
    btnRead.textContent = `Read`;

    const btnRemove = document.createElement("button");
    btnRemove.classList.add("delete");
    btnRemove.textContent = `Remove`;

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

    console.log(cardItems);
  });
}

//Modal
addBtn.addEventListener("click", () => {
  modalDisplay.style.visibility = "visible";
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalDisplay.style.visibility = "hidden";
});

/*
readBtn.forEach((read) => {
  read.addEventListener("click", (e) => {
    if (e.target.textContent === "Read") {
      e.target.textContent = "Unread";
      e.target.style.backgroundColor = "#ca1919";
    } else {
      e.target.textContent = "Read";
      e.target.style.backgroundColor = "#53AF44";
    }
  });
});
*/
addBookToLibrary(
  "Soul",
  "Olivia Wilson",
  450,
  "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
  true
);

addBookToLibrary(
  "Soul",
  "Olivia Wilson",
  450,
  "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
  true
);
