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

function howManyFood(numOfPeople) {
    const BEERPP = 2
    const PRICE = 350
    return BEERPP * PRICE * numOfPeople
}


function howManyFood(adult, child) {
    const PIZZA_ADULT = 3
    const PIZZA_CHILD = 1
    return PIZZA_ADULT * adult + PIZZA_CHILD * child
}


// addition

function add10(x) {
    return x + 10
}

function displayAdded1() {
    let a = 1;
    while (a < 6) {
        console.log(a++)
    }
}

displayAdded1()