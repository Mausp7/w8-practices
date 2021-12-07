const person = {
    firstName : "Armandina",
    lastName: "Atom"
}

let p1 = {
    ...person,
}

let p2 = Object.assign = ({}, person);

let p3 = JSON.parse(JSON.stringify(person));

console.log(p1, p2, p3);

let copiedPerson = person;
copiedPerson.firstName = "Richárd";
console.log(person);