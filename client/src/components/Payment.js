import React from 'react'
function Payment()
{
    return <section className="container content-section">
    <h2 className="section-header">CART</h2>
    <div className="cart-row">
        <span className="cart-item cart-header cart-column">ITEM</span>
        <span className="cart-price cart-header cart-column">PRICE</span>
        <span className="cart-quantity cart-header cart-column">QUANTITY</span>
    </div>
    <div className="cart-items">
        <div className="cart-row">
            <div className="cart-item cart-column">
                <img className="cart-item-image" src="images/img1.jpg" width="100" height="100" />
                <span className="cart-item-title">T-Shirt</span>
            </div>
            <span className="cart-price cart-column">$19.99</span>
            <div className="cart-quantity cart-column">
                <input className="cart-quantity-input" type="number" value="1" />
                <button className="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>
        <div className="cart-row">
            <div className="cart-item cart-column">
                <img className="cart-item-image" src="images/img2.jpg" width="100" height="100" />
                <span className="cart-item-title">Album 3</span>
            </div>
            <span className="cart-price cart-column">$9.99</span>
            <div className="cart-quantity cart-column">
                  <input className="cart-quantity-input" type="number" value="2" />
                <button className="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>
    </div>
    <div className="cart-total">
        <strong className="cart-total-title">Total</strong>
        <span className="cart-total-price">$39.97</span>
    </div>
    <button className="btn btn-primary btn-purchase" type="button">Proceed to checkout</button>
</section>

}
export default Payment;