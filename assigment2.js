let A;
let B;

let ab = A % 10 === 0 && B % 10 === 0;
let ba = A % 10 !== 0 && B % 10 !== 0;
let bc = (A % 10 === 0 && B % 10 !== 0) || (A % 10 !== 0 && B % 10 === 0);

console.log("Condition 1:", ab);
console.log("Condition 2:", ba);
console.log("Condition 3:", bc);

let result = ab || ba || bc;

console.log("Result:", result);

//Qus=============4=============================

let N = 3456;


let firstDigit = Math.floor(N / 1000);

console.log("First Digit:", firstDigit);

// qus==========5==============================

let abc = 6636536;


let lastdigit = abc % 10;

console.log("Last Digit:", lastdigit);


// qus===6=============================================

let bcd = 17;
let cba = 5;


let remainder = bcd % cba;

// Print
console.log("Remainder:", remainder);

// qus====7=================================================================

let num1 = 5;
let num2 = 7;


let pro = num1 * num2;

console.log("Product:", pro);

//qus=================88======================================

let math = 85;
let science = 90;
let english = 75;


let total = math + science + english;


let average = total / 3;


console.log("Math Marks:", math);
console.log("Science Marks:", science);
console.log("English Marks:", english);
console.log("Total Marks:", total);
console.log("Average Marks:", average);


let d = 5;
let b = 5;

let c = (d === b, d == b) ? "green" : "red"
console.log(c)