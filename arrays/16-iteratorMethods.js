const students = ['Alice' , 'Andreas' , 'Bob', 'Costas']

students.forEach(function(val,index,arr) {
  console.log(val,index,arr)
})

let filtered = students.filter(student => student === 'Andreas') //Δημιουργει ενα νεο πινακα που περιεχει μονο το 'Andreas'
console.log(filtered)

let mapped = students.map(student => "Student: " +student) //Προσθετει στο πινακα το λεκτικο student σε καθε θεση
console.log(mapped)

const numbers = [1,6,9,12]
let sum = numbers.reduce((total,val) => total + val ,0)
console.log(sum)