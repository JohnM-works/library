const modalDisplay = document.querySelector(".modal");
const addBtn = document.querySelector(".add-button");
const closeModal = document.querySelector(".close-button");
const readBtn = document.querySelector(".read");

readBtn.addEventListener("click", () => {
  if (readBtn.textContent === "Read") {
    readBtn.textContent = "Unread";
    readBtn.style.backgroundColor = "#ca1919";
  } else {
    readBtn.textContent = "Unread";
    readBtn.style.backgroundColor = "#53AF44";
  }
});

//Modal

addBtn.addEventListener("click", () => {
  modalDisplay.style.visibility = "visible";
});

closeModal.addEventListener("click", () => {
  modalDisplay.style.visibility = "hidden";
});
