// A .matches

// <span class="foo"></span>
var el = document.querySelector("span");
console.log("Is matching:", el.matches(".foo"));

// polyfill matches support
if (!Element.prototype.matches) {
  Element.prototype.matches = function(selector) {
    var matches = document.querySelectorAll(selector),
      i = matches.length;

      while( --i >=0; matches.item(i) !== this) {
      }
      return i > - 1;
  };
}


// B parent node
// parent node
var el = document.querySelector("span");
var parent = el.parentNode;


// C siblings
// Get siblings of an element
var el = document.querySelector("li.mid");
el.previousElementSibling
el.nextElementSibling

