// const users = [
//     {name: "John", age: 25, status: false},
//     {name: "Alice", age: 30, status: true},
//     {name: "Bob", age: 22, status: false},
//     {name: "Emma", age: 28, status: false},
//     {name: "Mike", age: 35, status: true},
//     {name: "Sophia", age: 27, status: true},
//     {name: "Daniel", age: 40, status: false},
//     {name: "Olivia", age: 29, status: true},
//     {name: "Liam", age: 24, status: true},
//     {name: "Charlotte", age: 32, status: true}
// ];

// users.forEach(value => console.log (value));
// let filteredUsers =  users.filter(value => value.status === true);
// console.log(filteredUsers);
// let printedUsers = users.map((value, index) => {
//     return { id: index + 1, name: value.name, age: value.age, status: value.status };
// });
// console.log(printedUsers);
// let find = users.find(value => value.name === "Sophia");
// console.log(find);
// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));
// let sortOne = users.sort((user1, user2) => {
//     return user1.age - user2.age;
// });
// console.log(sortOne);
// let sortTwo = users.sort((user1, user2) => {
//     return user2.age - user1.age;
// });
// console.log(sortTwo);

// let sortByName = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// });
//
// console.log(sortByName);

// let reduce = users.reduce((acc, user) => {
//     if (user.status) {
//         acc.statT.push(user);
//     } else {
//         acc.statF.push(user);
//     }
//     return acc;
//
// }, {statT: [], statF: []});
//
// console.log(reduce);

// function calc(a,b, callback) {
//     return callback (a,b);
// }
//
// console.log(calc(10,20, (a, b) => a + b ));
// console.log(calc(10,20, (a, b) => a - b ));
// console.log(calc(10,20, (a, b) => a / b ));
// console.log(calc(10,20, (a, b) => a * b ));

// function filter(arr, callback) {
//     let mass = [];
//     for (const item of arr) {
//         if (callback(item)) {
//             mass[mass.length] = item;
//         }
//     }
//     return mass;
// }
//
// console.log(filter([1,2,3,4,5,6,7,8,9,10], function (item){
//     return item % 2 === 0;
// }));
//
// console.log(filter(users, function (user) {
//     return user.age < 30;
// }));
// Агрегація
// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
//
// let user1 = new User('Mike',25,true,
//     {name:'Alice',age: 22, status:true});
//
// console.log(user1);
//
// // Композиція
// function User1 (name, age, status, wifeName, wifeAge, wifeStatus) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge, status:wifeStatus};
// }
//
// let user2 = new User1('Jack',27,true,'Liza',24,true);
// console.log(user2);