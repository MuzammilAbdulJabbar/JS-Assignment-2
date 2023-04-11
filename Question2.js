// 2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
const array = [1,4,6,8,3,7,9]
function search(array,value){
if (array.length === 0) {
     return false;
 }
if(array[0]===value){
    return true;
}else{
    array.splice(0,1)
    return search(array,value);
}
}
console.log(search(array,6))