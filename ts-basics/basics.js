//Primitives: number, string, boolean
//More complex types: arrays, objects
//function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Primitives
var age = 12;
var username = 'Cristopher';
var isIntructor = true;
//More coplex
var hobbies;
hobbies = ["sport", "cooking"];
var anything;
var person;
person = {
    name: "Cris",
    age: 12
};
var people;
//Type inference
//When you assign the value TypeScript try to inference the type by itself
var course = 'React - The complete guide';
var person2 = {
    name: 'Cris',
    lastName: 'Jim'
};
//Union type
var course2 = 'Random text';
course2 = 12;
var person3;
person3 = {
    name: "Cris",
    age: 12
};
var people3;
//Fucntions & types
function add(a, b) {
    return a + b;
}
function printOutpu(value) {
    console.log(value);
}
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
