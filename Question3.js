// 3. Write a function that adds a new paragraph element to the bottom of an HTML document. 
// The function should take a string argument that will be used as the text content of the new paragraph element.
function addPara(text){
    const para = document.createElement("p")
    const textNode = document.createTextNode(text)
    document.body.appendChild(para)
    para.append(textNode)
}
addPara("Muzammil")
addPara("Ishaq")
addPara("Muhammad Umar Qadri")
