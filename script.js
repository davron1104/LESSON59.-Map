'use strict';
const user = {
    name: 'John', 
    surname: 'Smith',
    birthday: '20/04/2021',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname} ${this.birthday}`);
    }
};

const userMap = new Map(Object.entries(user));
console.log(userMap);


const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);


// user.showMyPublicData();
// Object.defineProperty(user, 'showMyPublicData',{enumerable: false});
// console.log(user);
// console.log(typeof(Object.keys(user)[0]));

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budjet = [5000, 7000, 10000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i)=> {
    map.set(shop, budjet[i]);
});

// map.set(shops[0], 5000)
//     .set(shops[1], 7000)
//     .set(shops[2], 10000);
console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
// map.size;
// map.keys();

// console.log(map.keys());



// const goods =[];
// for(let shop of map.keys()) {
//     // console.log(shop);
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);


// for(let price of map.values()) {
//     console.log(price);
// }



// for(let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }



// map.forEach((value, key, map)=> {
//     console.log(key, value);
// });