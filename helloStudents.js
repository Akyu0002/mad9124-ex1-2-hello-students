/********************************
 *
 *  MADD 9124 | Tibet Akyurekli
 *       Exercise 1-2     
 *     January 10th 2022
 *
 ********************************/

'use strict'

// 1. Read the JSON file into a variable called students
const students  = require("./students.json") 
// console.log(students)

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

students.forEach(function (students){
console.log(`Hello ${students.firstName} ${students.lastName}`) // Use a template string to console log a message with both first and last name.
})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

const filteredStudents = students.filter(student => student.lastName.charAt(0) === 'D') // Check position 0 of student.lastName to see if its a D
console.log(`Count of last names starting with D is ${filteredStudents.length}`) // Console log a message with the amount of objects stored in filteredStudents