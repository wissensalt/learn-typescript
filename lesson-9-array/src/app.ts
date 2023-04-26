let names: string[] = ["John", "Doe"];
let fruits: Array<number> = [1, 2, 3];
// tuple
let student: [string, string, number] = ["1001", "John", 12];
let product: [number, string] = [1, "Handphone"];

console.log(names)
console.log(names[1]);
console.log(fruits[2])
console.log(student)
console.log(product)

names[1] = "David"
console.log(names[1])

product[0] = 2
product[1] = "Asus"
console.log(product)

function japanCars(element) {
    return (element === "Toyota" || element === "Honda")
}

let cars: Array<string> = [];
cars.push("Toyota")
cars.push("Honda")
cars.push("Volvo")
console.log("All Cars : ", cars)
console.log("Japan Cars Only : ", cars.filter(japanCars))
cars.map(car => {
    console.log(`car : ${car}`)
})

cars.map((car): string => {
    return `car : ${car}`
})

delete names[0]
console.log(names)