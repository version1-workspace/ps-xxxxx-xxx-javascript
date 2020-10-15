// variable
function everyoneIsSteve(familyName) {
    let wholeName = "Steve "
    wholeName += familyName
    return wholeName
}

// console.log(everyoneIsSteve("Jobs"))
// console.log(everyoneIsSteve(1))
// console.log(everyoneIsSteve(null))
// console.log(everyoneIsSteve(undefined))


function ifInterestedOrNot(answer) {
    let result = answer
    return result
}

function serveDrink(order) {
    let drink = "water"
    if (order != null) {
        drink = order
    }
    return drink
}

// constant

function happyBirthdayTo(name) {
    const MESSAGE = "Happy Birthday to "
    return MESSAGE + name
}

// console.log(happyBirthdayTo("Mike"))
// console.log(happyBirthdayTo(1))
// console.log(happyBirthdayTo(""))
// console.log(happyBirthdayTo(null))


function howManyFood1(numOfPeople) {
    const BEERPP = 2;
    const PRICE = 350;
    return BEERPP * PRICE * numOfPeople
}
// console.log(howManyFood1.name)
// console.log(howManyFood1(3))
// console.log(howManyFood1(0))
// console.log(howManyFood1(null))
// console.log(howManyFood1(undefined))
// console.log(howManyFood1("10"))
// console.log(howManyFood1("hello"))

function howManyFood2(adult, child) {
    const PIZZA_ADULT = 3
    const PIZZA_CHILD = 1
    return PIZZA_ADULT * adult + PIZZA_CHILD * child
}

// console.log(howManyFood2.name)
// console.log(howManyFood2(3 , 5))
// console.log(howManyFood2(0, 0))
// console.log(howManyFood2(null, null))
// console.log(howManyFood2(undefined, undefined))
// console.log(howManyFood2("10", "5"))
// console.log(howManyFood2("hello", "world"))

// scope

const ten = 10;
function multiple3(n) {
    let three = 3
    return n * three + 10
}

// console.log(multiple3("3"))

function extra3(n) {
    let three = 3;
    return multiple3(n) * three
}

// console.log(extra3("5"))


// addition

function add10(x) {
    return x + 10
}

// console.log(add10.name)
// console.log(add10(3))
// console.log(add10(0))
// console.log(add10(-5))
// console.log(add10(null))
// console.log(add10(undefined))
// console.log(add10("10"))
// console.log(add10("hello"))


function displayAdded1() {
    let a = 1;
    while (a < 6) {
        console.log(a++)
    }
}

// subtraction


function subt10(x) {
    return x - 10
}

// console.log(subt10.name)
// console.log(subt10(3))
// console.log(subt10(10))
// console.log(subt10(-5))
// console.log(subt10(null))
// console.log(subt10(undefined))
// console.log(subt10("10"))
// console.log(subt10("hello"))


function displayAdded1() {
    let a = 10;
    while (a > 4) {
        console.log(--a)
    }
}

// displayAdded1()

function divide3(x) {
    return x / 3 + 10
}

// console.log(divide3.name)
// console.log(divide3(3))
// console.log(divide3(10))
// console.log(divide3(-5))
// console.log(divide3(null))
// console.log(divide3(undefined))
// console.log(divide3("10"))
// console.log(divide3("hello"))

function restOfx(x) {
    let answer = x / 7
    let rest = x % 7
    return answer + "余り" + rest
}

// console.log(restOfx.name)
// console.log(restOfx(21))
// console.log(restOfx(3))
// console.log(restOfx(0))
// console.log(restOfx(null))
// console.log(restOfx(undefined))
// console.log(restOfx("10"))
// console.log(restOfx("hello"))

function multiple10(x) {
    return (x-5) * 10
}

// console.log(multiple10.name)
// console.log(multiple10(10))
// console.log(multiple10(5))
// console.log(multiple10(0))
// console.log(multiple10(null))
// console.log(multiple10(undefined))
// console.log(multiple10("10"))
// console.log(multiple10("hello"))

function divide5orNot(x) {
    if (x % 5 == 0) {
        return x ** 2
    } else {
        return x % 5
    }
}

// console.log(divide5orNot.name)
// console.log(divide5orNot(10))
// console.log(divide5orNot(8))
// console.log(divide5orNot(0))
// console.log(divide5orNot(null))
// console.log(divide5orNot(undefined))
// console.log(divide5orNot("10"))
// console.log(divide5orNot("hello"))



function tenTothirty(x) {
    return x >= 10 && x < 30
}

// console.log(tenTothirty.name)
// console.log(tenTothirty(3))
// console.log(tenTothirty(10))
// console.log(tenTothirty(30))
// console.log(tenTothirty(null))
// console.log(tenTothirty(undefined))
// console.log(tenTothirty("10"))
// console.log(tenTothirty("hello"))


function isStringOrNum(x) {
    return typeof x == "string" || typeof x == "number"
}

// console.log(isStringOrNum.name)
// console.log(isStringOrNum(3))
// console.log(isStringOrNum("10"))
// console.log(isStringOrNum(null))
// console.log(isStringOrNum(undefined))
// console.log(isStringOrNum("hello"))

function moreEqualThan10(x) {
    if(x >= 10) {
        return true
    } else {
        return false
    }
}

// console.log(moreEqualThan10.name)
// console.log(moreEqualThan10(3))
// console.log(moreEqualThan10(15))
// console.log(moreEqualThan10(10))
// console.log(moreEqualThan10(true))
// console.log(moreEqualThan10(undefined))
// console.log(moreEqualThan10("10"))
// console.log(moreEqualThan10("hello"))



function isString(x) {
    if (typeof x == "string"){
        return true
    } 
        return false
}

// console.log(isString.name)
// console.log(isString("hello"))
// console.log(isString(15))
// console.log(isString(true))
// console.log(isString(undefined))
// console.log(isString("10"))


function strictMoreEqualThan10(x) {
    if (typeof x != "number"){
        return false
    } else  if(x > 10) {
        return true
    } else {
        return false
    }
}

// console.log(strictMoreEqualThan10.name)
// console.log(strictMoreEqualThan10(3))
// console.log(strictMoreEqualThan10(15))
// console.log(strictMoreEqualThan10(10))
// console.log(strictMoreEqualThan10(true))
// console.log(strictMoreEqualThan10(undefined))
// console.log(strictMoreEqualThan10("11"))
// console.log(strictMoreEqualThan10("hello"))


function check10(x) {
    if (typeof x != "number") {
        return "xは数字ではありません"
    }
    if (x < 10){
        return "xは10未満です"
    } else  if(x > 11) {
        return "xは11以上です"
    } else if (x == 10){
        return "xは10です"
    }
}

// console.log(check10.name)
// console.log(check10(3))
// console.log(check10(15))
// console.log(check10(10))
// console.log(check10(true))
// console.log(check10(undefined))
// console.log(check10("11"))
// console.log(check10("hello"))


function howManyTrue(x) {
    let count = 0
    if (x < 10){
        console.log("x < 10")
        count += 1
    }
    if(x * 3 < 15) {
        console.log("x * 3 < 15")
        count += 1
    }
    if(x){
        console.log("x == true")
        count += 1
    }
    if(typeof x == "string") {
        console.log("typeof x")
        count += 1
    }
    if( x == 5) {
        console.log("x == 5")
        count += 1
    }
    return count
}

// console.log(howManyTrue.name)
// console.log(howManyTrue(3))
// console.log(howManyTrue(15))
// console.log(howManyTrue(5))
console.log(howManyTrue(true))  //　これは一体・・・・
// console.log(howManyTrue(undefined))
// console.log(howManyTrue("11"))
// console.log(howManyTrue("hello"))

function switchMoreEqualThan10(x) {
    switch(x >= 10) {
        case true:
            return true
        default:
            return false
    }
}

// console.log(switchMoreEqualThan10.name)
// console.log(switchMoreEqualThan10(3))
// console.log(switchMoreEqualThan10(15))
// console.log(switchMoreEqualThan10(null))
// console.log(switchMoreEqualThan10(true)) 
// console.log(switchMoreEqualThan10(undefined))
// console.log(switchMoreEqualThan10("15"))
// console.log(switchMoreEqualThan10("hello"))


function switchIsStringOrNum(x) {
    switch(typeof x) {
        case "string":
            return true
        case "number":
            return true
        default:
            return false
    }
}

// console.log(switchIsStringOrNum.name)
// console.log(switchIsStringOrNum(3))
// console.log(switchIsStringOrNum(15))
// console.log(switchIsStringOrNum(null))
// console.log(switchIsStringOrNum(true))  
// console.log(switchIsStringOrNum(undefined))
// console.log(switchIsStringOrNum("15"))
// console.log(switchIsStringOrNum("hello"))


function isWednesday(x) {
    switch(x) {
        case "水曜日":
        case "Wednesday":
        case "wednesday":
            console.log("correct")
            break;
        default:
            console.log("wrong")
    }
}

// console.log(isWednesday.name)
// isWednesday("水曜日")
// isWednesday("Wednesday")
// isWednesday("wednesday")
// isWednesday(true)
// isWednesday(undefined)
// isWednesday("15")
// isWednesday(null)



function subtract1by1() {
    for(let i = 10; i > 0; i--) {
        console.log(i)
    }
}

// subtract1by1()

function subtractBy2(x) {
    for(let i = x; 0 <= i; i-=2) {
        console.log(i)
    }
}

// subtractBy2(10)
// subtractBy2(0)
// subtractBy2(-1)
// subtractBy2(null)


function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log("Buzz")
        } else if ( i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz()

function while1() {
    let i = 1;
    while( i < 6){
        console.log(i)
        i++
    }
}

// while1()

function whileSubtract1by1() {
    let i = 10
    while (i > 0) {
        console.log(i)
        i--
    }
}

// whileSubtract1by1()

function whileSubtractBy2(x) {
    let i = x
    while (i >= 0) {
        console.log(i)
        i -= 2
    }
}

// whileSubtractBy2(10)
// whileSubtractBy2(0)
// whileSubtractBy2(-2)
// whileSubtractBy2(null)

function whileFizzBuzz() {
    let i = 1
    while (i <= 100) {
        if (i % 3 == 0 && i % 5 == 0) {
        console.log("Buzz")
        } else if (i % 3 == 0 ){
            console.log("Fizz")
        } else {
            console.log(i)
        }
        i++
    }
}

// whileFizzBuzz()

function whileDice10() {
    let dice;
    do {
        dice = Math.floor(Math.random() * 10) + 1
        console.log(dice)
    }while(dice != 5)
}

// whileDice10()

const A = 1;
const B = 2;

function C(x) {
    console.log("The sum of A and B is " + (A + B))
    console.log("The sum of A and x is " + (A + x))
    console.log("The sum of x and 5 is " + (x + 5))
}

// C(5)


function consoleHowManyTrue(x) {
    let count = 0
    if (x < 10){
        console.log("x < 10")
        count += 1
    }
    if(x){
        console.log("x == true")
        count += 1
    }
    if(typeof x == "string") {
        console.log("typeof x == string")
        count += 1
    }
    return count
}

// consoleHowManyTrue(5)
// consoleHowManyTrue("hello")
// consoleHowManyTrue(undefined)
// consoleHowManyTrue(null)


function checkComparison(x) {
    let w = 5
    let y = x > w && x < 10
    let z = x < 0 || x > 10
    console.log(y)
    console.log(z)
}

// checkComparison(5)
// checkComparison(9)
// checkComparison(20)
// checkComparison(null)
// checkComparison(undefined)

function additionTwo(x, y) {
    console.log(x + y)
}

// additionTwo(1, 2)
// additionTwo("Hello", "World")
// additionTwo(1, "World")
// additionTwo("1", "World")
// additionTwo("1", "2")
// additionTwo("1")


function added10times(x, y) {
    let sum;
    for (let i = 0; i < 10; i++) {
        sum += x
    }
    for (let i = 0; i < 10; i++) {
        sum -= y
    }
    return sum
}

// console.log(added10times(5, 10))
// console.log(added10times(10, 10))
// console.log(added10times("Hello", "World"))
// console.log(added10times(null, null))

function myFavoriteFoods(food, snack, drink) {
    
    function message(type, food) {
        if (food) {
            console.log("My favorite "+ type + " is "+ food + ".")
        } else {
           console.log("My favorite "+ type + " is nothing.")
        }
    }

    if ((food == null || food == "") && (snack == null || snack == "") && (drink == null || drink == "")){
        console.log("I don't like any food!")
    } else {
       message("food", food)
        message("snack", snack)
        message("drink", drink)
    }
}


// myFavoriteFoods("Pizza", "Chips", "Coke")
// myFavoriteFoods("Pizza", "", "Coke")
// myFavoriteFoods("Pizza", "", null)
// myFavoriteFoods(null, null, null)
// myFavoriteFoods("", "", "")


const additionTwoArrow = (x, y) => {
    console.log(x + y)
}

// additionTwoArrow(1, 2)
// additionTwoArrow("Hello", "World")
// additionTwoArrow(1, "World")
// additionTwoArrow("1", "World")
// additionTwoArrow("1", "2")
// additionTwoArrow("1")


const added10timesArrow = (x, y) => {
    let sum;
    for (let i = 0; i < 10; i++) {
        sum += x
    }
    for (let i = 0; i < 10; i++) {
        sum -= y
    }
    return sum
}

// console.log(added10timesArrow(5, 10))
// console.log(added10timesArrow(10, 10))
// console.log(added10timesArrow("Hello", "World"))
// console.log(added10timesArrow(null, null))

const myFavoriteFoodsArrow = (food, snack, drink) => {
    
    function message(type, food) {
        if (food) {
            console.log("My favorite "+ type + " is "+ food + ".")
        } else {
           console.log("My favorite "+ type + " is nothing.")
        }
    }

    if ((food == null || food == "") && (snack == null || snack == "") && (drink == null || drink == "")){
        console.log("I don't like any food!")
    } else {
       message("food", food)
        message("snack", snack)
        message("drink", drink)
    }
}


// myFavoriteFoodsArrow("Pizza", "Chips", "Coke")
// myFavoriteFoodsArrow("Pizza", "", "Coke")
// myFavoriteFoodsArrow("Pizza", "", null)
// myFavoriteFoodsArrow(null, null, null)
// myFavoriteFoodsArrow("", "", "")


// (function() { console.log(`hello`)})()

let Greeting = function() {
    // ここを実装してください
    return {
        morning: function(name) {
            console.log("Good morning, " + name)
        },
        daytime: function(name) {
            console.log("Hello, " + name)
        },
        evening: function(name) {
            console.log("Good evening, " + name)
        },
        night: function(name) {
            console.log("Good night, " + name)
        }
    }
};

const greeting = Greeting();
greeting.morning("Mike") // => "Good morning, Mike!" が表示される
greeting.daytime("Mike") // => "Hello, Mike!" が表示される
greeting.evening("Mike") // => "Good evening, Mike!" が表示される
greeting.night("Mike") // => "Good night, Mike!" が表示される


// hello

const add2 = (function (x, y) {
    console.log(x + y)
}(1, 10 ));

// add2


let countEgg = function() {
    let egg = 0;
    function addEgg() {
        egg++
    }
    return {
        check: function() {
            console.log(egg)
        },
        add: function() {
            addEgg();
        }
    }
}

abc = countEgg()

abc.add()
abc.check()

// countEgg.check()
// countEgg.add()
// countEgg.check()
// console.log(countEgg.egg)


let hoge = "Hello world!!!"
// console.log(hoge[4])
// console.log(hoge.slice(0, 5))
// console.log(hoge.slice(6, hoge.length - 1))


let fruit = "banana"

// 回答例１
// let temp = ""
// for (let i = 0; i < hoge.length; i++){
//     if (fruit[i] != "a" && fruit[i]){
//         temp += fruit[i]
//     } else {
      
//     }
// }
// console.log(temp)

fruit = "banana"

// 回答例２
// let replace = /a/g;
// console.log(fruit.replace(replace, ''))


// let word = "apple,banana,pineapple"

// console.log(word.replace(/,/g, '\n'))


// let array1to5 = [1, 2, 3, 4, 5]
// console.log(array1to5[0])
// console.log(array1to5.slice(0, 3))
// console.log(array1to5.slice(1, array1to5.length))


// array1to5.push(6)   // [1, 2, 3, 4, 5, 6]
// array1to5.unshift(0)  // [0, 1, 2, 3, 4, 5, 6]

// console.log(array1to5)


// array1to5.pop()   // [0, 1, 2, 3, 4, 5]
// console.log(array1to5)

// array1to5.shift()  // [1, 2, 3, 4, 5]
// console.log(array1to5)

// array1to5.splice(2, 0, "insetad")
// console.log(array1to5)

// array1to5.splice(2, 1)
// console.log(array1to5)

// let randomNum = [1, 5, 3, 6, 7, 3, 4, 2, 9, 4, 6, 4, 3]
// randomNum = randomNum.filter(item => item != 3)
// console.log(randomNum)


// let fruits = ["banana", "apple", "orange"]

// console.log(fruits.join(””))

let obj1 = {'/posts': 1, '/users/posts/': 2, '/users/:id/posts': 3}  // 必ずシングルクオーテーション


// console.log(obj1["/posts"])

let objectSample = {
    id : 001,
    name : 'Alice',
    gender: 'female',
    'the hobby': 'reading',
    greeting: function() {
        console.log('Hello, ' + this.name)
    }
}

// console.log(objectSample['name'])
// console.log(objectSample['the hobby'])
// objectSample.greeting()
// console.log(objectSample.name)

// objectSample['age'] = 24
// objectSample['name'] = 'Jenny'

// delete objectSample['age']

// console.log(Object.keys(objectSample))
// console.log(Object.values(objectSample))
// console.log(Object.entries(objectSample))


function recursiveAddition(n) {
    if (n <= 1) {
        return n;
    }
    return n + recursiveAddition(n-1)
}

console.log(recursiveAddition(5))

let lettersList = ["a", "u", "t", "j", "i", "o"]
let numList = [1, 5, 2, 7, 4, 8, 10, 3]

lettersList.sort()
numList.sort(function(a, b){
    return a - b;
})

// console.log(numList)
// console.log(lettersList)

// lettersList.sort().reverse()
// numList.sort(function(a, b){
//     return b - a;
// })

// console.log(numList)
// console.log(lettersList)

let productsList = {
    pencil: 'Pencil', 
    notebook: 'Notebook',
    pen: 'Pen', 
    staple: 'Staple'
}



let keys = Object.keys(productsList);
keys.sort()
for (key of keys) {
    console.log(productsList[key])
}