// Object ype alias
type userInfo = {
  name: string;
  age: number;
  gender: string;
};

// Primitive type alias
type ID = string | number;

// Union type alias
type Status = "pending" | "success" | "error";

// Function type alias
type Callback = (data: string) => void;

function createUser(User: userInfo) {
  return `${User.name}, ${User.age}, ${User.gender}`;
}
