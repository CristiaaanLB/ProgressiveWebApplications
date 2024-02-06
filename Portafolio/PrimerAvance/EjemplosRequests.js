// obj = {
//     username: "var",
//     status: true
// }

// persons("foo", "hello", "world", "this", "is", "america", obj.username);

// const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url).then(response => response.json())
//     .then(response => {
//         response.forEach(element => {
//             console.log("ID: " + element.id + " --- Title: " + element.title);
//         });
//     });

// const url = "https://jsonplaceholder.typicode.com/albums";

// fetch(url).then(response => response.json())
//     .then(response => {
//         response.forEach(element => {
//             console.log("userId: " + element.userId + " | id: " + element.id + " | title: " + element.title);
//         });
//     });

const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/users";

// axios.get(url).then(response => {
//     response.data.forEach(element => {
//         console.log(element.username);
//     });
// });

axios.post(url, {
    username: "Hola",
    email: "hola@gmail.com"
}).then(response => console.log(response.data))