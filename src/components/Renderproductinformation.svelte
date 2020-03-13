<!--
If we want to serve modals, here is where we will create the product cards.
To be programmed.

<script>
//import navCartUpdateTxt function to update the count of ordered procuts on nav
import {navCartUpdateTxt} from './navcartupdatetxt.js'
//import all products
import products from '../../products.js';
//import the true ordered quantities for each product
 import {circleQuantity, rectangleQuantity, triangleQuantity, totalPrice} from './productstore.js';
 //init local variables to hold the true ordered products count
 let circle_count;
 let rectangle_count;
 let triangle_count;
 let total_price;
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
const unsubscribeTotalPrice = totalPrice.subscribe(value => {
 total_price = value;
});
//Handle button clicks, decrease the respective product quantity value.
 function subQuantityCircle(){
        if (!circle_count <= 0) {
         circleQuantity.update(n => n-1);
         totalPrice.update(n => n-products.products[0].price);
         navCartUpdateTxt();
       }
 }
 function subQuantityRectangle(){
      if (!rectangle_count <= 0) {
       rectangleQuantity.update(n => n-1);
       totalPrice.update(n => n-products.products[1].price);
       navCartUpdateTxt();
      }
 }
function subQuantityTriangle(){
      if (!triangle_count <= 0) {
        triangleQuantity.update(n => n-1);
        totalPrice.update(n => n-products.products[2].price);
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
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
ul {
  list-style-type: none;
  margin: 5px;
  padding: 5px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  margin-bottom: 1em;
  text-align: center;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>

<div class="flex-container">

  <!-- We iterate over the products array and, -->
  {#each products.products as product}
  <!--
    We render the element based on the type of product
    We also render the quantity of ordered items on the buttons.
  -->
  {#if product.name === "Kukko Lager" && circle_count > 0}
    <div class="card">
    <img src="item1.PNG" alt={product.name} style="width:20%">
      <h1>{product.name}</h1>
      <p class="price">{product.price} €</p>
      <p>{product.description}</p>
      <p><button on:click={subQuantityCircle} id={product.name}> Remove product ({circle_count}) </button></p>
    </div>
    <!-- <li class="render-products"><img {src} alt={product.name} height="200" width="auto"> {product.name} - {product.description} - {product.price}€ <button on:click={addQuantityCircle} class="button" id={product.name}> Add to cart </button></li> -->
    {:else if product.name === "Oiva Siideri" && rectangle_count > 0}
    <div class="card">
      <img src="item2.PNG" alt={product.name} style="width:20%">
      <h1>{product.name}</h1>
      <p class="price">{product.price} €</p>
      <p>{product.description}</p>
      <p><button on:click={subQuantityRectangle} id={product.name}> Remove product ({rectangle_count})</button></p>
    </div>
    <!-- <li class="render-products"><img src="item2.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={addQuantityRectangle} class="button" id={product.name}> Add to cart</button></li> -->
    {:else if product.name === "Gin Long Drink" && triangle_count > 0}
    <div class="card">
      <img src="item3.PNG" alt={product.name} style="width:20%">
      <h1>{product.name}</h1>
      <p class="price">{product.price} €</p>
      <p>{product.description}</p>
      <p><button on:click={subQuantityTriangle} id={product.name}> Remove product ({triangle_count}) </button></p>
    </div>
    <!-- <li class="render-products"><img src="item3.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={addQuantityTriangle} class="button" id={product.name}>Add to cart </button></li> -->
    {/if}
  {/each}
</div> -->
