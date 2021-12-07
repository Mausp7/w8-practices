function displayer(something) {
    return something;
}

function add(number1, number2, myCallback) {
    let result = number1 + number2;
    console.log(myCallback(result));
}

add(5, 5, displayer);

function greet () {
    console.log("hello world!");
}

function sayName(name) {
    console.log("Hello " + name);
}

function callSayName(callback, name="John") {
    callback(name);
    

}

callSayName(sayName, "Aron");
callSayName(sayName);

setTimeout(greet, 2000);
sayName("David");