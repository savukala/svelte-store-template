/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
//Import the quantity of items, user has placed on shopping cart
import {circleQuantity, rectangleQuantity, triangleQuantity, item4Quantity} from './productstore.js';
import products from '../../products.js';
//init local variables
let circle_count;
let rectangle_count;
let triangle_count;
let item4_count;
//subscribe to any changes on the true quantity of orders per item
const unsubscribeCircle = circleQuantity.subscribe(value => {
 circle_count = value;
});
const unsubscribeRectangle = rectangleQuantity.subscribe(value => {
 rectangle_count = value;
});
const unsubscribeTriangle = triangleQuantity.subscribe(value => {
 triangle_count = value;
});
const unsubscribeItem = item4Quantity.subscribe(value => {
 item4_count = value;
});

function navCartUpdateTxt () {
  //Select the nav-shopping-cart-txt element and update the textContent of it with the total amount of ordered items.
  let totalQuantity = circle_count+rectangle_count+triangle_count+item4_count;
  document.getElementsByClassName("nav-shopping-cart-txt")[0].textContent = "Shopping Cart (" + totalQuantity + ")";
}

export {navCartUpdateTxt}
