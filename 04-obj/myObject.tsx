//Parameter destructuring
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
createUser({ name: "harly", isPaid: false });

// Equivalent without destruturing
function createUser2(User: { name: string; isPaid: boolean }) {
  // would need access as: User.name and User.isPaid
}

// Cleaner way using type or interface
type User = {
  name: string;
  isPaid: boolean;
};

//
// interface User = {
//     name: string,
//     isPaid: boolean
// }

function createUser3({ name, isPaid }: User) {}

export {};
