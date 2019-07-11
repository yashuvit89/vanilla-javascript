class App {
  constructor() {
    this.formEl = document.querySelector("#modalForm");
    this.closeModal = document.querySelector(".close");
    this.modalEl = document.querySelector(".modal");
    this.modalContentEl = document.querySelector(".modal-content");
    this.attachListeners();
  }

  attachListeners() {
    this.closeModal.addEventListener("click", this.handleModalClose.bind(this));
    document.addEventListener("click", this.handleMouseClick.bind(this));
    this.formEl.addEventListener("submit", this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.modalEl.classList.add("active");
  }

  handleMouseClick(e) {
    const isClickedInside = this.modalContentEl.contains(e.target);
    console.log("Isclickedinside", isClickedInside);
    if (!isClickedInside) {
      this.handleModalClose();
    }
  }

  handleModalClose() {
    this.modalEl.classList.remove("active");
  }
}

console.clear();
window.addEventListener("DOMContentLoaded", () => {
  new App();
});
