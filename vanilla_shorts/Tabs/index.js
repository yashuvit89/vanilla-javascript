class App {
  constructor() {
    this.tabItemList = document.querySelectorAll(".tabItem");
    this.tabContentItem = document.querySelectorAll(".tabContentItem");
    this.attachEvents();
  }

  attachEvents() {
    Array.from(this.tabItemList).forEach(tab => {
      tab.addEventListener("click", this.handleTabclick.bind(this));
    });
  }

  handleTabclick(e) {
    e.preventDefault();
    const currTarget = e.currentTarget;
    const hrefTarget = currTarget.getAttribute("href");

    Array.from(this.tabItemList).forEach(tab => {
      tab.classList.remove("active");
    });

    Array.from(this.tabContentItem).forEach(tab => {
      tab.classList.remove("active");
    });

    currTarget.classList.add("active");
    document.querySelector(hrefTarget).classList.add("active");
  }
}

window.onload = () => {
  new App();
};
