
// const mysym = Symbol("key1")

// const user = {
//     name: "aditya",
//     "full name": "aditya raj",
//     [mysym]: "key2",
//     age: 20,
//     location: "Noida",
//     email: "aditya@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday", "tuesday", "wednesday"]
// }

// console.log(user.email);
// console.log(user["location"])
// console.log(user["full name"])
// console.log(user[mysym]);

// user.email = "aditya@gpt.com"
// Object.freeze(user)
// user.email = "aditya@insta"
// console.log(user.email);
// user.name = "aadi"
// console.log(user.name);

// user.Greetings = function () {
//     console.log("welcome user")
// }
// user.Greetings2 = function () {
//     console.log("thank your for visiting", `${this.name},${this.age}`)
// }
// console.log(user.Greetings());

// console.log(user.Greetings2());


// const tinderUser = {}

// tinderUser.id = "123asd"
// tinderUser.name = "winter"
// tinderUser.age = 19
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regUser = {
//     email: "aditya@gpt",
//     fullname: {
//         userFullName: {
//             firstName: "winter",
//             lastName: "wing"
//         }
//     }
// }
// console.log(regUser.fullname.userFullName.firstName);
// console.log(regUser.fullname.userFullName.lastName);

// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "a", 4: "b" }
// const obj3 = { 5: "a", 6: "b" }

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4);



// const tinderUser = {}

// tinderUser.id = "123asd"
// tinderUser.name = "winter"
// tinderUser.age = 19
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);
// const users = [
//     {
//         id: 1,
//         email: "jy@gmail"
//     },
//     {
//         id: 1,
//         email: "jy@gmail"
//     },
//     {
//         id: 1,
//         email: "jy@gmail"
//     },

// ]
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// const course = {
//     courseName: "javaScript",
//     price: "999",
//     codeInstructor: "vasudev"
// }

// const { codeInstructor: Instructor } = course
// console.log(Instructor);

// console.log("v");
// console.log("a");
// console.log("s");
// console.log("u");
// console.log("d");
// console.log("e");
// console.log("v");

function nameSplitter() {

    console.log("v");
    console.log("a");
    console.log("s");
    console.log("u");
    console.log("d");
    console.log("e");
    console.log("v");

}
// nameSplitter()


function addTwoNumber(number1, number2) {
    let result = number1 + number2
    console.log("vasudev");
    return result
}

const result = addTwoNumber(3, 9)
console.log("result:", result);
