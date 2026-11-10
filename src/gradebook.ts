// for (let i = 0; i <= 15; i++) {
//     if (i % 15 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


// type Letter = 'A' | 'B' | 'C' | 'D' | 'F';

// function toLetter(score: number): Letter {
//     switch (true) {
//         case score >= 70:
//             return 'A';
//         case score >= 60:
//             return 'B';
//         case score >= 50:
//             return 'C';
//         case score >= 45:
//             return 'D';
//         default:
//             return 'F';
//     }
// }

// const results: [string, number][] = [
//     ['Tunde', 78],
//     ['Ngozi', 64],
//     ['Bayo', 49],
//     ['Amina', 91],
//     ['Kemi', 38],
// ];

// let total = 0;
// let passed = 0;

// for (const [student, score] of results) {
//     const letter = toLetter(score);
//     console.log(`${student.padEnd(8)} ${String(score).padStart(3)} ${letter}`);

//     total += score;
//     if (letter !== 'F') {
//         passed++;
//     }
// }

// const average = total / results.length;
// console.log("-----------------");
// console.log(`Class average: ${average.toFixed(1)}`);
// console.log(`Passed: ${passed} of ${results.length}`);


//1. Write a loop that prints the multiplication table of 7 from 7 x 1 to 7 x 10.
let answer = 0;

for (let i = 1; i <= 10; i++) {
    answer = 7 * i
    console.log(`7 x ${i} = ${answer}`);
}

//2. Write a function isLeapYear(year: number): boolean using if/else. Remember: divisible by 4, except
//century years, unless divisible by 400.

// function isLeapYear(year: number): boolean {
//     if (year % 4 === 0 || year % 400 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isLeapYear(2026));

//3. Use while to find the first power of 2 that is greater than 1000.
let power = 0;
while (2 ** power <= 1000) {
    power++;
}

console.log(power);
///Corrections
function isLeapYear(year: number): boolean {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}

let result = 1;
while (result <= 1000) {
    result *= 2;
}
console.log(result); // 1024