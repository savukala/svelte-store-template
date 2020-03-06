<script>
//import navCartUpdateTxt function to update the count of ordered procuts on nav
import {navCartUpdateTxt} from './navcartupdatetxt.js'
//import all products
import products from '../../products.js';
//import the true ordered quantities for each product
 import {circleQuantity, rectangleQuantity, triangleQuantity} from './productstore.js';
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
//Handle button clicks, decrease the respective product quantity value.
 function subQuantityCircle(){
        if (!circle_count <= 0) {
         circleQuantity.update(n => n-1);
         navCartUpdateTxt();
       }
 }
 function subQuantityRectangle(){
      if (!rectangle_count <= 0) {
       rectangleQuantity.update(n => n-1);
       navCartUpdateTxt();
      }
 }
function subQuantityTriangle(){
      if (!triangle_count <= 0) {
        triangleQuantity.update(n => n-1);
        navCartUpdateTxt();
      }
}
</script>
<style>
.button {
  background-color: white; /* Dark */
  border: 1px solid black;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
}
.button:hover, .button:focus {
	cursor: pointer;
}
.render-products {
  padding: 1rem;
}

.flex-container {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid;
  margin-bottom: 3rem;
}
ul {
  list-style-type: none;
  margin: 5px;
  padding: 5px;
}
img {
  margin-right: 2rem;
}
</style>

<div class="flex-container">
  <ul>
  <!-- We iterate over the products array and, -->
  {#each products.products as product}
  <!--
    We render the element based on the type of product
    We also render the quantity of ordered items on the buttons.
  -->
  {#if product.name === "Kukko Lager" && circle_count > 0}
    <li class="render-products"><img src="item1.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={subQuantityCircle} class="button" id={product.name}> Remove item ({circle_count})</button></li>
    {:else if product.name === "Oiva Siideri" && rectangle_count > 0}
    <li class="render-products"><img src="item2.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={subQuantityRectangle} class="button" id={product.name}> Remove item ({rectangle_count})</button></li>
    {:else if product.name === "Gin Long Drink" && triangle_count > 0}
    <li class="render-products"><img src="item3.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={subQuantityTriangle} class="button" id={product.name}> Remove item ({triangle_count})</button></li>
    {/if}
  {/each}
  </ul>

</div>
