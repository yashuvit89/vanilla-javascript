/* 
querySelector

The matching is done using depth-first pre-order traversal of the 
document's nodes starting with the first element in the document's
markup and iterating through sequential nodes by order of the number of child nodes. 
*/

// A
// Select first div
var nodeDiv = document.querySelector("#singleDiv");

// Get all the divs inside #singleDiv
var result = nodeDiv.querySelectorAll("div");

// Select all divs
var nodes = document.querySelectorAll("div");

// B
// Select by class name
var classNodes = document.getElementsByClassName("foo");

// C
// Select by Tag name
var tagNodes = document.getElementsByTagName("a");

// D
// Select by ID
var idNode = document.getElementById("inner-div");
