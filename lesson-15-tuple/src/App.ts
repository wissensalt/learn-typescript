let product: [string, number];
product = ["Table", 500];
console.log(product)
for (let element in product) {
    console.log(product[element]);
}

let flag: [string, boolean];
flag = ["Active", false];
console.log(flag);

let last3Scores: [string, number, number, number];
last3Scores = ["David", 100, 144, 155];
console.log(last3Scores);

let point: [number, number, number];
point = [11.2, 20.1, 22.2];
console.log(point);

// open-ended tuples
type Scores= [string, ...number[]];
const davidScores: Scores = ["david", 1, 2, 3, 4, 5];
console.log(davidScores);

// tuple function parameters
function logScores(...scores:[...number[]]): void {
    console.log(scores);
}
logScores(10, 20, 30, 40, 50);

function logNameAndScores(...scores: Scores): void {
    console.log(scores);
}
logNameAndScores("David", 11, 12, 13, 14, 15);

// spread expressions
const logScores2 = (score1: number, score2: number, score3: number): void => {
    console.log("score 1 : ", score1, ", score 2 : ", score2, ", score 3 : ", score3);
}
const scores:[number, number, number] = [10, 200, 150]
logScores2(...scores);

// empty tuples
type Empty = [];
const empty: Empty = [];
// error because it requires empty tuple
// const notEmpty: Empty = ["David"];
type Scoresx = [] | [number] | [number, number] | [number, number, number]
const benScores: Scoresx = [];
const samScores: Scoresx = [55];
const bobScores: Scoresx = [95, 75];
const jayneScores: Scoresx = [65, 50, 70];
// error because it requires max 3 elements
// const sarahScores: Scoresx = [95, 50, 75, 75];

// optional tuple
let data: [number, number?, number?];
data = [1]
data = [1, 2]
data = [1, 2, 3]
// error because max element is 3
// data = [1, 2, 3, 4]

function drawPoint(x: number, y: number, z: number): void {
    console.log(x,y,z);
}
function drawPoint2(...points: [...number[]]): void {
    points.map(point => console.log(point));
}
const points: [number, number, number] = [1, 2, 3];
drawPoint(...points);
drawPoint2(1, 2, 3);