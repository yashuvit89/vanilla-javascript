var MyPlugin = (function() {
  "use strict";

  this.matchingNodes = [];

  var Constructor = function(selector) {
    this.nodes = document.querySelectorAll(selector);
  };

  Constructor.prototype.addClass = function(className) {
    var self = this;
    for (var i = 0; i < this.nodes.length; i++) {
      (function() {
        self.nodes[i].classList.add(className);
      })(i);
    }
  };

  return Constructor;
})();

var links = new MyPlugin("a");

links.addClass("hover");
