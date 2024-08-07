import { cart,addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
// adding items using fro loops to the html
let html = '';
const productsGrid = document.querySelector(".products-grid");

console.log(productsGrid);
products.forEach((product)=>{
    html += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              87
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary  js-add-to-cart" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>
        `;
})
// console.log(html);
productsGrid.innerHTML =html;

// making cart quantity displayed on the cart display icon
function updateCartQuantity(){
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    // console.log(cartQuantity);
    document.querySelector(".cart-quantity").textContent = cartQuantity;
}

// adding items to the a cart array when the add to cart button is clicked
document.querySelectorAll(".js-add-to-cart")
.forEach((button)=>{
    button.addEventListener("click", ()=>{
        // console.log("product added")

        const productId=button.dataset.productId;// getting items using the data attribute in the button element

        addToCart(productId);

        
        updateCartQuantity();


        // console.log(cart)
    })
 
});

