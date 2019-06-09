window.onload = function() {
  APP.init();
  APP.displayItems();
};

var APP = (function() {
  var _listItems = [];
  var counter = 0;

  function _init() {
    // register form submit event
    var todoForm = document.getElementById("todoForm");
    var todoInput = document.getElementById("todoInput");
    todoForm.addEventListener("submit", function(e) {
      e.preventDefault();

      _addItem(todoInput.value);
      todoInput.value = "";
    });
  }

  function _addItem(desc) {
    if (desc === "") {
      return;
    }
    counter++;
    var newItem = new ListItem(desc, counter);
    _listItems.unshift(newItem);

    // append item
    _appendItemToList(newItem);
  }

  function _appendItemToList(item) {
    var ele = document.createElement("li");
    var parentNode = document.getElementById("list");

    ele.classList.add("itemList", item.state);
    ele.innerHTML = item.desc;

    parentNode.insertBefore(ele, parentNode.firstChild);

    // eventlistener
    ele.addEventListener("click", _markComplete.bind(this, item));
  }

  function _markComplete(item, e) {
    var target = e.target;
    if (item.state === "ACTIVE") {
      item.setState("COMPLETED");
      target.classList.remove("active");
      target.classList.add("completed");
    } else {
      item.setState("ACTIVE");
      target.classList.remove("completed");
      target.classList.add("active");
    }
  }

  function _displayItems() {
    var list = document.getElementById("list");
    list.innerHTML = "";
    _listItems.forEach(_appendItemToList);
  }
  return {
    init: _init,
    addItem: _addItem,
    markComplete: _markComplete,
    displayItems: _displayItems
  };
})();

function ListItem(desc, id) {
  this.id = id;
  this.desc = desc;
  this.state = "ACTIVE";

  this.setState = function(state) {
    this.state = state;
  };
}
