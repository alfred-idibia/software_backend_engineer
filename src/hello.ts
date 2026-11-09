const pi: number = 3.14;
let radius: number = 3;

let areaOfACircle: number = pi * radius * radius;

console.log(`${areaOfACircle}`);


type Weekday = "Mon" | "Tue" | "Wed" | "Thur" | "Fri";

let today: Weekday;

today = "Wed";

let unknownValue: unknown = 25;

if (typeof unknownValue === "number") {
    console.log(unknownValue * 2);
}