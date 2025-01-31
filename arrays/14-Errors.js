const products = []

function insert (arr, product) {
  if (!arr || !product) return
  try {
    if (arr.includes(product)) {
      throw new Error("Product Exists")
    }
    products.push(product)
  } catch (error) {
    console.error(error.message, error.trace)
    throw error
  }
}

insert(products,"apples")
console.log(products)
insert(products,"apples")
console.log(products)