var TabApp = (function() {
  var init = function() {
    var tabs = document.querySelector("#tabs");

    tabs.addEventListener("click", function(e) {
      var targetEl = e.target;

      if (targetEl.nodeName.toLowerCase() === "li") {
        targetEl.classList.add("selected");

        var tabId = targetEl.getAttribute("data-tabid");
        selectTab(tabId);
      } else {
        return;
      }
    });
  };

  var selectTab = function(tabId) {
    console.log("select tab yo", tabId);
    var tabEl = document.querySelector(
      ".tabContentItem[data-tabid=" + tabId + "]"
    );

    var allSelectedTabs = document.querySelectorAll(".tabContentItem.selected");

    // hide existing
    for (var currTab = 0; currTab < allSelectedTabs.length; currTab++) {
      allSelectedTabs[currTab].classList.remove("selected");
    }

    // add class for selected tab
    tabEl.classList.add("selected");
  };

  return {
    init: init,
    selectTab: selectTab
  };
  // tab click handler

  // get clicked tab id

  // select tab content by tab id
})();

window.onload = function() {
  TabApp.init();
};
