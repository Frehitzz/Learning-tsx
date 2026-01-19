"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using type sript on function
function numAdd(num) {
    return num + 5;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) { }
// using typesript on arrow funtion
let loginUser = (name, email, isPaid = true) => { };
// isPiad: booleant = true  - setting up a default value
let getHello = (name) => {
    return "Hello";
};
numAdd(5);
getUpper("hello");
signUp("Fritz", "@gmail.com", true);
loginUser("h", "fhd@gmail.com");
//# sourceMappingURL=myfunction.js.map