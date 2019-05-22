var globalSettings = {
  module: "Default"
};

var myModule = (function(settings) {
  var _name = "Test Module";

  var _getName = function() {
    var name = _name || settings.module;
    return name;
  };
  return {
    getName: function() {
      return _getName();
    }
  };
})(globalSettings);

var name = myModule.getName();
console.log("Name", name);
