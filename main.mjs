import _ from 'lodash'

// array of numbers for reference
let arrOfNums = [1, 2, 3, 4, 5, 6]
let arrToZip = ['a', 'b', 'c', 'd', 'e', 'f']

// _.chunk(array, [size=1])
// Creates an array of elements split into groups the length of size
console.log('Chunked Array:', _.chunk(arrOfNums, 2))

// _.without(array, [values])
// Creates an array excluding all given values
console.log('Array Without Values:', _.without(arrOfNums, 4, 6))

// _.shuffle(collection)
// Creates an array of shuffled values
console.log('Shuffled Array:', _.shuffle(arrOfNums))

// _.zip([arrays])
// Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on
console.log('Zipped Array:', _.zip(arrOfNums, arrToZip))

// _.reverse(array)
// Reverses an array
console.log('Reversed Array:', _.reverse(arrOfNums))

// arrays of fake user data
let arrOfUsers = [
  {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org"
  },
  {
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net"
  },
  {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "phone": "1-463-123-4447",
  "website": "ramiro.info"
  },
  {
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "phone": "493-170-9623 x156",
  "website": "kale.biz"
  },
  {
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  "phone": "(254)954-1289",
  "website": "demarco.info"
  }
]

let usersToZip = [
  {
  "id": 1,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
  "phone": "(775)976-6794 x41206",
  "website": "conrad.com"
  },
  {
  "id": 2,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "phone": "024-648-3804",
  "website": "ambrose.net"
  },
  {
  "id": 3,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com"
  },
  {
  "id": 4,
  "name": "Kurtis Weissnat",
  "username": "Elwyn.Skiles",
  "email": "Telly.Hoeger@billy.biz",
  "phone": "210.067.6132",
  "website": "elvis.io"
  },
  {
  "id": 5,
  "name": "Mrs. Dennis Schulist",
  "username": "Leopoldo_Corkery",
  "email": "Karley_Dach@jasper.info",
  "phone": "1-477-935-8478 x6430",
  "website": "ola.org"
  }
]

// _.chunk()
console.log('Chunked Users:', _.chunk(arrOfUsers, 2))

// _.without()
console.log('Users Without Values:', _.without(arrOfUsers, arrOfUsers[2], arrOfUsers[4]))

// _.shuffle
console.log('Shuffled Users:', _.shuffle(arrOfUsers))

// _.zip()
console.log('Zipped Users:', _.zip(arrOfUsers, usersToZip))

// _.reverse()
console.log('Reversed Users:', _.reverse(arrOfUsers))