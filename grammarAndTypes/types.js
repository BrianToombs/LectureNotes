//******
//Tyes
//******

/*
Booleans

- Are ONLY True or False values.
-
*/

let on = true
console.log(on)

let off = false
console.log(off)


/*
NULL
- Null is like an empty bucket, it has the capacity to be filled, but it currently is not.
*/

let emptyBucket = null
emptyBucket = 'water'
console.log(emptyBucket)

/*
UNDEFINED
- Currently has no value assigned
- Acts as the means (plastic/metal) to create the bucked
*/

let metal; //correct way to assign undefined
//variable
// let metal = undefined;  //wrong way, it is redundant
// to initialize if it is not defined

console.log(metal)


// NULL vs. UNDEFINED
//***********
// - Null is like an empty bucket, the bucket is there but there is nothinge in it.
// - Undefined is like the materials we will use to create the bucket.

// We can also think of these two variables as pizza boxes
// - Null is like the empty pizza box, just waiting for a pizza.
// - Undefined is like the unassembled box

let emptyBox = null
let unassembledBox;

/*
NUMBERS
- In JavaScript, numbers are literally just numbers
- You can add, subtract, multiply, and divide
- You can use decimals
*/

let degrees = 90;
console.log(degrees)

// will console.log() as 999999999999999
let precise = 999999999999999
console.log(precise)

// will console.log() as 1000000000000000
let rounded = 9999999999999999
console.log(rounded)

// will console.log() as 0.300000000000004
let notQuite = 0.2 + 0.1
console.log(notQuite)

//Function to convert a string to numbers IF that string is a number
let a = Number ('123')
console.log(a)

/*
STRINGS
- A String is any value in between a set of quotes or back ticks
- A String can be denoted by '', "", ``
- 'string' === "string" === `string`
*/

let stringOne = "double quotes"
let stringTwo = 'string quotes'
console.log(stringOne, stringTwo)

// Numbers vs Strings
let addition = 1050 + 100
console.log(addition)
let concatenation = "1050" + "100"
console.log(concatenation)

console.log(typeof addition)
console.log(typeof concatenation)

/*
OBJECTS
- Can be denoted by {}
- Objects store 2 things, a key and a value
- We can access these values, by digging into the object with dot notation - object.value
*/

// Say we want to create an app like Spotify
// We want to take in an artists name, amount of albums they've produced, all members are still alive?

let artist = {
    //key   //value
    name: "Queen",
    albums: 15,
    allMembersAlive: false
}

console.log(artist)
//Example of Dot notation
console.log(artist.name)
console.log(typeof artist.name)

// How to add to object
artist.songName = "I want it all"
console.log(artist)

// How to change an object's value
artist.songName = "Bohemian Rapsody"
console.log(artist)


/*
ARRAYS

let list = [  'item1',   'item2',   'item3' ]
                (0)        (1)        (2)

- Denoted by []
- You can access a value by digging into the array with array[0]
*/

let burritos = ['large', 4, true]

//console.log() as ab oject
//BECAUSE
console.log(burritos)

/*
ADDITION VS CONCATENATION
- Addition is adding numbers together
- Concatenation is adding strings together
*/

let add = 100 + 100
console.log(add)

let concat = 'Corynne ' + "Moody"
console.log(concat)

let stillConcat = '1050' + 100
console.log(stillConcat)