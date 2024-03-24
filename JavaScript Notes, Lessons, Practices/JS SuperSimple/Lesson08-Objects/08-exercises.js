// EXERCISES

///// 8A

/*
const product = {
  name: "basketball",
  price: 2095,
};

console.log(product);
*/

///// 8B

/*
product.price += 500;

console.log(product);
*/

///// 8C
/*
product["delivery-time"] = "3 days";

console.log(product);
*/

///// 8D
// Create function which takes 2 products and returns the product that is less expensive. Create 2 products and try out the function

/*
const product1 = {
  name: "shirt",
  price: 5090,
};

const product2 = {
  name: "pant",
  price: 7090,
};

console.log(product1, product2);

const comparePrice = function (product1, product2) {
  return product1.price < product2.price ? product1 : product2;
};

console.log(comparePrice(product1, product2));
*/

//// 8E

/*
const product3 = {
  name: "shirt",
  price: 109.9,
};

const product4 = {
  name: "shirt",
  price: 109.9,
};

const isSameProduct = function (product1, product2) {
  return product1.name === product2.name && product1.price === product2.price;
};

console.log(isSameProduct(product3, product4));

// references are objects. so you cannot compare directly
console.log(product3 === product4);
*/

///// 8F

// console.log("GOOD MORNING".toLocaleLowerCase());

///// 8G

// console.log("TEST".repeat(5));

///// 8H
