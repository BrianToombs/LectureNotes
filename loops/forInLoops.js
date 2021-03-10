/*
For In Loops - great for iterating over values in an object.
    Properties in objects are what's called enumerable.
    For in loops iterates over an object's enumerable properties
*/


let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "brittish shorthair", "burmese," "Maine coon", "rag doll"];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

//Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name.

let nameTwo = ["brIaN"]
let capName;

for (let l in nameTwo) {
    if(l == 0) {
        capName = nameTwo[l].toUpperCase();
    } else {
        capName += nameTwo[l].toLowerCase();
    }
}