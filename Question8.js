// 8. // Write a function that takes an object and saves each property to localStorage using the property name 
// as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object
function saveToLocalStorage(obj) {
  
  Object.keys(obj).forEach((key) => {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  });

  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const value = localStorage.getItem(key);
    newObj[key] = JSON.parse(value);
  });

  return newObj;
}
const myObjet = {
  name: "Muzammil",
  age: 21,
  city: "karachi"
};

const newObj = saveToLocalStorage(myObjet);
console.log(newObj); 
