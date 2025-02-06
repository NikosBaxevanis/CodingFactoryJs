const cities = ["Athens", "Paris", "Toronto"]

//Add - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a,b) => a.localeCompare(b,"en"))
const citiesSorted = cities.slice().sort((a,b) => a.localeCompare(b,"en"))

//Copy

const citiesCopy1 = JSON.parse(JSON.stringify(cities)) //η json μετατρεπει ενα javascript object σε string και η parse μετατρεπει ξανα σε javascript object. Swallow copy in the end

const cities2 = structuredClone(cities)

//Shallow copies -- Spread operator

const cities3 = [...cities] //"..." μπροστα απο πινακες (ή οτιδηποτε iterable)  επιστρέφει τα στοιχεια του σε αυτον τον πινακα

const nums = [1,2,3,4]
let maxVal1 = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal1)
console.log(`Max Value: ${maxVal1} , Max Index : ${maxIndex}`)