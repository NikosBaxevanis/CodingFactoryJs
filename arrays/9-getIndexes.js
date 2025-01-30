const arr = [1,2,4,5,2,6,7,2,2,5,8,9,9,2]

//function που να επιστρεφει ενα πινακα με τις θεσεις στις οποιες βρίσκεται ενας συγκεκριμένος αριθμός


function index (arr,num) {
let arr1=[];
for ( let i=0 ; i<arr.length;i++) {
  if (arr[i] === num) {
    arr1.push(i)
  }
}
return arr1
}

console.log(index(arr,2))


//Εναλλακτικα

const getIndexes = (arr,val) => {
  const indexes =[]

  arr.forEach((v, index) => {
    if (v === val) {
      indexes.push(index)
    }
  });
  return indexes
} 

console.log(getIndexes(arr,2))