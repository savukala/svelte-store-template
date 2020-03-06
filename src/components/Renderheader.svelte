<script>
  //import shoppingCartImage from '../assets/shopping-cart.svg';
  //import the item ordered values from productstore
  import {circleQuantity, rectangleQuantity, triangleQuantity} from './productstore.js';
  //init local variables to hold the true ordered quantity of items.
  let circle_count;
  let rectangle_count;
  let triangle_count;
  //subscribe to any changes on the ordered items values
 const unsubscribeCircle = circleQuantity.subscribe(value => {
 	circle_count = value;
 });
 const unsubscribeRectangle = rectangleQuantity.subscribe(value => {
 	rectangle_count = value;
 });
 const unsubscribeTriangle = triangleQuantity.subscribe(value => {
 	triangle_count = value;
 });
 //Render the shopping cart if and only if anything has been ordered
function renderShoppingCart(){
  if (circle_count > 0 || rectangle_count > 0 || triangle_count >0 ) {
  document.getElementsByClassName("shopping-cart-modal")[0].style.display = "block";
  }
}

</script>
<style>
.flex-container {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid;
  margin-bottom: 2rem;
}
.nav-shopping-cart-txt {
  background-color: green; /* Dark */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
}

</style>
  <header>
    <nav>
      <div class="flex-container">
        <div class="nav-logo">
          <span class="nav-company-name">Savukala Solutions</span>
          <span class="nav-company-slogan"> Cryptopayment-front </span>
        </div>
        <div class="nav-shopping-cart">
          <button on:click={renderShoppingCart} class="nav-shopping-cart-txt">Shopping Cart</button>
          <span class="nav-shopping-cart-img"> </span>
        </div>
      </div>
    </nav>
  </header>
