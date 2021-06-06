// Data Structure
//Objects
const profileData = {
    name: "John",
    surname: "Smith",
    age: 33,
    city: "Paris"
}
// Convert Object -> Array
function convertObjectToArray(object) {
    return Object.entries(object);
}
const myObj = {
    "1": 10,
    "2": 20,
    "3": 30
}
console.log(convertObjectToArray(myObj));
// Convert Array Data
function convertArrayData(array) {
    array.pop();
    let reversed = array.reverse();
    reversed.push("milk");
    return reversed;
}
const drinks = ["coffee", "tea", "juice"];
console.log(convertArrayData(drinks));
//convert arrays into object
const CovertArraysToObject=(array1,array2)=>{
    const result = array1.reduce((acc,item,index)=>{
        acc[item]=array2[index]
        return acc
    },{})
    return result
}
let array1= ["Berlin", "Hamburg", "Munich","Stuttgart","Dusseldorf"];
let array2 = ["891.68 km2", "755.3 km2","310.7 km2","207.35 km2","217.41 km2"];
console.log(CovertArraysToObject(array1,array2))
//Nested Arrays
function createGrid(size, char) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        grid.push([]);
        for (let j = 0; j < size; j++) {
            grid[i].push(char);
        }
    }
    return grid;
}
console.log(createGrid(3, "*"))
//Word Converter
function wordConverter(arrayWords, suffix) {
    let converted = arrayWords.map(word => word += suffix);
    return converted;
}
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));
//Hour Tracking
const hourTracking = [
    { day: 'Monday', start: 8, end: 17 },
    { day: 'Tuesday', start: 9, end: 15 },
    { day: 'Wednesday', start: 10, end: 18 },
    { day: 'Thursday', start: 7, end: 14 },
    { day: 'Friday', start: 6, end: 12 },
];
function calculateHours(hours) {
    const workingHours = hours.reduce((total, hours) => {
        return total += (hours.end - hours.start);
    }, 0);
    return workingHours;
}
console.log(calculateHours(hourTracking));
// Classes
class Course {
    constructor(teacher, type, number) {
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }
    spaceNeeded() {
        let result = this.number * 2;
        return `The classroom should be ${result}m².`;
    }
    details() {
        return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
    }
}
let course = new Course("John", "web development", 22);
console.log(course.spaceNeeded());
console.log(course.details());
// Problem Solving
function capitalizeFirstLetter(input) {
    const string = input.toString();
    const splitString = string.split(" ");
    const capitalizedArray = [];
    for (let i = 0; i < splitString.length; i++) {
        const firstChar = splitString[i][0].toUpperCase();
        const remainderString = splitString[i].substring(1, splitString[i].length);
        const capitalizedWord = firstChar + remainderString;
        capitalizedArray.push(capitalizedWord);
    }
    const capitalizedString = capitalizedArray.join(" ");
    return capitalizedString;
}
console.log(capitalizeFirstLetter("hey there"));
// Validate Pin
function validPin(pinCode) {
    const number = Number(pinCode);
    //checks if pin is not a number
    if (isNaN(number)) {
        return false;
    }
    const pinSplit = pinCode.split("");
    const lengthOfPin = 4;
    //checks pin length
    if (pinSplit.length !== lengthOfPin) {
        return false;
    }
    //checks if last value is odd or even
    if (parseInt(pinCode[lengthOfPin - 1]) % 2 !== 0) {
        return false;
    }
    let result = 0;
    let checkIdenticalNumbers = [];
    for (let i = 0; i < pinSplit.length; i++) {
        result += parseInt(pinSplit[i]);
        if (pinSplit[0] !== pinSplit[i]) {
            checkIdenticalNumbers.push(pinSplit[i]);
        }
    }
    //checks if all numbers are identical
    if (checkIdenticalNumbers.length === 0) {
       return false;
    }
    //checks if total value of pin is less than 5
    if (result < 5) {
        return false
    }
    return true;
}
console.log(validPin("1100"));
module.exports = {profileData, convertObjectToArray, convertArrayData, CovertArraysToObject, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};