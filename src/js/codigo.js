/* Advices
1. Naming functions and variable correctly
2. Use const variables everytime you can so you don't change their values and could be easer to track the code flow and values.
3. Always think on the edges scenarios that parameters could have
4. Desctruture parameters to be sure that there are gonna be raight and forget about validating if they exist
5. Set default value to parameters and when they are global set outside of the function or class
*/

const person = {
    name: "Cris",
    age: 25,
    address: {
        street: "1234",
        city: "Some City",
    },
    hobbies: ["run", "ciclying"],
};
if ("name" in person) {
    console.log("The property 'name' exist in person");
}

const custom = (strings, ...values) => {
    return values.reduce((finalString, value, index) => {
        return `${finalString} %c ${value} %c ${strings[index + 1]}`;
    }, strings[0]);
};
console.log(
    custom`The name of the person is ${person.name} and his age is ${person.age}`,
    "font-weight: bold"
);

//import when we want and not when load the document
// if(true){
//     import("./module.js").then(({default: printModule}) => {
//         printModule();
//     })
// }

//IMPORTANT
//when we use ?? only validate if is null or undefined but no if is 0
let taxes = 0;
taxes = taxes || "undefined";
console.log(taxes);
taxes = 0;
taxes = taxes ?? "undefined";
console.log(taxes);

const printPerson = (person) => {
    console.log(`
        Name: ${person?.name}, 
        Age: ${person?.ages}, 
        Hobbies: ${person?.[0]},
        Run: ${person.run?.()}`);
};
printPerson(person);

document.getElementById("root").innerHTML = "Test";
// alert("Hi");

//IMPORTANT
loop1: for (let i = 0; i < 4; i++) {
    loop2: for (let l = 0; l < 3; l++) {
        console.log("before");
        if (i === 1) continue loop1;
        console.log(`i: ${i}, j: ${l}`);
    }
}

name: {
    console.log("before");
    break name;
    console.log("after");
}

//to disable changing object properties
const person2 = Object.freeze({
    name: "Elias",
    age: 26,
    address: Object.freeze({
        street: "1234",
    }),
    hobbies: Object.freeze(["read", "dance"]),
});

console.log(person2);
person2.name = "Cris";
person2.address.street = "5678";
// person2.hobbies.push("run");
console.log(person2);

//IMPORTANT
const countryMap = new Map([]);
const usa = { name: "United State" };
countryMap.set(usa, "USD");
countryMap.set("Dominican Republic", "DOP");
console.log(countryMap);

//IMPORTANT
const uniqueArray = [1, 2, 3, 3, 4, 5];
const uniqueSet = new Set(uniqueArray);
console.log(uniqueSet);
uniqueSet.delete(4);
console.log(uniqueSet);

console.time("timer");
for (let index = 0; index < 10000000; index++) {}
console.timeEnd("timer");

const x = 2;
if (x !== 1) {
    console.error("X is not equal to 1");
    console.warn("X is no equal to 1");
}
console.assert(x === 1, "X is not equal to 1");

const people = [
    { name: "Cris", age: 25 },
    { name: "Elias", age: 26 },
    { name: "Pao", age: 23 },
];

//IMPORTAN
//To du a break on this point
// debugger;

console.table(people);

//IMPORTANT
//Object destructuring
const alphabet = ["a", "b", "c", "d", "e", "f"];
const [a, , c, ...rest] = alphabet;
console.log(a);
console.log(c);
console.log(rest);

const numbers = ["1", "2", "3", "4", "5", "6"];
const newArray = [...alphabet, ...numbers];
console.log(newArray);

function sumAndMultiply(a, b) {
    return [a + b, a * b, a / b];
}
const [sum, mul, division = "no division"] = sumAndMultiply(5, 5);
console.log(sum);
console.log(mul);
console.log(division);

const {
    name: firstName,
    age,
    favoriteFood = "Rice",
    address: { street, city },
} = person;
console.log(firstName, age, favoriteFood, street, city);

const person3 = {
    ...person,
    ...person2,
};
console.log(person3);

const printUser = ({ name, age, favoriteFood = "Watermelon" }) => {
    console.log(`Name is: ${name}, Age is: ${age}, Food is: ${favoriteFood}`);
};
printUser(person3);

//Array funtions
const items = [
    { name: "Nma0", price: 10 },
    { name: "Nma1", price: 11 },
    { name: "Nma2", price: 12 },
    { name: "Nma3", price: 13 },
    { name: "Nma4", price: 14 },
    { name: "Nma5", price: 15 },
    { name: "Nma6", price: 16 },
];

const filteredItems = items.filter((item) => item.price <= 13);
console.log(filteredItems);
const itemNames = items.map((item) => item.name);
console.log(itemNames);
const foundItem = items.find((item) => item.name == "Nma4");
console.log(foundItem);
items.forEach((item) => console.log(item.price));
const hasInexpensiveItem = items.some((item) => item.price < 12);
console.log(hasInexpensiveItem);
const everyItemExpensive = items.every((item) => item.price > 9);
console.log(everyItemExpensive);
const totalPrice = items.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);
const item = items[2];
const item2 = { ...items[2] };
const includeItem = items.includes(item);
const includeItem2 = items.includes(item2);
console.log(includeItem, includeItem2);

//Encapsulacion
function CrearUsuario(n) {
    let nombre = n;

    return {
        setNombre: function (newN) {
            nombre = newN;
        },
        getNombre: () => console.log(nombre),
    };
}
const usuario = CrearUsuario("Cris");
usuario.getNombre();
usuario.setNombre("Elias");
usuario.getNombre();

const outerFunction = (outerVariable) => {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
};
const newFunction = outerFunction("outside");
newFunction("inside");

//Set y GET
const persona = {
    nombre: "",
    edad: 0,
    get nombre() {
        return this.nombre_value.toUpperCase();
    },
    set nombre(newNombre) {
        this.nombre_value = newNombre;
    },
};
const cris = persona;
cris.nombre = "Cristopher";
console.log(cris.nombre);

console.log("%cPromises", "font-weight:bold; color:#ccc; font-size:2rem;");
{
    //Promises
    let promise = new Promise((resolve, reject) => {
        let a = 1 + 2;
        if (a === 2) resolve("success");
        else reject("Failed");
    });

    promise
        .then((message) => {
            console.log(`This is in the Then: ${message}`);
        })
        .catch((error) => {
            console.error(`This is in the Catch: ${error}`);
        });

    //Promise all
    const recordVideo1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Video 1 Recorded");
        }, 500);
    });
    const recordVideo2 = new Promise((resolve, reject) =>
        resolve("Video 2 Recorded")
    );
    const recordVideo3 = new Promise((resolve, reject) =>
        resolve("Video 3 Recorded")
    );

    Promise.all([recordVideo1, recordVideo2, recordVideo3]).then((messages) =>
        console.log(messages)
    );
    //Promise race -> Return the message of the fisrt promise that ends
    Promise.race([recordVideo1, recordVideo2, recordVideo3]).then((message) =>
        console.log(message)
    );

    //Async Function
    const asyncFun = async () => {
        console.log(await recordVideo1);
        console.log(await recordVideo2);
        console.log(await recordVideo3);
    };
    asyncFun();

    const datos = [
        { id: 1, product: "Laptop", price: 10 },
        { id: 2, product: "PC", price: 15 },
    ];
    const getDatos = () => {
        return new Promise((resolve, reject) => {
            if (datos.length === 0) reject("No existen datos");

            setTimeout(() => resolve(datos), 1500);
        });
    };
    getDatos().then((datos) => console.log(datos));
    const getData = async () => {
        console.log(await getDatos());
    };
    getData();
}
