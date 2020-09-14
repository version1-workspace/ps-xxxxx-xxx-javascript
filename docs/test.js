// variable

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

console.log(divide5orNot.name)
console.log(divide5orNot(10))
console.log(divide5orNot(8))
console.log(divide5orNot(0))
console.log(divide5orNot(null))
console.log(divide5orNot(undefined))
console.log(divide5orNot("10"))
console.log(divide5orNot("hello"))
