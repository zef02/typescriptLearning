let hasValue = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

let single: string = 'hello';
let double: string = "hello";
let back: string = 'hello';

const person= {
    name: {
            first: 'Jack',
            last: 'Hawood'
    },
    age: 21
}
const fruits = ['Apple', 'Banana', 'Grape', 1]

const book: [string, number, boolean] = ['business', 1500, false];
book.push(21)

enum CoffeeSize {
    SHORT = 'Short',
    TALL = 'Tall',
    GRANDE = 'Grande'
}
const coffee ={
    hot: true,
    size: CoffeeSize.SHORT

}
console.log(coffee.size)


let anytime:any = true;

let unionType: string | number = 10;
// unionType.toUpperCase();

unionType = 'Hello';
unionType.toUpperCase();

// Literal型
const apple: 'apple' = 'apple';

type ClothSize = 'small' | 'medium' | 'Large'
// union + Literal
let clothSize: 'small' | 'medium' | 'Large' = 'medium'; 
let clothSize2: ClothSize = 'medium'; 

const cloth = {
    color: 'white',
    size: clothSize
}


function add(num1:number , num2:number): number{
   return num1 + num2; 
}


function sayHello(): void{
    console.log('Hello');
}

console.log(sayHello());
let tmp: undefined;

// 関数型の例
const anotherAdd = add;

const doubleNumber = number => {return number * 2}
console.log(doubleNumber(2));

function doubleAndHandle(num: number, cb:(num: number) => number): void {
    const doubleNum = cb(num *2);
    console.log(doubleNum);
}
doubleAndHandle(21,doubleNum => {
    return doubleNum;
});
