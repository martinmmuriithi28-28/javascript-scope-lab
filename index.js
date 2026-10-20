// Global scope variable
const burgers = ['Hamburger', 'Cheeseburger'];

// Global scope variable
let featuredDrink = 'Strawberry Milkshake';


// Function scope
function addBurger() {

    // Function-scoped variable
    const newBurger = 'Flatburger';

    // Add new burger to burgers array
    burgers.push(newBurger);
}


// Block scope
if(true) {

    // Block-scoped variable
    const anotherNewBurger = 'Maple Bacon Burger';

    // Add another burger to burgers array
    burgers.push(anotherNewBurger);
}


// Change featured drink function
function changeFeaturedDrink() {

    featuredDrink = 'The JavaShake';
}