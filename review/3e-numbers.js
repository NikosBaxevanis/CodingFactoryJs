let num1 = 10;
let num2 = 3;

let divResult = num1/num2;
let expr = (num2 / num1) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1) //η toFixed κραταει μονο ενα δεκαδικο
let intResult = Math.floor(num1 / num2) //επιστρεφει ακεραιο, αλλα το κατω οριο η Math.floor 
let upperInt = Math.ceil(num1 / num2) // επιστρεφει και αυτη ακεραιο αλλα το ανω οριο
let roundResult = Math.round(num1 / num2) //στρογγυλοποιει. Απο 0.5 και πανω επιστρεφει προς τα πανω , αν ειναι 0.4 και κατω επιστρεφει προς τα κατω
let modResult = num1 % num2 //Επιστρεφει το υπολοιπο της διαιρεσης

console.log(divResult,expr , fixedDiv, intResult,upperInt,roundResult,modResult )