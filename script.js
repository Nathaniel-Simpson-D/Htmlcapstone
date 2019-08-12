let cartList = [];
let cartPrices = [];
let catalogItems = ["Pizza","Crazy Bread", "Coke"];
let catalogPrice = [5,3,1];








const buttons = document.querySelectorAll(".item")
 buttons.forEach(button => {
     
 button.addEventListener("click",function(event) {if (event.target.tagName == "BUTTON") {
    event.preventDefault();
    let choice = catalogItems[event.target.attributes[0].value]
    console.log(event.target.attributes[0].value);
   cartList.push(choice);
    choice = catalogPrice[event.target.attributes[0].value]
   cartPrices.push(choice);
   console.log(cartList);
    displayCart();
    }});
});

    function displayCart() {
       let i =0;
        let CartDiv = document.querySelector("#CartDiv");
        CartDiv.innerHTML =" ";
        cartList.forEach(function(element, index) {
            let div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
            <p class="cart-item">${element}</p>
            <p class="cart-item">$${cartPrices[i]}.00</p>
            ` ;
            CartDiv.append(div);
            
        });
    }

    document.querySelector("#bottomline").addEventListener("click",function(event) {if (event.target.tagName === "BUTTON") {
        event.preventDefault();
        let subtotal =0;
        displayCart();
        cartPrices.forEach(function(element) {
        subtotal += subtotal + element ;
        });
        let Cart = document.querySelector("#cart");
       let par = document.createElement("p");
       par. innerText= "subtotal: $" + subtotal.toFixed(2) ;
        Cart.append(par);

        var total = subtotal * 1.06;
        
         par = document.createElement("p");
        par. innerText= "Total: $" + total.toFixed(2);
         Cart.append(par);
    
    
        


    }}) 
