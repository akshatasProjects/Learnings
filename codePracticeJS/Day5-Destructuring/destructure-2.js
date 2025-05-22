/*
   Exercise 1: Destructure from Nested Object in Array
   Goal: Extract name and email of the first user
   Hint: You need to access users[0].profile.name and users[0].profile.contact.email
*/

const users = [
  {
    id: 1,
    profile: {
      name: "Sara",
      contact: {
        email: "sara@example.com",
        phone: "12345678",
      },
    },
  },
  {
    id: 2,
    profile: {
      name: "Ali",
      contact: {
        email: "ali@example.com",
        phone: "87654321",
      },
    },
  },
];

const [
  {
    profile: {
      name,
      contact: { email },
    },
  },
] = users;

console.log(name);
console.log(email);

/* 
  Exercise 2: Destructure Array Inside Object
  Get the first and third genres into separate variables: firstGenre, thirdGenre
*/

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  genres: ["Self-help", "Psychology", "Productivity"],
};

const {
  genres: [firstGenre, , thirdGenre],
} = book;

console.log(firstGenre);
console.log(thirdGenre);

/*
  Exercise 3: Destructure Multiple Properties
   Goal:
Extract: name from customer , city from address, product of the second item
*/

const order = {
  id: 101,
  customer: {
    name: "Tom",
    address: {
      city: "Dubai",
      zip: 45678,
    },
  },
  items: [
    { product: "Laptop", price: 1200 },
    { product: "Mouse", price: 25 },
  ],
};

const {
  customer: {
    name: userName,
    address: { city },
  },
  items: [, { product: productName }],
} = order;

console.log(userName);
console.log(city);
console.log(productName);
