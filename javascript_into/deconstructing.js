const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output: I will get an error saying that the cars object does not have any variables named randomCar or otherRandomCar
console.log(randomCar)
console.log(otherRandomCar)
//Outcome: I got the first two items in the object.

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output: Console.log(name) will not return anything or will return an error. console.log(otherName) will return Elon
// console.log(name);
console.log(otherName);
//Outcome: console.log(name) did return an error and I had to comment it out. console.log(otherName) did return Elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output: password will return '12345' and hasedPassword will return nothing or return an error as there is no password key in the person object.
console.log(password);
console.log(hashedPassword);
//Outcome: password returned 12345 and hashedPassword returned undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output: first == second will return false while the other will return true
console.log(first == second);
console.log(first == third);


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output: key will return 'value', secondKey will return [1,5,1,8,3,3], secondKey[0] will return '1', will this work will return 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);






