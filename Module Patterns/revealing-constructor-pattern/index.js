var MyPlugin = (function() {
  var Constructor = function() {
    var publicAPI = {};
    var _privateVar = "private variable";
    publicAPI.publicMethod = function() {
      return _privateVar;
    };
    return publicAPI;
  };

  return Constructor;
})();

var plugin = new MyPlugin();
var result = plugin.publicMethod();
console.log("Result:", result);
