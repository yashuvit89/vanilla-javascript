class App {
  constructor() {
    this.currentTabId = 0;
    this.tabs = document.querySelectorAll(".tab");
    this.tabContent = document.querySelectorAll(".tabContent");
    this.day = document.querySelector("#day");
    this.month = document.querySelector("#month");
    this.year = document.querySelector("#year");
    this.appForm = document.querySelector("#appForm");
    this.result = document.querySelector("#result");
    this.dayOfWeekEl = document.querySelectorAll('input[name="dayOfWeek"]');
    this.attachListeners();
    this.populateDate();
  }

  attachListeners() {
    Array.from(this.tabs).forEach(tab => {
      tab.addEventListener("click", this.handleTabClick.bind(this));
    });

    this.appForm.addEventListener("submit", this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("Current tab", this.currentTabId);

    this.getDayValues();
    this.getDatePickerValues();
  }

  getDayValues() {
    const checkedInputEl = Array.from(this.dayOfWeekEl).filter(day => {
      return day.checked;
    });

    this.outputDays = checkedInputEl.map(el => el.value);

    this.result.value = this.outputDays;
  }

  getDatePickerValues() {
    const day = this.day.value;
    const month = this.month.value;
    const year = this.year.value;

    this.result.value = `${day}-${month}-${year}`;
  }

  setDayValues(days) {
    days.forEach(day => {
      const dayEl = document.querySelector("#" + day);
      dayEl.checked = true;
    });
  }

  setDateValues(dateStr) {
    const [day, month, year] = dateStr.split("/");
    this.day.value = day;
    this.month.value = month;
    this.year.value = year;
  }

  populateDate() {
    this.generateSelectOptions(this.day, 1, 31);
    this.generateSelectOptions(this.month, 1, 12);
    this.generateSelectOptions(this.year, 2000, 2030);
    this.setDayValues(["MON", "THU"]);
    this.setDateValues("2/11/2019");
  }

  generateSelectOptions(parentEl, min, max) {
    const fragment = document.createDocumentFragment();
    for (let i = min; i <= max; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = i;
      fragment.appendChild(opt);
    }
    parentEl.appendChild(fragment);
  }

  handleTabClick(e) {
    e.preventDefault();
    this.resetTabs();
    const targetId = e.target.getAttribute("href");
    this.setTabById(targetId);
  }

  resetTabs() {
    Array.from(this.tabs).forEach(tab => {
      tab.classList.remove("active");
    });
    Array.from(this.tabContent).forEach(tab => {
      tab.classList.remove("active");
    });
  }

  setTabById(ID) {
    this.currentTabId = ID;
    const tabContentEl = document.querySelector(ID);
    tabContentEl.classList.add("active");
  }
}

console.clear();
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
