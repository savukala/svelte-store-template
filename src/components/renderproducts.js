/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
import products from '../../products.js'

function renderProducts(){
  //We init local variables i, j and x
  let i, j, x = "";
  //We iterate over all products within the imported products JSON file.
  for (i in products.products){
    //We create the product container and product listing by building the HTML into x
    x = "<div class=\'flex-container\'>";
    //Add product img property here and to products.js
    //We assign the product name as it is in products.js
    x += "<p>" + " " + products.products[i].name + " " + "</p>";
    //We assign the product description as it is in products.js
    x += "<p>" + " " + products.products[i].description + " " + "</p>";
    //We assign the product price as it is in products.js
    x += "<p>" + " " + products.products[i].price + " " + "</p>";
    //We create a button for adding the product to the shopping cart
    //The button ID is set to match the product name
    x += "<button class='button' id="+products.products[i].name+" >" + "Add to cart" + "</button>";
    x += "</div>"; //Close flex-container
    //We create a new div on local variable j
    let j = document.createElement('div');
    //The content of j should be x
    j.innerHTML = x;
    //j should have the product-container CSS class
    j.classList.add('product-container');
    //Add the content of j to the body of the document.
    document.body.appendChild(j);
  }
  
}

export { renderProducts }
