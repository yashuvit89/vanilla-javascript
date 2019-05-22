var MOD = (function(module) {
  var name = "hello";
  console.log("Module", module);
  console.log("Inside IIFE", name);
  return name;
})(MOD);

console.log("Outside IIFE", MOD);
