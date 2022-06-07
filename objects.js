//1. Make an object that represents a dog called myDog,
// which contains the properties name (a string), legs, tails and friends.

// You can set these object properties to whatever values you want,
// as long as name is a string, legs and tails are numbers, and friends is an array.
const myDog = {
    // Only change code below this line
  
  
    // Only change code above this line
  };


//  2. prop1val would have a value of the string val1, and prop2val would have a value of the string val2.

// Read in the property values of testObj using dot notation. Set the variable hatValue 
// equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj;      // Change this line
  const shirtValue = testObj;    // Change this line

//  3. Delete the tails property from yourDog. You may use either dot or bracket notation.
// Setup
const yourDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line

//  4. Add a bark property to myDogs and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
const myDogs = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  

//  5. Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
//Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement.
// The object should contain at least 3 elements. You should place your code between the braces in the let statement:

let myArray = {
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Create a function that creates and returns a copy of an object. 
// The function should take two arguments: the object to copy and an array of the keys that you want to copy. 
// Do not mutate the original object.

// The function should let you omit the array of keys argument when calling the function. 
// If you do omit the argument, the function should copy all of the existing keys from the object.

// Here are some examples for your reference:
let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  
  let newObj = copyObj(objToCopy);
  console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);       // => { foo: 1, qux: 3 }
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);       // => { bar: 2 }


//   Write a JavaScript program to display the reading status (i.e. display book name, 
//     author name and reading status) of the following books

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    // Write a JavaScript program to create a Clock.
    // Note: The output will come every second.
    // Expected Console Output :
    // "14:37:42"
    // "14:37:43"
    // "14:37:44"
    // "14:37:45"
    // "14:37:46"
    // "14:37:47"


    function my_Clock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }

//   Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
//  Expected Output:
 
//  [[object Object] {
//    author: "Walter Isaacson",
//    libraryID: 4264,
//    title: "Steve Jobs"
//  }, [object Object] {
//    author: "Suzanne Collins",
//    libraryID: 3245,
//    title: "Mockingjay: The Final Book of The Hunger Games"
//  }, [object Object] {
//    author: "The Road Ahead",
//    libraryID: 1254,
//    title: "Bill Gates"
//  }]