<script>
import Rendercoinvalues from './Rendercoinvalues.svelte';
//import the set of products to be displayed on the frontpage.
import products from '../../products.js';
//import the true ordered quantities for each product
import {circleQuantity, rectangleQuantity, triangleQuantity, item4Quantity, totalPrice} from './productstore.js';
//import function navCartUpdateTxt to update the changes
import {navCartUpdateTxt} from './navcartupdatetxt.js';


//Handle button clicks, increase the respective product quantity value.
function addQuantityCircle(){
        circleQuantity.update(n => n+1);
        totalPrice.update(n => n+products.products[0].price);
        navCartUpdateTxt();
}
function addQuantityRectangle(){
      rectangleQuantity.update(n => n+1);
      totalPrice.update(n => n+products.products[1].price);
      navCartUpdateTxt();
}
function addQuantityTriangle(){
       triangleQuantity.update(n => n+1);
       totalPrice.update(n => n+products.products[2].price);
       navCartUpdateTxt();
}
//Expand this function to compass all possible input buttons.
/*
function addQuantity(id){
  if (id === 0){
    circleQuantity.update(n => n+1);
    totalPrice.update(n => n+products.products[id].price);
    navCartUpdateTxt();
  }else if (id === 1){
    rectangleQuantity.update(n => n+1);
    totalPrice.update(n => n+products.products[id].price);
    navCartUpdateTxt();
  }else if (id === 2) {
    triangleQuantity.update(n => n+1);
    totalPrice.update(n => n+products.products[id].price);
    navCartUpdateTxt();
  }  ...and so on
}

*/
function addQuantity4(){
       item4Quantity.update(n => n+1);
       totalPrice.update(n => n+products.products[3].price);
       navCartUpdateTxt();
}

</script>
<style>
.render-products {
  padding: 10px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
img {

}
.button {
  background-color: #000; /* Dark */
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


  <!-- REMOVE THE IF CLAUSES AND RUN AN ELSE ONLY
  <div class="card">
    <img src={product.image} alt={product.name} style="width:20%">
    <h1>{product.name}</h1>
    <p class="price">{product.price} €</p>
    <p  style="margin: 5px;">{product.description}</p>
    <p><button on:click={addQuantityCircle} id={product.name}> Add to cart </button></p>
  -->

  <!-- We iterate over the products array and, -->
  {#each products.products as product}
  <!-- We render the element based on the type of product -->
  {#if product.name === "Kukko Lager"}
    <div class="card">
      <img src={product.image} alt={product.name} style="width:20%">
      <h1>{product.name}</h1>
      <p class="price">{product.price} €</p>
      <p  style="margin: 5px;">{product.description}</p>
      <p><button on:click={addQuantityCircle} id={product.name}> Add to cart </button></p>
    </div>
    <!-- <li class="render-products"><img {src} alt={product.name} height="200" width="auto"> {product.name} - {product.description} - {product.price}€ <button on:click={addQuantityCircle} class="button" id={product.name}> Add to cart </button></li> -->
    {:else if product.name === "Oiva Siideri"}
    <div class="card">
      <img src={product.image} alt={product.name} style="width:20%">
      <h1>{product.name}</h1>
      <p class="price">{product.price} €</p>
      <p style="margin: 5px;">{product.description}</p>
      <p><button on:click={addQuantityRectangle} id={product.name}> Add to cart </button></p>
    </div>
    <!-- <li class="render-products"><img src="item2.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={addQuantityRectangle} class="button" id={product.name}> Add to cart</button></li> -->
    {:else if product.name === "Gin Long Drink"}
    <div class="card">
      <img src={product.image} alt={product.name} style="width:20%">
      <h1>{product.name}</h1>
      <p class="price">{product.price} €</p>
      <p style="margin: 5px;">{product.description}</p>
      <p><button on:click={addQuantityTriangle} id={product.name}> Add to cart </button></p>
    </div>
    {:else if product.name === "Brändy Long Drink"}
    <div class="card">
      <img src={product.image} alt={product.name} style="width:20%">
      <h1>{product.name}</h1>
      <p class="price">{product.price} €</p>
      <p style="margin: 5px;">{product.description}</p>
      <p><button on:click={addQuantity4} id={product.name}> Add to cart </button></p>
    </div>
    <!-- <li class="render-products"><img src="item3.JPG" alt={product.name} height="42" width="42">{product.name} - {product.description} - {product.price}€ <button on:click={addQuantityTriangle} class="button" id={product.name}>Add to cart </button></li> -->
    {/if}
  {/each}

</div>
