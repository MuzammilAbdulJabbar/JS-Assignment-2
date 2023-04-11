function addPara(text){
    const para = document.createElement("p")
    const textNode = document.createTextNode(text)
    document.body.appendChild(para)
    para.append(textNode)
}
addPara("Muzammil")
addPara("Ishaq")
addPara("Muhammad Umar Qadri")
