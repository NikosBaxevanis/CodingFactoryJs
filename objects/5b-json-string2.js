const store =  `[
{"id": "pro4vog", 
  "fields": {
    "company": "ikea",
    "colors": ["#FF1234", "#222"],
    "featured": true,
    "price": 990,
    "genre": "white-black-chair"
  }
},
  {"id": "pro4vpr", 
  "fields": {
    "company": "ikea",
    "colors": ["#Fab199", "#222"],
    "featured": true,
    "price": 890,
    "genre": "black-black-chair"
  }
}]`

console.log(JSON.parse(store))