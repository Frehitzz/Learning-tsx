type userInfo = {
  name: string;
  age: number;
  gender: string;
};

function createUser(User: userInfo) {
  return `${User.name}`;
}
