function retrieveFromLocalStroage(key){
   const objectString = localStorage.getItem(key);
        if (objectString) {
          return JSON.parse(objectString);
        }
        return null;
      }
      
    const myObjectt = retrieveFromLocalStroage("myobjectkey");
    console.log(myObjectt); 
      