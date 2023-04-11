// 7. Write a function that retrieves an object from localStorage. The function should take one argument, 
// which is a string representing the key used to store the object. The function should return the object.
function retrieveFromLocalStroage(key){
   const objectString = localStorage.getItem(key);
        if (objectString) {
          return JSON.parse(objectString);
        }
        return null;
      }
      
    const myObjectt = retrieveFromLocalStroage("myobjectkey");
    console.log(myObjectt); 
      