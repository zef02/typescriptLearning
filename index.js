var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Hawood'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var book = ['business', 1500, false];
book.push(21);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "Short";
    CoffeeSize["TALL"] = "Tall";
    CoffeeSize["GRANDE"] = "Grande";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
console.log(coffee.size);
var anytime = true;
var unionType = 10;
// unionType.toUpperCase();
unionType = 'Hello';
unionType.toUpperCase();
// Literal型
var apple = 'apple';
// union + Literal
var clothSize = 'medium';
var clothSize2 = 'medium';
var cloth = {
    color: 'white',
    size: clothSize
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
var tmp;
// 関数型の例
var anotherAdd = add;
var doubleNumber = function (number) { return number * 2; };
console.log(doubleNumber(2));
