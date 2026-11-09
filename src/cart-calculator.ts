// ----- Data (const, because it will not change) -----
const fullName: string = "Chinedu Okafor";
const heightMeters: number = 1.78;
const weightKg: number = 72;
const isStudent: boolean = true;

// ----- Calculation (let, because we adjust the value) -----
let bmi: number = weightKg / (heightMeters * heightMeters);
bmi = Math.round(bmi * 10) / 10; // round to one decimal place

// ----- Category using literal types -----
type BmiCategory = "Underweight" | "Healthy" | "Overweight" | "Obese";
let category: BmiCategory;
if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi < 25) {
    category = "Healthy";
} else if (bmi < 30) {
    category = "Overweight";
} else {
    category = "Obese";
}

// ----- Output -----
console.log("=== PROFILE CARD ===");
console.log(`Name: ${fullName}`);
console.log(`Student: ${isStudent ? "Yes" : "No"}`);
console.log(`Height: ${heightMeters} m`);
console.log(`Weight: ${weightKg} kg`);
console.log(`BMI: ${bmi} (${category})`);



const formatMoney = (amount: number): string => "$" + amount.toLocaleString("en-US", {
    maximumFractionDigits: 2,
    maximumSignificantDigits: 2
});

function subtotal(...prices: number[]): number {
    return prices.reduce((sum, price) => sum + price, 0);
}

function applyDiscount(amount: number, percent: number = 0, couponCode?: string): number {
    let finalPrice = amount - (amount * percent / 100);
    if (couponCode === "SAVE5") {
        return finalPrice - (finalPrice * 5 / 100);
    }

    return finalPrice;
}

function addTax(amount: number, rate: number = 0.075): number {
    return amount * (1 + rate);
}

function printLine(label: string, value: number, fmt: (n: number) => string): void {
    console.log(`${label.padEnd(12)} ${fmt(value).padStart(12)}`);
}

//------------Usage-------------

const items: number[] = [1200, 89.99, 349.5, 15];

const sub = subtotal(...items);
const discounted = applyDiscount(sub, 10);
const total = addTax(discounted);

printLine("Subtotal", sub, formatMoney);
printLine("After 10%", discounted, formatMoney);
printLine("Total + tax", total, formatMoney);



const isAdult = (age: number): boolean => age > 18;
console.log(isAdult(16));

function average(...nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let totalNum = nums.reduce((sum, num) => sum += num);
    return totalNum / nums.length
}

console.log(average(3, 3, 6, 67, 8));

type Validator = (input: string) => boolean;

// 1. Two validators
const isNotEmpty: Validator = (input) => input.length > 0;
const isAtLeast8: Validator = (input) => input.length >= 8;

// 2. Function that runs a value through BOTH
function runValidators(value: string, validators: Validator[]): boolean {
    // .every() returns true ONLY if every validator returns true
    return validators.every((validator) => validator(value));
}

// 3. Test it
console.log(runValidators("Alfred", [isNotEmpty, isAtLeast8])); // false
// Why? "Alfred" is not empty = true, but is 6 chars, not 8 = false. true AND false = false

console.log(runValidators("Alfred123", [isNotEmpty, isAtLeast8])); // true
// Why? Not empty = true, 9 chars = true. true AND true = true

console.log(runValidators("", [isNotEmpty, isAtLeast8])); // false
// Why? Empty = false, 0 chars = false. false AND false = false
