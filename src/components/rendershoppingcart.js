/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
function renderShoppingCart (content) {
  //The argument is sent by navListener.
  //First we intialize the local variables x and i
  let x = "";
  let i = 0;
  //We iterate over the sessionStorage through the key value.
  for (let key in sessionStorage) {
    //try&catch block to get past null and undefined errors.
    try{
      //Parse the entry in sessionStorage and store it in local varibale p
      let p = JSON.parse(sessionStorage.getItem(key));
      //Use local variable x to store the HTML
      //Assign the div an id (should be class or name, because multiple id should not exist)
      x = "<div id="+key+">";
      //Create a paragraph with the name of the product
      x += "<p>" + p.name + "</p>";
      //Create a paragraph with the description of the product
      x += "<p>" + p.description + "</p>";
      //Create a paragraph with the price of the product
      x += "<p>" + p.price + "</p>";
      //Create a button with class remove-button and id as the key of the object (issue: two id are now sharing same data)
      x += "<button class='remove-button' id="+key+" >" + "Remove" + "</button>";
      x += "</div>" // Close the product div.
      //Insert the html inside of the modal-data container.
      document.getElementsByClassName("modal-data")[0].innerHTML += x;
      //Increase i by one
      i++;
    } //Catch all the errors
    catch(error) {
      //We hide logging the error to ignore errors from null objects
      //console.error(error);
    }
  }
}

//export {renderShoppingCart}
