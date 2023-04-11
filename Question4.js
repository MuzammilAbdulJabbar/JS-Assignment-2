// 4. Write a function that adds a new list item to an unordered list in an HTML document.
//  The function should take a string argument that will be used as the text content of the new list item.
function list(text){
const ul = document.getElementById("numberList")
const li = document.createElement("li")
const textNode = document.createTextNode(text)
// li.textContent=text;
ul.appendChild(li)
li.appendChild(textNode)

}
list("Muzammil")
list("Muhammad Umar Qadri")
list("Ishaq")