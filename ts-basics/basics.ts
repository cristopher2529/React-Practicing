//Primitives: number, string, boolean
//More complex types: arrays, objects
//function types, parameters

//Primitives
let age: number = 12;
let username: string = 'Cristopher';
let isIntructor: boolean = true;

//More coplex
let hobbies: string[];
hobbies = ["sport","cooking"];

let anything: any;

let person: {
    name: string;
    age: number;
};

person = {
    name: "Cris",
    age:12
}

let people: {
    name: string;
    age: number;
}[];


//Type inference
//When you assign the value TypeScript try to inference the type by itself
let course = 'React - The complete guide';

let person2 = {
    name: 'Cris',
    lastName: 'Jim'
};


//Union type
let course2: string | number = 'Random text';
course2 = 12;


//Type Aliases
type Person = {
    name: string;
    age: number;
};
let person3: Person;

person3 = {
    name: "Cris",
    age:12
}

let people3: Person[];


//Fucntions & types
function add(a: number, b: number): number{
    return a+b;
}

function printOutput(value: any){
    console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray.split('');

const stringArray = insertAtBeginning(['a','b','c'], 'd');