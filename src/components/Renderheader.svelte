<script>

</script>
<style>
.flex-container {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  margin-bottom: 2rem;
}
.nav-shopping-cart-txt {
  background-color: #000; /* Dark */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  outline-style: solid;
  outline-color: #000;
  outline-width: 0.5rem;
}

</style>
  <header>
    <nav>
      <div class="flex-container">
        <div class="nav-logo">
          <span class="nav-company-name">Best Bar</span>
          <span class="nav-company-slogan"> Our products </span>
        </div>
        <div class="nav-shopping-cart">
          <!-- <button on:click={renderShoppingCart} class="nav-shopping-cart-txt">Shopping Cart</button>
          <span class="nav-shopping-cart-img"> </span> -->
        </div>
      </div>
    </nav>
  </header>
