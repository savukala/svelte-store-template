/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
import shoppingCartImage from '../assets/shopping-cart.svg'
function renderHeader () {
    //We use the local variable x to store the created HTML element.
    let x = "";
    x = "<header>";
    x += "<nav>";
    x += "<div class=\'flex-container\'>";
    x += "<div class=\'nav-logo\'>";
    x += "<span class=\'nav-company-name\'>" + "Whee" + "</span>";
    x += "<span class=\'nav-company-slogan\'>" + " - The most definitive shape store in the world " + "</span>";
    x += "</div>"; //Close navLogo
    x += "<div class=\'nav-shopping-cart\'>";
    // x += "<button class=\'nav-shopping-cart-btn\'>";
    x += "<span class=\'nav-shopping-cart-txt\'>" + " Shopping Cart " + "</span>";
    // We add the shopping cart image from import
    x += "<span class=\'nav-shopping-cart-img\'>" + shoppingCartImage + "</span>";
    // x += "</button>" //Close button
    x += "</div>" //Close navShoppingCart
    x += "</div>"; //Close flex-container
    x += "</nav>"; //Close nav
    x += "</header>"; //Close header
    //We create a new div on local variable j
    let j = document.createElement('div');
    //The content of j should be x
    j.innerHTML = x;
    //Add the content of j to the body of the document.
    document.body.appendChild(j);
}

export { renderHeader }
