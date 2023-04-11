// 5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, 
// and the second argument is a string representing the new background color.
function add(elementReference,color){
elementReference.style.backgroundColor = color;

}
const div = document.getElementById("divv")
add(div,"red")