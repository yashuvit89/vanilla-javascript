var str = "global";
(function() {
  "use strict";

  var str = "asdf";
  console.log("Inside iife:", str);
})();
console.log("Global:", str);

// no difference in (fn{})() and (fn{}())
(function() {
  console.log("IIFE");
})();

// Name IIFE
(function nameIIFE() {
  console.log("Named IIFE");
})();
