const modalDisplay = document.querySelector(".modal");
const addBtn = document.querySelector(".add-button");
const closeModal = document.querySelector(".close-button");
const readBtn = document.querySelectorAll(".read");

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

//Modal

addBtn.addEventListener("click", () => {
  modalDisplay.style.visibility = "visible";
});

closeModal.addEventListener("click", () => {
  modalDisplay.style.visibility = "hidden";
});
