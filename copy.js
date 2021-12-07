const person = {
    firstName : "Armandina",
    lastName: "Atom"
}

let p1 = {
    ...person,
}

let p2 = Object.assign = ({}, person); //shallow copy

let p3 = JSON.parse(JSON.stringify(person)); //deep copy

console.log(p1, p2, p3);

let copiedPerson = person;
copiedPerson.firstName = "Richárd";
console.log(person);