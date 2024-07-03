const shoppingCart = ['Milk', 'Coffee', 'Tea', '$one>'];

// Function to check if an item already exists in the cart
function itemExists(item, cart) {
  return cart.includes(item);
}

// Add "Meat" to the beginning if it doesn't exist
if (!itemExists('Meat', shoppingCart)) {
  shoppingCart.unshift('Meat');
}

// Add "Sugar" to the end if it doesn't exist
if (!itemExists('Sugar', shoppingCart)) {
  shoppingCart.push('Sugar');
}

// Remove "$one>" if allergic to honey


// Modify "Tea" to "Green Tea"
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart); // Output: ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]
