class App {
  constructor() {
    this.initEventListeners();
  }

  initEventListeners() {
    const accEl = document.querySelectorAll(".accordion");

    /*    
    // for-of limited support
    for (let el of accEl) {
      el.addEventListener("click", e => {
        console.log("clicked", e.target);
      });
    } */

    // Array from + forEach
    Array.from(accEl).forEach(el => {
      el.addEventListener("click", this.handleClickAccordion.bind(this, el));
    });
  }

  handleClickAccordion(el, e) {
    const elClassList = el.classList;
    const target = e.target;

    const isHeader = target.classList.contains("panel-header");

    /*  
    // use toggle instead of if condition
    const isActive = elClassList.contains("active");

    if (isActive) {
      elClassList.remove("active");
    } else {
      elClassList.add("active");
    } */

    if (isHeader) {
      elClassList.toggle("active");
    }
  }
}

console.clear();
window.addEventListener("DOMContentLoaded", () => new App());
