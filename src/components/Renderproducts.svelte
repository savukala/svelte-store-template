<script>
//import the set of products to be displayed on the frontpage.
import products from '../../products.js';
//import the true ordered quantities for each product
import {circleQuantity, rectangleQuantity, triangleQuantity} from './productstore.js';
//import function navCartUpdateTxt to update the changes
import {navCartUpdateTxt} from './navcartupdatetxt.js';
//throw img into a local variable
let src =  'item1.JPG'
//init local variables to hold the true ordered products count
let circle_count;
let rectangle_count;
let triangle_count;
//subscribe to any changes on the ordered products quantity
const unsubscribeCircle = circleQuantity.subscribe(value => {
 circle_count = value;
});
const unsubscribeRectangle = rectangleQuantity.subscribe(value => {
 rectangle_count = value;
});
const unsubscribeTriangle = triangleQuantity.subscribe(value => {
 triangle_count = value;
});
//Handle button clicks, increase the respective product quantity value.
function addQuantityCircle(){
        circleQuantity.update(n => n+1);
        navCartUpdateTxt();
}
function addQuantityRectangle(){
      rectangleQuantity.update(n => n+1);
      navCartUpdateTxt();
}
function addQuantityTriangle(){
       triangleQuantity.update(n => n+1);
       navCartUpdateTxt();
}

</script>
<style>
.render-products {
  padding: 10px;
}

.flex-container {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid;
  margin-bottom: 3rem;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
img {
  margin-right: 2rem;
}
.button {
  background-color: white; /* Dark */
  border: 1px solid black;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin-left: 2rem;
}
.button:hover, .button:focus {
	cursor: pointer;
}
</style>

<div class="flex-container">
  <ul>
  <!-- We iterate over the products array and, -->
  {#each products.products as product}
  <!-- We render the element based on the type of product -->
  {#if product.name === "Circle"}
    <li class="render-products"><img {src} alt={product.name} height="42" width="42"> {product.name} - {product.description} - {product.price}€ <button on:click={addQuantityCircle} class="button" id={product.name}> Add to cart </button></li>
    {:else if product.name === "Rectangle"}
    <li class="render-products"><img src="item2.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={addQuantityRectangle} class="button" id={product.name}> Add to cart</button></li>
    {:else if product.name === "Triangle"}
    <li class="render-products"><img src="item3.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={addQuantityTriangle} class="button" id={product.name}>Add to cart </button></li>
    {/if}
  {/each}
  </ul>
</div>
