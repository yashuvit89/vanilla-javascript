class App {
  constructor() {
    this.imageNodeList = document.querySelectorAll(".images");
    this.imageDotsNodeList = document.querySelectorAll(".imgDot");
    this.currentIndex = 0;

    this.attachListeners();
  }

  attachListeners() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  handleKeyPress(e) {
    if (e.keyCode === 39) {
      this.moveRight();
    }

    if (e.keyCode === 37) {
      this.moveLeft();
    }

    this.updateCurrentIndex();
  }

  moveLeft() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.imageNodeList.length - 1;
    } else {
      this.currentIndex--;
    }

    console.log("Move left, index", this.currentIndex);
  }

  moveRight() {
    if (this.currentIndex === this.imageNodeList.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    console.log("Move right, index", this.currentIndex);
  }

  updateCurrentIndex() {
    Array.from(this.imageNodeList).forEach(img => {
      img.classList.remove("active");
    });
    Array.from(this.imageDotsNodeList).forEach(img => {
      img.classList.remove("active");
    });

    const currentImage = this.imageNodeList[this.currentIndex];
    const currentImageDot = this.imageDotsNodeList[this.currentIndex];
    currentImage.classList.add("active");
    currentImageDot.classList.add("active");
  }
}
window.addEventListener("DOMContentLoaded", () => {
  new App();
});
