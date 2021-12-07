const array1 = [1,2,3,4];

const array2 = [];

for (const n of array1) {
    array2.push(n*2);
}

console.log(array2);

const array3 = array1.map(n => n*2);

console.log(array3);

const cities = [
    "Győr",
    "Mosonmagyaróvát",
    "Budapest"
];

const listHtml = cities.map(n => `<li>${n}</li>`);

console.log(listHtml);

const cityObject = cities.map(n => {
    const object = {name : n};
    return object;
});

console.log(cityObject);
