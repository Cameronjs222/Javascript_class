const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};
const { firstName, lastName, ...attributes } = person;

const personCopy = { ...person };

console.log(firstName)
console.log(lastName)
console.log(attributes.email)
console.log(personCopy)