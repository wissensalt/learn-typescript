// Partial
interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;
console.log(pointPart);


//Required
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar : Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12
}

console.log(myCar);

//Record
const studentNumber: Record<number, string> = {
    1: 'John',
    2: 'Wick'
}
console.log(studentNumber);

//Omit
interface Person {
    name: string;
    age: number;
    location: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name : "bob"
}
console.log(bob);

//Pick
const bobPick: Pick<Person, 'name'> = {
    name: "bob"
}
console.log(bob);

//Exclude
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = 1;
const value2: Exclude<Primitive, string> = true;
console.log(value);
console.log(value2);

//Return Type
type PointGenerator = () => {x: number, y: number};
const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
}
console.log(point);

//Parameters
type PointPrinter = (a: {x: number, y: number}, b: number) => void;
const pointPrinter : Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
}
console.log(pointPrinter);