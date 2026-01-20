type userInfo = {
  // _id - used for mongodb
  readonly _id: number; // cannot be modified
  name: string;
  age: number;
  card?: number; // put '?' if you will not put a value like its optional
};

let myUser: userInfo = {
  _id: 12,
  name: "Fritz",
  age: 20,
  //card: 123 - we can now dont put a card here because of '?' optional
};

myUser.name = "HARLY";

// Have an error, you cant change it bc its readonly
//myUser._id = 23;
