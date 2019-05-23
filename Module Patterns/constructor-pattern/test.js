//
function Test() {
  var prefix = "hello world-";
  this.name = "test variable";

  this.getName = function() {
    return prefix + this.name;
  };
}

var test = new Test();

var name = test.getName();
console.log("Name:", name);
