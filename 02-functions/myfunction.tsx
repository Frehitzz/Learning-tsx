// using type sript on function
function numAdd(num: number): number {
  return num + 5;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

// using typesript on arrow funtion
let loginUser = (name: string, email: string, isPaid: boolean = true) => {};
// isPiad: booleant = true  - setting up a default value

let getHello = (name: string): string => {
  return "Hello";
};

numAdd(5);
getUpper("hello");
signUp("Fritz", "@gmail.com", true);
loginUser("h", "fhd@gmail.com");

export {};
