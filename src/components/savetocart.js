/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
import {navCartUpdateTxt} from './navcartupdatetxt.js'
import products from '../../products.js'
function saveToCart(input){
  //We initialize local variable orderCount to the value of 0
  let orderCount = 0;
  //We add an event listener to catch user interaction
  document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.button')) return;

	// Don't follow the link
	event.preventDefault();
  //Store the id of the button which user clicked into local variable input
  let input = event.target.id;
  // Handle the input with a switch-case.
  switch (input) {
    //In case user requested a Circle to be ordered
    case "Circle":
    //Add new order to sessionStorage with the key set to orderCount and the value set to Circle product as a string.
        sessionStorage.setItem(orderCount,JSON.stringify(products.products[0]));
        //Update the Shopping Cart count
        navCartUpdateTxt();
        //Raise the order count by one.
        orderCount++;
      break;
      //In case user requested a Rectangle to be ordered
    case "Rectangle":
    //Add new order to sessionStorage with the key set to orderCount and the value set to Rectangle product as a string.
      sessionStorage.setItem(orderCount,JSON.stringify(products.products[1]));
      //Update the Shopping Cart count
      navCartUpdateTxt();
      //Raise the order count by one.
      orderCount++;
    break;
    //Add new order to sessionStorage with the key set to orderCount and the value set to Triangle product as a string.
    case "Triangle":
      sessionStorage.setItem(orderCount,JSON.stringify(products.products[2]));
      //Update the Shopping Cart count
      navCartUpdateTxt();
      //Raise the order count by one.
    orderCount++;
    break;
    default:

    //console.log(event.target.id);
    break;

  }

}, false);
}
export { saveToCart }
