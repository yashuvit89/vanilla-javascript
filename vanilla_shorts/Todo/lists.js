window.onload = function() {
  APP.init();
  APP.displayItems();
};

var APP = (function() {
  var _listItems = [];

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
    var newItem = new ListItem(desc);
    _listItems.unshift(newItem);

    // append item
    _appendItemToList(newItem);
  }

  function _appendItemToList(item) {
    var ele = document.createElement("li");
    var elClass = "itemList" + item.state;
    ele.classList.add(elClass);
    ele.innerHTML = item.desc;
    // document.getElementById("list").appendChild(ele);
    var parentNode = document.getElementById("list");
    parentNode.insertBefore(ele, parentNode.firstChild);
  }

  function _markComplete() {}

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

function ListItem(desc) {
  counter = 1;
  this.desc = desc;
  this.state = "ACTIVE";

  this.setState = function(state) {
    this.state = state;
    console.log("Counter", counter);
    counter++;
  };
}
