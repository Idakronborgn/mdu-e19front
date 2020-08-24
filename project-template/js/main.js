"use strict"; // to enable strict mode and modern JavaScript functionality

// appends a string to the DOM
document.querySelector("#content").innerHTML = "Hi Frontenders!";

function showAlert() {
  alert('Open your Developer Console!');
}

// declaring teacher objects
let teacher1 = {
  name: 'Birgitte',
  initials: 'bki'
};

let teacher2 = {
  name: 'Rasmus',
  initials: 'race'
};

// let teacher3 = {
  
// };

// let teacher4 = {

// };

// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);
// console.log(teacher3);
// console.log(teacher4);


let person = {
  name: "Ida Kronborg Nielsen";
  origin: "Aarhus";
  background: "22 years old, a smiling person who wants to have fun";
  whyFronted: "It's fun to code, and i wonna learn more";
  expectations: "To be better at it ";
};

console.log(person);