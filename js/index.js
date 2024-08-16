// JavaScript Object Notation 
// JSON
const user = { id: 11, name: 'Gorib Amir', job: 'Actor' }
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranvir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'mouse'],
    owner: {
        name: 'Alia Ghatt',
        profession: 'teacher'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
