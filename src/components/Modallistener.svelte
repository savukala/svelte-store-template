/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
import {navCartUpdateTxt} from './navcartupdatetxt.js'
function modalListener () {
  //Add event listener to capture user interaction on the Shopping Cart Modal
  document.addEventListener('click', function (event) {
    // Don't follow the link
    event.preventDefault();
    //We store the className of the element which was clicked on a local variable.
    let input = event.target.className;
    // Handle the input as per case.
    //If the click came from the close button,
    if (input == "close") {
      //Hide the Shopping Cart Modal
      document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
      //Clear the contents of the modal-data container
      document.getElementsByClassName("modal-data")[0].innerHTML = "";

    }
    //If the click came from anywhere outside the modal-content,
    else if (input == "shopping-cart-modal") {
      //Hide the Shopping Cart Modal
      document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
      //Clear contents of the modal-data container
      document.getElementsByClassName("modal-data")[0].innerHTML = "";
    }
    //If the input came from remove item button,
    else if (input == "remove-button") {
      //Store the ID of the input button on local variable input
      let input = event.target.id;
      //Remove the item from the sessionStorage Shopping Cart with the input value
      sessionStorage.removeItem(input);
      //Get the element which from user clicked
      let removeNode = document.getElementById(event.target.id);
      //And remove it from the Shopping Cart Modal modal-data container.
      removeNode.remove();
      //If the storage is now empty, hide the Shopping Cart Modal
      if (sessionStorage.length == 0) {
        document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";

      }
      //Re-set the nav-shopping-cart-txt value
      navCartUpdateTxt();
    }
    else if (input == "remove-all-products") {
      //Clear the whole contents of sessionStorage
      sessionStorage.clear();
      //Hide the Shopping Cart Modal
      document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
      //Clear contents of the modal-data container
      document.getElementsByClassName("modal-data")[0].innerHTML = "";
      //Re-set the nav-shopping-cart-txt value
      navCartUpdateTxt();
    }

  }, false);

}
export {modalListener}
