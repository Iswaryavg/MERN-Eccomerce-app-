import React from "react";
import "../App.css"
function Cart()
{
return <div ClassName="cart-container">
<div ClassName="section1">
  <div ClassName="cart-details">
  <div ClassName="cart-img">
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2020%2F01%2Fchicco-bravo-trio-travel-system-1-2000.jpg"
     width="150px" alt="stroller" />
    </div>
0    <div ClassName="cart-qty">
<h1>Stroller</h1>
<label for="cars">QTY</label>
<select id="numbers">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>
<button ClassName="btn btn-danger">Remove</button>
      </div>

      <div ClassName="cartitem-price">
      <h1>Price$20</h1>

        </div>
</div>
  </div>

    <div ClassName="section2">
          <h1>Subtotal</h1>
          <button ClassName="btn btn-lg btn-warning">Proceed to Checkout</button>
      </div>
</div>
}
export default Cart;