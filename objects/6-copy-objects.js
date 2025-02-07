const initial = {name: "Alice", age: 30, address: {street: "Patission", num: 76}}


//1. With Spreading. Spread operator give a shallow copy
const copyInitial = {...initial} 
console.log(copyInitial)

//2. Object type
const copyInitial2 = Object.assign({},initial)
console.log(copyInitial2)

//3. With JSON function

const copyInitial3 = JSON.parse(JSON.stringify(initial))
console.log(copyInitial3)


//Το JSON παραβλέπει το age καθώς είναι "undefined"
const initial2 = {name: "Alice" , age: undefined , address: {street: "Patission",num:76}}
console.log(JSON.stringify(initial2))

//4. Deep Copy
const copyInitial4 = structuredClone(initial)
 