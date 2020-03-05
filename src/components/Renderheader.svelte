<script>
  //import shoppingCartImage from '../assets/shopping-cart.svg';
  import {circleQuantity, rectangleQuantity, triangleQuantity} from './productstore.js';
  let circle_count;
  let rectangle_count;
  let triangle_count;
 const unsubscribeCircle = circleQuantity.subscribe(value => {
 	circle_count = value;
 });
 const unsubscribeRectangle = rectangleQuantity.subscribe(value => {
 	rectangle_count = value;
 });
 const unsubscribeTriangle = triangleQuantity.subscribe(value => {
 	triangle_count = value;
 });
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
          <span class="nav-company-name">Whee</span>
          <span class="nav-company-slogan"> - The most definitive shape store in the world</span>
        </div>
        <div class="nav-shopping-cart">
          <button on:click={renderShoppingCart} class="nav-shopping-cart-txt">Shopping Cart</button>
          <span class="nav-shopping-cart-img"> </span>
        </div>
      </div>
    </nav>
  </header>
