<script>
import {navCartUpdateTxt} from './navcartupdatetxt.js';
import Rendershoppingcart from './Rendershoppingcart.svelte';
function clearModal(){
  //sessionStorage.clear();
  //Hide the Shopping Cart Modal
  document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
  //Clear contents of the modal-data container
  document.getElementsByClassName("modal-data")[0].innerHTML = "";
  //Re-set the nav-shopping-cart-txt value
  navCartUpdateTxt();
}
</script>

<div id="shopping-cart-modal-id" class="shopping-cart-modal">
  <div class="modal-content">
    <span class="close"> &times; </span>
    <div class="modal-data">
      <Rendershoppingcart />
    </div>
    <button on:click={clearModal()} class="remove-all-products">Remove all items</button>
  </div>
</div>
