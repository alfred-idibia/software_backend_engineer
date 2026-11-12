//1. Create an interface Product with name, price and an optional discount. Make an array of three products
//and use reduce to find the total price.

interface Product {
    name: string;
    price: number;
    discount?: number;
}

const products: Product[] = [
    { name: "rice", price: 23, },
    { name: "beans", price: 30, },
    { name: "maggi", price: 10, discount: 2 },
];

// Total price after discount
const totalPrice = products.reduce((total, product) => {
    const discount = product.discount ?? 0;
    return total + (product.price - discount);
}, 0);

console.log(totalPrice); // 61

//2. Write a function that returns a tuple [min, max] from an array of numbers.

function getMinMax(numbers: number[]): [number, number] {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return [min, max];
}

console.log(getMinMax([4, 8, 2, 10, 6]));
// Output: [2, 10]

//3. Create a string enum Season and a function that returns a sentence about each season using a switch.

enum Season {
    Spring = "Spring",
    Summer = "Summer",
    Autumn = "Autumn",
    Winter = "Winter"
}

function describeSeason(season: Season): string {
    switch (season) {
        case Season.Spring:
            return "Spring is a season when flowers begin to bloom.";

        case Season.Summer:
            return "Summer is usually the warmest season of the year.";

        case Season.Autumn:
            return "Autumn is the season when many trees shed their leaves.";

        case Season.Winter:
            return "Winter is typically the coldest season of the year.";

        default:
            return "Unknown season.";
    }
}

console.log(describeSeason(Season.Spring));
console.log(describeSeason(Season.Summer));
console.log(describeSeason(Season.Autumn));
console.log(describeSeason(Season.Winter));