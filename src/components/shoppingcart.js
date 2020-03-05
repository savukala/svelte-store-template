// import products from '../../products.js'
// import shoppingCartImage from '../assets/shopping-cart.svg'
/*
Jesse Juvonen 2020.
Job interview challenge for Solita
This file is legacy, but remains for as my own notes and a place where debugging exists.
*/
// function renderHeader () {
//   //Needs .svg background to be imported and applied on the header as background
//   //Create HTML element with the structure
//   // <header><nav><div class="navLogo"></div><div class="navShoppingCart"></div></nav></header>
//
//     //We use the local variable x to store the created HTML element.
//     let x = "";
//     x = "<header>";
//     x += "<nav>";
//     x += "<div class=\'flex-container\'>";
//     x += "<div class=\'nav-logo\'>";
//     x += "<span class=\'nav-company-name\'>" + "Whee" + "</span>";
//     x += "<span class=\'nav-company-slogan\'>" + " - The most definitive shape store in the world " + "</span>";
//     x += "</div>"; //Close navLogo
//     x += "<div class=\'nav-shopping-cart\'>";
//     // x += "<button class=\'nav-shopping-cart-btn\'>";
//     x += "<span class=\'nav-shopping-cart-txt\'>" + " Shopping Cart " + "</span>";
//     // We add the shopping cart image from import
//     x += "<span class=\'nav-shopping-cart-img\'>" + shoppingCartImage + "</span>";
//     // x += "</button>" //Close button
//     x += "</div>" //Close navShoppingCart
//     x += "</div>"; //Close flex-container
//     x += "</nav>"; //Close nav
//     x += "</header>"; //Close header
//     //We create a new div on local variable j
//     let j = document.createElement('div');
//     //The content of j should be x
//     j.innerHTML = x;
//     //Add the content of j to the body of the document.
//     document.body.appendChild(j);
//
// }
//
//
// function renderProducts(){
//   //We init local variables i, j and x
//   let i, j, x = "";
//   // let products2 = JSON.stringify(products);
//   //console.log(products.products[0].name);
//
//   //We iterate over all products within the imported products JSON file.
//   for (i in products.products){
//     //We create the product container and product listing by building the HTML into x
//     x = "<div class=\'flex-container\'>";
//     //Add product img property here and to products.js
//     //We assign the product name as it is in products.js
//     x += "<p>" + " " + products.products[i].name + " " + "</p>";
//     //We assign the product description as it is in products.js
//     x += "<p>" + " " + products.products[i].description + " " + "</p>";
//     //We assign the product price as it is in products.js
//     x += "<p>" + " " + products.products[i].price + " " + "</p>";
//     //We create a button for adding the product to the shopping cart
//     //The button ID is set to match the product name
//     x += "<button class='button' id="+products.products[i].name+" >" + "Add to cart" + "</button>";
//     x += "</div>"; //Close flex-container
//     //We create a new div on local variable j
//     let j = document.createElement('div');
//     //The content of j should be x
//     j.innerHTML = x;
//     //j should have the product-container CSS class
//     j.classList.add('product-container');
//     //Add the content of j to the body of the document.
//     document.body.appendChild(j);
//   }
//   //
// }
//
// function renderShoppingCartModal() {
//     //We create local variable x for building the HTML
//     let x = "";
//     //First comes the modal container
//     x = "<div id=\'shopping-cart-modal-id\' class=\'shopping-cart-modal\'>";
//     //Then the modal content
//     x += "<div class=\'modal-content\'>";
//     //Add the X for closing the modal
//     x += "<span class=\'close\'>" + "&times;" + "</span>";
//     //Add holder for modal data
//     x += "<span class=\'modal-data\'>" + "</span>";
//     x += "<button class=\'remove-all-products\'>" +"Remove All Products"+ "</button>";
//     x += "</div>"; // Close modal content div
//
//     x += "</div>"; //Close modal div
//     //We create a new div on local variable j
//     let j = document.createElement("div");
//     //The content of j should be x
//     j.innerHTML = x;
//     //Add the content of j to the body of the document.
//     document.body.appendChild(j);
// }
//
//
//
// function renderShoppingCart (content) {
//   //The argument is sent by navListener.
//   //First we intialize the local variables x and i
//   let x = "";
//   let i = 0;
//   //We iterate over the sessionStorage through the key value.
//   for(let key in sessionStorage) {
//     //try&catch block to get past null and undefined errors.
//     try {
//       //Parse the entry in sessionStorage and store it in local varibale p
//       let p = JSON.parse(sessionStorage.getItem(key));
//       //console.log(p);
//       //console.log("key value: " + key);
//       //Use local variable x to store the HTML
//       //Assign the div an id (should be class because multiple id should not exist)
//       x = "<div id="+key+">";
//       //Create a paragraph with the name of the product
//       x += "<p>" + p.name + "</p>";
//       //Create a paragraph with the description of the product
//       x += "<p>" + p.description + "</p>";
//       //Create a paragraph with the price of the product
//       x += "<p>" + p.price + "</p>";
//       //Create a button with class remove-button and id as the key of the object (issue: two id are now sharing same data)
//       x += "<button class='remove-button' id="+key+" >" + "Remove" + "</button>";
//       x += "</div>" // Close the product div.
//       // let j = document.createElement('div');
//       //console.log(x);
//       //Insert the html inside of the modal-data container.
//       document.getElementsByClassName("modal-data")[0].innerHTML += x;
//       //Increase i by one
//       i++;
//     } //Catch all the errors
//     catch(error) {
//       console.error(error);
//     }
// }
//
// }
//
//
// function saveToCart(){
//   //We initialize local variable orderCount to the value of 0
//   let orderCount = 0;
//   //We add an event listener to catch user interaction
//   document.addEventListener('click', function (event) {
//
// 	// If the clicked element doesn't have the right selector, bail
// 	if (!event.target.matches('.button')) return;
//
// 	// Don't follow the link
// 	event.preventDefault();
//
// 	// Log the clicked element in the console
// 	//console.log(event.target.id);
//
//
//   //Store the id of the button which user clicked into local variable input
//   let input = event.target.id;
//   //console.log(input);
//   // Handle the input with a switch-case.
//   switch (input) {
//     //In case user requested a Circle to be ordered
//     case "Circle":
//     //Add new order to sessionStorage with the key set to orderCount and the value set to Circle product as a string.
//         sessionStorage.setItem(orderCount,JSON.stringify(products.products[0]));
//         document.getElementsByClassName("nav-shopping-cart-txt")[0].textContent = "Shopping Cart (" + sessionStorage.length + ")";
//         //Raise the order count by one.
//         orderCount++;
//       break;
//       //In case user requested a Rectangle to be ordered
//     case "Rectangle":
//     //Add new order to sessionStorage with the key set to orderCount and the value set to Rectangle product as a string.
//       sessionStorage.setItem(orderCount,JSON.stringify(products.products[1]));
//       document.getElementsByClassName("nav-shopping-cart-txt")[0].textContent = "Shopping Cart (" + sessionStorage.length + ")";
//       //Raise the order count by one.
//       orderCount++;
//     break;
//     //Add new order to sessionStorage with the key set to orderCount and the value set to Triangle product as a string.
//     case "Triangle":
//       sessionStorage.setItem(orderCount,JSON.stringify(products.products[2]));
//       document.getElementsByClassName("nav-shopping-cart-txt")[0].textContent = "Shopping Cart (" + sessionStorage.length + ")";
//       //Raise the order count by one.
//     orderCount++;
//     break;
//     default:
//
//     //console.log(event.target.id);
//     break;
//
//   }
//
// }, false);
// }
//
// function modalListener () {
//   //Add event listener to capture user interaction on the Shopping Cart Modal
//   document.addEventListener('click', function (event) {
//
//     /* <toBeFixed>
//     If the clicked element doesn't have the right selector, bail
//     Removed to allow multiple selectors
//     if (!event.target.matches('span') || !event.target.matches('div')) return;
//     </toBeFixed> */
//
//   // Don't follow the link
//   event.preventDefault();
//
//   // Log the clicked element in the console
//   //console.log(event.target.id);
//
//   //We store the className of the element which was clicked on a local variable.
//   let input = event.target.className;
//   // Handle the input as per case.
//   //console.log("inside modallistener " + input);
//   //If the click came from the close button,
//   if (input == "close") {
//     //Hide the Shopping Cart Modal
//     document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
//     //Clear the contents of the modal-data container
//     document.getElementsByClassName("modal-data")[0].innerHTML = "";
//
//   }
//   //If the click came from anywhere outside the modal-content,
//   else if (input == "shopping-cart-modal") {
//     //Hide the Shopping Cart Modal
//     document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
//     //Clear contents of the modal-data container
//     document.getElementsByClassName("modal-data")[0].innerHTML = "";
//   }
//   //If the input came from remove item button,
//   else if (input == "remove-button") {
//     //Store the ID of the input button on local variable input
//     let input = event.target.id;
//     //console.log("removeproduct: " + input);
//     //Remove the item from the sessionStorage Shopping Cart with the input value
//     sessionStorage.removeItem(input);
//     //Get the element which from user clicked
//     let removeNode = document.getElementById(event.target.id);
//     //And remove it from the Shopping Cart Modal modal-data container.
//     removeNode.remove();
//     //If the storage is now empty, hide the Shopping Cart Modal
//     if (sessionStorage.length == 0) {
//       document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
//
//     }
//     //Re-set the nav-shopping-cart-txt value
//     document.getElementsByClassName("nav-shopping-cart-txt")[0].textContent = "Shopping Cart (" + sessionStorage.length + ")";
//   }
//   else if (input == "remove-all-products") {
//     //Clear the whole contents of sessionStorage
//     sessionStorage.clear();
//     //Hide the Shopping Cart Modal
//     document.getElementsByClassName("shopping-cart-modal")[0].style.display = "none";
//     //Clear contents of the modal-data container
//     document.getElementsByClassName("modal-data")[0].innerHTML = "";
//     //Re-set the nav-shopping-cart-txt value
//     document.getElementsByClassName("nav-shopping-cart-txt")[0].textContent = "Shopping Cart (" + sessionStorage.length + ")";
//   }
//
// }, false);
//
// }
//
//
// function navListener () {
//   //add click event listener to div with the class navShoppingCart
//
//   document.addEventListener('click', function (event) {
//
//     // If the clicked element doesn't have the right selector, bail
//     // Removed so that the event will fire on each element clicked on the nav-shopping-cart
//     //if (!event.target.matches('div')) return;
//
//     // Don't follow the link
//     event.preventDefault();
//
//     // Log the clicked element in the console
//     //console.log(event.target.id);
//     let input = event.target.className;
//     // Handle the input.
//     //console.log("inside navlistener " + input);
//     //If the input was from nav-shopping-cart,
//     if (input == "nav-shopping-cart" || input == "nav-shopping-cart-txt") {
//   //    let storage = sessionStorage.length;
//       //We store contents of sessionStorage on local variable content
//       if (sessionStorage.length == 0) return;
//       let content = sessionStorage;
//       //Call renderShoppingCart to propagate data into the Shopping Cart Modal.
//       //Send the local variable content as an argument to the function.
//       renderShoppingCart(content);
//       //Change the display of the Shopping Cart Modal to block instead of none.
//       //This will bring the Shopping Cart Modal to the view.
//       document.getElementsByClassName("shopping-cart-modal")[0].style.display = "block";
//
//     }
//
//   }, false);
//
// }
//
// export { renderProducts, saveToCart, renderShoppingCart,
//   renderHeader, renderShoppingCartModal, navListener,
//     modalListener}
