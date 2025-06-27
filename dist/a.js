"use strict";
const x = 101;
console.log(x);
//making the hello world fucntion
function greetPeople(firstName) {
    console.log("hello," + firstName);
}
greetPeople("rakib");
//create a function which returns the sum of two numbers
//type inference automatically handle what type is returned(it means its a good practice if u mention what will be return after execution)
function sumNumbers(a, b) {
    return a + b;
}
const value = sumNumbers(10, 20);
console.log(value);
//age is legal or not 
function isLegal(age) {
    if (age >= 18) {
        console.log("yes the age is legal");
        return true;
    }
    else {
        console.log("the age is not legal");
        return false;
    }
}
//even without any declaration it figured out to be boolean this is known as type inference
let y = isLegal(19);
//create a fucntion which takes input as function and return it after one second
function excecuteAfterOne(fn) {
    return setTimeout(() => {
        fn();
    }, 1000);
}
excecuteAfterOne(function () {
    console.log("hi,after one sec");
});
function isAdult(user) {
    if (user.age >= 18) {
        console.log("the user is adult");
    }
    else {
        console.log("the user is not adult");
    }
}
function greetUser(user) {
    console.log("hello", user.firstName);
}
greetUser({
    firstName: "rakib",
    lastName: "hussain",
    age: 18
});
isAdult({
    firstName: "maina",
    lastName: "huss",
    age: 17
});
