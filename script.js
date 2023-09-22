// Add event listeners for adding products to cart and calculating the total

window.addEventListener("load", function () {
  let products = document.querySelectorAll(".product");
  let cartItems = document.getElementById("cart-items");
  let totalSpan = document.getElementById("total");
  let checkoutBtn = document.getElementById("checkout");
  let cartTotal = 0;

  products.forEach(function (product, index) {
    product.querySelector("button").addEventListener("click", function () {
      let productTitle = product.querySelector("h3").textContent;
      let productPrice = parseFloat(
        product.querySelector("p").textContent.slice(1)
      );
      let newItem = document.createElement("div");
      newItem.textContent = productTitle + " - $" + productPrice.toFixed(2);
      cartItems.appendChild(newItem);
      cartTotal += productPrice;
      totalSpan.textContent = cartTotal.toFixed(2);
    });
  });

  checkoutBtn.addEventListener("click", function () {
    alert(
      "Thank you for shopping with us! Your total is $" + cartTotal.toFixed(2)
    );
    cartItems.textContent = "";
    totalSpan.textContent = "0";
    cartTotal = 0;
  });
});
