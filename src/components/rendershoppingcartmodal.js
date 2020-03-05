/*
Jesse Juvonen 2020.
Job interview challenge for Solita
*/
function renderShoppingCartModal() {
    //We create local variable x for building the HTML
    let x = "";
    //First comes the modal container
    x = "<div id=\'shopping-cart-modal-id\' class=\'shopping-cart-modal\'>";
    //Then the modal content
    x += "<div class=\'modal-content\'>";
    //Add the X for closing the modal
    x += "<span class=\'close\'>" + "&times;" + "</span>";
    //Add holder for modal data
    x += "<span class=\'modal-data\'>" + "</span>";
    x += "<button class=\'remove-all-products\'>" +"Remove All Products"+ "</button>";
    x += "</div>"; // Close modal content div

    x += "</div>"; //Close modal div
    //We create a new div on local variable j
    let j = document.createElement("div");
    //The content of j should be x
    j.innerHTML = x;
    //Add the content of j to the body of the document.
    document.body.appendChild(j);
}

export {renderShoppingCartModal}
