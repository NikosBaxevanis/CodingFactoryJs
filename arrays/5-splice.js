const arr = [1,2,3,4,5,6,7,8]

const arr2 = arr.splice(0,4) //Η splice κανει εν μερη delete

console.log(arr2)
console.log(arr)

//Insert

arr.splice(0,0,10)

console.log(arr)

//Update

arr.splice(0,1,11) //Στη θεση 0 διαγραφει 1 στοιχειο το 10 που το εχουμε απο πανω και βαζει στη θεση του το 11

console.log(arr)