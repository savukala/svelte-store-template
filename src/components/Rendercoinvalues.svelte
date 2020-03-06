<script>
import products from '../../products.js';
import {circleQuantity, rectangleQuantity, triangleQuantity, totalPrice} from './productstore.js';
  let circle_count;
  let rectangle_count;
  let triangle_count;
  let coin_value;
  let inverse_coin_value;
  let total_price;
  let priceBTC;
  export let coinValue = 0;
  export let inverseCoinValue = "";

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
   getPrice();
   priceBTC = value/coinValue;

  });
  /*
    Advanced features:
    - take user input into getPrice which should then filter the json to find coinValue for the respective selected coin

  */
//  export let totalPriceFormula = products.products[0].price * circle_count + products.products[1].price * rectangle_count + products.products[2].price * triangle_count;
async function getPrice(){
  await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=1000&page=1&sparkline=false')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
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
  border-bottom: solid 1px;
  margin-bottom: 1em;
}
</style>

<div class="coin-value-wrapper">
  <p>Total for checkout in bitcoins: {priceBTC || 0}</p>
</div>
