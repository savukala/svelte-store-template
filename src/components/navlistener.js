/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
import {renderShoppingCart} from './rendershoppingcart.js'

function navListener () {
  //add click event listener to div with the class navShoppingCart

  document.addEventListener('click', function (event) {
    // Don't follow the link
    event.preventDefault();
    //Get the className of the element which fired the event and store it in a local variable input.
    let input = event.target.className;
    // Handle the input.
    if (input == "nav-shopping-cart" || input == "nav-shopping-cart-txt") {
      //If the sessionStorage is empty, return from execution
      if (sessionStorage.length == 0) return;
      //We store contents of sessionStorage on local variable content
      let content = sessionStorage;
      //Call renderShoppingCart to propagate data into the Shopping Cart Modal.
      //Send the local variable content as an argument to the function.
      renderShoppingCart(content);
      //Change the display of the Shopping Cart Modal to block instead of none.
      //This will bring the Shopping Cart Modal to the view.
      document.getElementsByClassName("shopping-cart-modal")[0].style.display = "block";

    }

  }, false);

}
export {navListener}
