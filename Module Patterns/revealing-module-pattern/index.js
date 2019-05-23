var myPlugin = (function() {
  var publicAPIs = {};

  var _privateVar = "private variable";

  var privateMethod = function() {
    //
  };

  publicAPIs.publicMethod = function() {
    _privateVar = "modified private variable";
    return _privateVar;
  };

  return publicAPIs;
})();

var result = myPlugin.publicMethod();

console.log("Result:", result);
