// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
var res = fibonacci.substring(0, 10);

console.log(fibonacci(res))


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

let odds1 = fullArr1.filter(n => n%2)
let odds2 =fullArr2.filter(n => n%2)

console.log(odds1)
console.log(odds2)



// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type);

// Log the bell:
console.log(bicycle.gear('bison'));

// Log the PSI:
console.log(wheels.specs("80-115 PSI"));


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

Function reverseArrayInPlace(originalArray1) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      let el = originalArray1[i];
      arr[i] = originalArray1[originalArray1.length - 1 - i];
      arr[originalArray1.length - 1 - i] = el;
  }
  return originalArray1;
}

Function reverseArrayInPlace(originalArray1) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      let el = originalArray2[i];
      originalArray1[i] = originalArray2[originalArray2.length - 1 - i];
      originalArray1[originalArray1.length - 1 - i] = el;
  }
  return originalArray2;
}



// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"



function count(string,char) {
 var re = new RegExp(char,"gi");
 return string.match(re).length;
}
;
console.log(count(str,'L'));

// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

function getMiddle(string){  
    var middleLetters1 = "hello";  
    if(string.length % 2 === 0){    
        var even = string.length /2;    
        return string.slice(even -1, even + 1);          
    } if (string.length % 2 !== 0){   
        var odd = string.charAt((string.length/2))    
         return odd;      
         
        
    }
    
    function getMiddle(string){  
    var middleLetters2 = "rhinoceros";  
    if(string.length % 2 === 0){    
        var even = string.length /2;    
        return string.slice(even -1, even + 1);          
    } if (string.length % 2 !== 0){   
        var odd = string.charAt((string.length/2))    
         return odd;      
         
        
    }
    
}     
// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

var radius = {
    sphere1: 15,
    sphere2: 12,
    sphere3: 22,
}

 function sphere(radius)
{
    this.radius = radius;
  
    this.area = function () 
    {
        return Math.PI(Math.pow)* this.radius * this.radius;
    };
    
    console.log(sphere1(sphere))
    console.log(sphere2(sphere))
    console.log(sphere2(sphere))


//I wasn't sure how to do this one correctly so i just did what i could.


// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
const { make:"VW", model:'jetta'} = myCar
const {doors: 4. transmission: "manual"} = specs

console.log(name)
console.log(model)

console.log(doors)
console.log(transmission)

//I am not sure if i did this correctly.
 


// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
