const numbers = [1,2,3,4]


//Modifies the initial array (that's problem for a framework like react.)

numbers.push(5)
numbers.splice(4,0,5)  //4 = index , delete 0 , and add the number 5


//Οι 2 παρακατω function δεν κανουν modify τον αρχικο πινακα.

function addToArrayEnd(arr,num) {
  return [...arr , num]
}

function addToArrayStart(arr,num) {
  return [...arr , num]
}

function addToArrayAtIndex(arr,num,index) {
  return [...arr.slice(0,index), num , ...arr.slice(index)]
}

//Updates

numbers.splice(3, 1, 8)

const updateArray = (arr,newValue) => arr.map(item => newValue)

//Fresh copy
const updateOneItem = (arr, index , newValue) => 
  arr.map(((item,i) => (i ===index)) ? newValue : item )

const updatedNumbers = updateOneItem(numbers, 2 , 17)

console.log(updatedNumbers)

//Delete 

numbers.splice(0, 1 )

let index = numbers.indexOf(1)
if (index !== -1) numbers.splice(index,1)

//Fresh copy of deleted array

const deleteFromArray = (arr,num) => arr.filter(item => item !== num)

const deleteByIndex = (arr,index) => [...arr.slice(0,index) , ...arr.slice(index + 1)]