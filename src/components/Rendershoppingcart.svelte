<script>
import {navCartUpdateTxt} from './navcartupdatetxt.js'
import products from '../../products.js';
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
// //let storage = JSON.parse(sessionStorage);
// //console.log(storage);
 function subQuantityCircle(){
   console.log("subqnt " + circle_count);
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
/*
{#if product.name === "Circle"}
{:else if product.name === "Rectangle"}
<li>{product.name} - {product.description} - {product.price} - Quantity: {rectangle_value} <button on:click={subQuantity(product.name)} class="button" id={product.name}> Remove item </button></li>
{:else if product.name === "Triangle"}
<li>{product.name} - {product.description} - {product.price} - Quantity: {triangle_value} <button on:click={subQuantity(product.name)} class="button" id={product.name}> Remove item </button></li>
{/if}
*/
</script>

<div class="flex-container">
  <ul>
  {#each products.products as product}
  {#if product.name === "Circle" && circle_count > 0}
    <li>{product.name} - {product.description} - {product.price} - Quantity {circle_count} <button on:click={subQuantityCircle} class="button" id={product.name}> Remove item </button></li>
    {:else if product.name === "Rectangle" && rectangle_count > 0}
    <li>{product.name} - {product.description} - {product.price} - Quantity: {rectangle_count} <button on:click={subQuantityRectangle} class="button" id={product.name}> Remove item </button></li>
    {:else if product.name === "Triangle" && triangle_count > 0}
    <li>{product.name} - {product.description} - {product.price} - Quantity: {triangle_count} <button on:click={subQuantityTriangle} class="button" id={product.name}> Remove item </button></li>
    {/if}
  {/each}
  </ul>

</div>
