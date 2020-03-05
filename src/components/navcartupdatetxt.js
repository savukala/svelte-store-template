/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
import {circleQuantity, rectangleQuantity, triangleQuantity} from './productstore.js';
import products from '../../products.js';
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

function navCartUpdateTxt () {
  //Select the nav-shopping-cart-txt element and update the textContent of it with the length of sessionStorage.
  let totalQuantity = circle_count+rectangle_count+triangle_count;
  document.getElementsByClassName("nav-shopping-cart-txt")[0].textContent = "Shopping Cart (" + totalQuantity + ")";
}

export {navCartUpdateTxt}
