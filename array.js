const arr1 = ["alma", "körte", "banán"];
const arr2 = ["barack", "szilva", "szőlő"];

function addValueToEndOfArray(arr, val) {
    arr.push(val);
    
    return arr;
}

// console.log(
//     addValueToEndOfArray(arr2, "dió")
// ); 

// console.log(arr2);


function addValueToEndOfNewArray(arr, val) {
    //arr = [...arr];
    //arr.push(val);
    return [...arr, val];
}

// console.log(
//     addValueToEndOfNewArray(arr2, "dió")
// ); 

// console.log(arr2);

function addNewArray(arr1, arr2) {
    //return [...arr1, ...arr2]
    return arr1.concat(arr2)
    
}

// console.log(addNewArray(arr1, arr2));
// console.log(arr1);

const arr3 = [
    {
        name: "Garfield",
        type: "cat",
    },
    {
        name: "Ubul",
        type: "dog",
    },
]

function filterTheCat(creatures) {
    // let returnArr = creatures.filter((c) => {if (c.type === "cat") {return c};});
    // return returnArr;

    // const result = creatures.map(creature => {
    //     if (creature.type === "cat") {
    //         return {...creature, note : "This is an amazing cat!"};
    //     }
    // })
    // return result.filter(c=>c);

    return creatures.map(creature => creature.type === "cat"? {...creature, note: "This is an amazing cat!"}:undefined).filter(c=>c);
}

console.log(filterTheCat(arr3));
console.log(arr3);
/* let a = 1;
let b = a;

a = 2;

console.log("a: ", a, " b: ", b);

let c = {
    key: 1,
    key2: {
        subkey: 2,
    } 
};
let e = {key:1};
let d = c;
//c.key=2;
//d.key=3;


//console.log("c: ", c, " d: ", d);

console.log ({} === {});
console.log (e === c);

//let f = {...c};  //shallow copy
//let f = Object.assign({}, c);   //shallow copy
let f = JSON.parse(JSON.stringify(c)) //deep copy

c.key = 2;
c.key2.subkey = 5;
f.key = 3;

console.log("c: ", c, " f: ", f); */