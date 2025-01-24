const s = "Coding Factory"
const s2 = "CODING Factory"

const s1 = s.replace("Coding Factory" , "Code Factory")
console.log(s1)

const lower = s.toLowerCase()
const upper = s.toUpperCase()

if (s.toUpperCase() === s.toLowerCase()) {
  console.log("Equals")
}
else {
  console.log("not equals")
}


const firstname = "Alice     "

if (firstname.trim() === "Alice") {
  console.log ("Equals")
}
else {
  console.log("not equals")
}


console.log("Coding".repeat(10))

const concat = s + s2 + "Goodnight"
const concat2 = s.concat(s2).concat("Bye!")