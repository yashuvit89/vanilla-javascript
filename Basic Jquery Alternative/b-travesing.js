// A - matches

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


// B - parent node
// parent node
var el = document.querySelector("span");
var parent = el.parentNode;


// C - siblings
// Get siblings of an element
var el = document.querySelector("li.mid");
el.previousElementSibling
el.nextElementSibling

function getSiblings(el) {
  var result = [];

  var sibling = el.parentNode.firstChild;

  while(sibling) {
    // exclude given element and allow only nodetypes 1
    if (sibling.nodeType === 1 && sibling !== el) {
      result.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return result;
}

// D - closest

function closest(el, target) {

  var node = el;
  while (node) {
    if (node.matches(target)) {
      node = node.parentNode;
      return node;
    }
  }
}