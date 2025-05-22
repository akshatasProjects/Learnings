/*
  // 1. Destructure to get first and last item
const colors = ["red", "green", "blue", "yellow"];
// get "red" and "yellow" */

const colors = ["red", "green", "blue", "yellow"];

const [first, , , last] = colors;
console.log(first, last);

/*
// 2. Destructure object to get city and zip
const address = {
  street: "Palm Street",
  city: "Dubai",
  zip: 12345,
};
*/

const address = {
  street: "Palm Street",
  city: "Dubai",
  zip: 12345,
};

const { city, zip } = address;
console.log(city, zip);

/* -------------------------------------------
  // Destructure name and math marks from this student object
const student = {
  name: "Ali",
  marks: {
    math: 95,
    english: 88,
  },
};

*/

const student = {
  name: "Ali",
  marks: {
    math: 95,
    english: 88,
  },
};

const {
  name,
  marks: { math, english },
} = student;

console.log(name);
console.log(math);
console.log(english);

/*-------------------------------------    
   Can you destructure username and city from this object?
*/

const user = {
  id: 1,
  profile: {
    username: "cool_user",
    location: { city: "Dubai", country: "UAE" },
  },
};

let {
  profile: {
    username,
    location: { city: newCity },
  },
} = user;

console.log(username); // "cool_user"
console.log(newCity); // "Dubai"
