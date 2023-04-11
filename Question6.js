// 6. Write a function that saves an object to localStorage. The function should take two arguments: 
// the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
const myObject = { name: "John", age: 30 };

function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  saveToLocalStorage("myobjectkey",myObject)

