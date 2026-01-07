// function greet() {
//     console.log("Hello world");
// }
// greet();




// function numAdd(a, b) {

//     console.log(a + b)
// }
// numAdd(4, 6);


// function birhtYear() {
//     let birthYearVar = prompt("Enter Your Birth Year");
//     let currntDate = 2026 - birthYearVar;
//     console.log(currntDate);
// }
// birhtYear();

// function BirthDateCalc(birthYear) {
//     let newDate = 2026 - birthYear;
//     console.log(newDate);
// }
// BirthDateCalc(2002);


// function myShop(cutomerName, itemName, itemQua, price) {
//     console.log(`${cutomerName} Your Order For ${itemName} only on just ${price} has been deliverd`);

// }
// myShop("Zero", "RTX5090", 3, 999)

// function calculationArea(width, height) {
//     const area = width * height;
//     return area;
// }
// const totalArea = calculationArea(20, 20);
// console.log(totalArea);



// function bmiValue(weight, height) {
//     let bmiVal = weight / (height ** 2);

//     return bmiVal;
// }

// let weight = prompt("Enter your weight in kg:");
// let height = prompt("Enter your height in meters:");

// const totalBMI = bmiValue(weight, height);
// console.log("Your BMI is: " + totalBMI);


// let names = ["ALi", "zer0", "laZy", "Adolf"]
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);
// names.push("Ideoversity");
// console.log(names);

// const myAge = () => {
//     let birthYear = 2002;
//     let totalAge = 2026 - birthYear;
//     console.log(totalAge);

// }
// myAge();

// const myFunc = (weight, height) => {
//     let area = weight / (height ** 2)
//     console.log(area);

// }
// myFunc(90, 6);



// let names = ["ali", "don", "teacher", "ASP", "World"]
// names.map((ide) => {
//     console.log(ide);
// })
// let ages = [12, 45, 34, 29, 33, 23, 24, 19]
// // ages.map((ilm) => {
// //     document.writeln("<br>" + ilm)
// // })
// let filterAges = ages.filter((ag) => {
//     if (ag < 18) {
//         return false;
//     }
//     return ag
// });
// console.log(filterAges)


// let myObj = {
//     name: "zero",
//     model: "2002",
//     properties: "devOps",
//     vision: ["gaming", "laptop", "tour "],
// }
// console.log(myObj);
// console.log(myObj['model']);
// console.log(myObj['vision']);


let person = {
    name: "zero",
    model: "2002",
    properties: "devOps",
    vision: ["gaming", "laptop", "tour "],
    goal: {
        current: "dev",
        future: "SoFTENG"
    },
    activities: () => {
        console.log(23 ** 4);

    }
}
console.log(person);
console.log(person['name']);
console.log(person['model']);
console.log(person['properties']);
console.log(person['goal']['current']);
console.log(person['activities']());
