/*
For Of Loops - "for of loops" and "for in loops" both do the same thing which is loop over data structures. Ther is one key difference, what they iterate over.
    - for in loops iterate over the enumerable properties in an object
    - for of loops iterate over the values of an iterable object
*/

let catArray = ["tabby", "brittish shorthair", "burmese," "Maine coon", "rag doll"];

for (cat of catArray) {
    console.log(cat);
}

// Cannot use for of loops on objects without indicies.
let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (stud of student) {
    console.log(stud);
}

//for of loops are best used on arrays
//for in loops are best used on objects