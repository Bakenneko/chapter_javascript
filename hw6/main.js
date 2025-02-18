const users = [
    {name: "John", age: 25, status: false},
    {name: "Alice", age: 30, status: true},
    {name: "Bob", age: 22, status: false},
    {name: "Emma", age: 28, status: false},
    {name: "Mike", age: 35, status: true},
    {name: "Sophia", age: 27, status: true},
    {name: "Daniel", age: 40, status: false},
    {name: "Olivia", age: 29, status: true},
    {name: "Liam", age: 24, status: true},
    {name: "Charlotte", age: 32, status: true}
];

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

let sortByName = users.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    if (a.name === b.name) {
        return 0;
    }
});

console.log(sortByName);




