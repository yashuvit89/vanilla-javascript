class App {
  constructor() {
    console.log("Running app");
  }

  init() {
    this.initListeners();
    this.initDateSelectors();
  }

  initDateSelectors() {
    var day = document.querySelector("#day");
    var month = document.querySelector("#month");
    var year = document.querySelector("#year");

    this.generateSelectOptions(1, 31, day);
    this.generateSelectOptions(1, 12, month);
    this.generateSelectOptions(2000, 2020, year);
  }

  generateSelectOptions(min, max, parentSelectEl) {
    for (var i = min; i <= max; i++) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = i;
      parentSelectEl.appendChild(opt);
    }
  }

  initListeners() {
    console.log("init");
    var tabUl = document.querySelector(".tabs");

    tabUl.addEventListener("click", this.tabClick);

    var tabForm = document.querySelector("#tabForm");
    tabForm.addEventListener("submit", this.submitForm);
  }

  tabClick(e) {
    var tabId;

    if (e) {
      var targetEl = e.target;
      tabId = targetEl.getAttribute("data-id");
    }

    var tabContents = document.querySelectorAll(".tabContent");

    for (var i = 0; i < tabContents.length; i++) {
      var tabContent = tabContents[i];
      var currentTabId = tabContent.getAttribute("id");
      if (currentTabId === tabId) {
        tabContent.classList.add("selected");
      } else {
        tabContent.classList.remove("selected");
      }
    }
  }

  submitForm(e) {
    console.log("Submit");
    e.preventDefault();

    var resultEl = document.querySelector("#result");

    var resultInput = resultEl.value.trim();

    var checkDatesArr = resultInput.split("/");
    var checkDaysArr = resultInput.split(",");

    if (checkDatesArr.length === 3) {
      var day = document.querySelector("#day");
      var month = document.querySelector("#month");
      var year = document.querySelector("#year");
      day.value = checkDatesArr[0];
      month.value = checkDatesArr[1];
      year.value = checkDatesArr[2];
    } else {
      var weekday = document.querySelectorAll("input[name='weekday']");
      for (var i = 0; i < checkDaysArr.length; i++) {
        weekday.value = checkDaysArr[i];
        console.log(checkDaysArr, weekday.value);
      }
    }
    // console.log('Result', weekday);
  }
}

console.clear();
window.onload = () => new App().init();
