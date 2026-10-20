//// Global scope variable: burgers array
let burgers = ['Hamburger', 'Cheeseburger'];

// Global scope variable: featured drink
let featuredDrink = 'Strawberry Milkshake';


// Function with function-scoped variable
function addBurger() {

    // Function-scoped variable
    let newBurger = 'Flatburger';

    // Add new burger to burgers array
    burgers.push(newBurger);
}


// Block-scoped variable
if (true) {

    // Block-scoped variable
    let anotherNewBurger = 'Maple Bacon Burger';

    // Add new burger to burgers array
    burgers.push(anotherNewBurger);
}


// Function to change featured drink
function changeFeaturedDrink() {

    featuredDrink = 'The JavaShake';
} 