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