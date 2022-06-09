/**
 * Shallow Copy: 
 * A reference variable mainly stores the address of the object it refers to. 
 * When a new reference variable is assigned the value of the old reference variable, 
 * the address stored in the old reference variable is copied into the new one. 
 * This means both the old and new reference variable point to the same object in memory.
 * As a result if the state of the object changes through any of the reference variables it is reflected for both
 * 
 * 
 * 
 * 
 * 
 */

let emp = {
    name:'Tom',
    age:29,
    phone:999
}

//Shallow Copy

let newEmp = emp;

console.log('emp', emp)
console.log('newEmp', newEmp)

newEmp.age = 40;
newEmp.name = 'Cooper';

console.log("---------After modification Shallow----------");

console.log('emp', emp)
console.log('newEmp', newEmp)


/**
 * Deep Copy: 
 * A reference variable mainly stores the address of the object it refers to. 
 * deep copy makes a copy of all the members of the old object, 
 * allocates separate memory location for the  new object and then assigns the copied members to the new object.
 * In this way, both the objects are independent of each other and in case of any modification to either 
 * one the other is not affected.
 * Also, if one of the objects is deleted the other still remains in the memory.
 * 
 * 
 * 
 * 
 */
// Deep Copy

console.log("---------Deep Example ----------");
let deepEmp = {
    name: 'Jack',
    age: 25,
    phone: 8888
} 

let newDeepEmp = JSON.parse(JSON.stringify(deepEmp));

console.log('deepEmp', deepEmp)
console.log('newDeepEmp', newDeepEmp)

newDeepEmp.name = 'Trump'
newDeepEmp.age = 70

console.log("---------After modification Deep----------");

console.log('deepEmp', deepEmp)
console.log('newDeepEmp', newDeepEmp)