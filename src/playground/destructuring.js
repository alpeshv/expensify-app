// Object Destructuring

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array Destructuring
const address = ['35 Royal Avenue', 'London', 'NW1 1MN', 'UK'];

const [, city = 'London', postcode] = address;

console.log(`You are in ${city} ${postcode}`);