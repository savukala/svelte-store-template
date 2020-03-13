<script>
import products from '../../products.js';
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

/* If we need to add a button uncomment this.
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
*/
</style>

<div class="flex-container">



  <!-- We iterate over the products array and print them in cards -->
  {#each products.products as product}
  <div class="card">
    <img src={product.image} alt={product.name} style="width:20%">
    <h1>{product.name}</h1>
    <p class="price">{product.price} €</p>
    <p  style="margin: 5px;">{product.description}</p>
  </div>
  {/each}

</div>
