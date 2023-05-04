const express = require("express");
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker');
const createUser = () => ({
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    _id: faker.datatype.uuid()
    });

const createCompany = () => ({
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
    },
}); 

app.get("/api/user/new", (req, res) => {
    const newUser = createUser()
    res.json(newUser);
});
app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany()
    res.json(newCompany);
});
app.get("/api/user/company", (req, res) => {
    const newUser = createUser()
    const newCompany = createCompany()
    const userWithCompany = {
        User: newUser,
        Company: newCompany
};
    res.json(userWithCompany)
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );