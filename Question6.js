const myObject = { name: "John", age: 30 };

function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  saveToLocalStorage("myobjectkey",myObject)

