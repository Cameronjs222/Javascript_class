const express = require('express')
const { faker } = require('@faker-js/faker');
const app = express()
const port = 3000

// we can create a function to return a random / fake "Product"

app.get('/', (req, res) => {
  const createProduct = () => {
      const newFake = {
          name: faker.commerce.productName(),
          price: "$" + faker.commerce.price(),
          department: faker.commerce.department()
      };
      return newFake;
  };
      
  const newFakeProduct = createProduct();
  console.log(newFakeProduct);
res.send(newFakeProduct)}
)

app.listen(port, () => {
  console.log(`joker api app listening on port ${port}`)
})