<script>
import {navCartUpdateTxt} from './navcartupdatetxt.js';
import Rendershoppingcart from './Rendershoppingcart.svelte';
import {circleQuantity, rectangleQuantity, triangleQuantity} from './productstore.js';

function closeModal(){
  //Hide the Shopping Cart Modal
  document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
}
function clearModal(){
  //sessionStorage.clear();
  //Hide the Shopping Cart Modal
  document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";

  //Re-set the nav-shopping-cart-txt value
  circleQuantity.update(n => n-n);
  rectangleQuantity.update(n => n-n);
  triangleQuantity.update(n => n-n);
  navCartUpdateTxt();
}
</script>

<style>
/* The Modal (background) */
.shopping-cart-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #555555;
  float: right;
  font-size: 2rem;
  font-weight: bold;
  background-color: none;
  margin-left: 1rem;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.button:hover, .button:focus {
	cursor: pointer;
}
.remove-all-products {
  background-color: #555555; /* Dark */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin-left: 2rem;
}
.remove-all-products:hover, .remove-all-products:focus {
  cursor: pointer;
}
</style>

<div id="shopping-cart-modal-id" class="shopping-cart-modal">
  <div class="modal-content"> <span class="modal-content-txt">Shopping Cart Contents</span>
    <button class="close" on:click={closeModal}> &times; </button>
    <div class="modal-data">
      <Rendershoppingcart />
    </div>
    <button on:click={clearModal} class="remove-all-products">Remove all items</button>
  </div>
</div>
