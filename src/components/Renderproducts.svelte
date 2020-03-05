<script>
import products from '../../products.js';
import {circleQuantity, rectangleQuantity, triangleQuantity} from './productstore.js';
import {navCartUpdateTxt} from './navcartupdatetxt.js';
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

function addQuantityCircle(){
  console.log("subqnt " + circle_count);
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


<div class="flex-container">
  <ul>
  {#each products.products as product}
  {#if product.name === "Circle"}
    <li>{product.name} - {product.description} - {product.price} <button on:click={addQuantityCircle} class="button" id={product.name}> Add to cart </button></li>
    {:else if product.name === "Rectangle"}
    <li>{product.name} - {product.description} - {product.price} <button on:click={addQuantityRectangle} class="button" id={product.name}> Add to cart</button></li>
    {:else if product.name === "Triangle"}
    <li>{product.name} - {product.description} - {product.price} <button on:click={addQuantityTriangle} class="button" id={product.name}>Add to cart </button></li>
    {/if}
  {/each}
  </ul>
</div>
