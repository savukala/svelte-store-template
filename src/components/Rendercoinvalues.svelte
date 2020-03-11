<script>
//import the products list as products
import products from '../../products.js';
//import writable stores as different object-variables from productstore.js.
import {circleQuantity, rectangleQuantity, triangleQuantity, totalPrice} from './productstore.js';
//init all local variables.
  let circle_count;
  let rectangle_count;
  let triangle_count;
  let total_price;
  let priceBTC;
  export let coinValue = 0;
  export let inverseCoinValue = "";

  //subscribe to any changes on the ordered products quantity on productstore.js
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
   //On change to the total amount of quantities, fetch new value for the coin.
   getPrice();
   priceBTC = value/coinValue;

  });
  /*
    Advanced features:
    - take user input into getPrice which should then filter the json to find coinValue for the respective selected coin
    -> Where do we get the input from?
    -> What do we need to bind on other elements to update the currency and value?
  */
//  export let totalPriceFormula = products.products[0].price * circle_count + products.products[1].price * rectangle_count + products.products[2].price * triangle_count;
//Execute the function getPrice at the micro-task queue
async function getPrice(){
  //await for the fetch to complete in-case of bad network
  await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=1000&page=1&sparkline=false')
  .then(
    function(response) {
      //Handle errors.
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // turn the response into json and get coinValue
      response.json().then(function(data) {
        coinValue = data[0].current_price;
        inverseCoinValue = 1/coinValue;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

</script>

<style>
.coin-value-wrapper {
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid black;
  
}
</style>

<div class="coin-value-wrapper">
  <p>Total for checkout in bitcoins: {priceBTC || 0}</p>
  <!-- Show the payment QR -->
  <p>Send your payment to:</p>
  <img src="bitcoin.PNG" alt="payment" style="width:50%">
</div>
