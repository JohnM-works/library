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

Book.prototype.toggleStatus = function () {
  this.read = !this.read;
};

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

    cardImage.addEventListener("error", () => {
      cardImage.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
    });

    const cardTitle = document.createElement("h1");
    cardTitle.textContent = `${book.title}`;

    const cardAuthor = document.createElement("p");
    cardAuthor.textContent = `By ${book.author}`;

    const cardPages = document.createElement("p");
    cardPages.textContent = `${book.pages} Pages`;

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

//Modal
addBtn.addEventListener("click", () => {
  modalDisplay.style.visibility = "visible";
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalDisplay.style.visibility = "hidden";
});

addBookToLibrary(
  "Soul",
  "Olivia Wilson",
  450,
  "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
  true
);

addBookToLibrary("Memory", "Angelina Aludo", 500, "", true);

addBookToLibrary(
  "Memory",
  "Angelina Aludo",
  500,
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220",
  false
);
