import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ products }) => {
  const history = useNavigate(null);

  // Calculate the total price
  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <div className="shop-container">
      <button className="btn-cart" onClick={() => history.push('/')}>
        <img style={{ width: "20px", height: "20px" }} src="/arrov.png" alt="loading" /> 
        Back to Shopping
      </button>
      <h2 className="cart">SHOPPING CART</h2>

      <div className="shop-cont">
        <div className="content-shop">
          <div className="product-shop-name">
            <h3>Product</h3>
            <div className="nan">
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>
          </div>

          <div>
            {products.map((p) => (
              <li key={p.id}>
                <div className="cart-content">
                  <div className="cart-image">
                    <img style={{ width: "20px" }} src="/x.png" alt="loading" />
                    <img className="cart-img" src={p.image_url} alt={p.product_name} />
                  </div>

                  <div className="cart-text">
                    <h3 className="log">LOGITECH</h3>
                    <p className="cart-produc">{p.name}</p>
                    <p>Black</p>
                    <p className="stock">In stock</p>
                  </div>

                  <div>
                    <div className="count1">
                      <img style={{ width: "30px" }} src="/minus.png" alt="decrease quantity" />
                      <h2>1</h2>
                      <img style={{ width: "30px" }} src="/plus.png" alt="increase quantity" />
                    </div>
                  </div>

                  <div>
                    <h3>${p.price}</h3>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>

        <div className="total">
          <div className="cart-total">
            <h2>CART TOTALS</h2>
          </div>

          <div className="cart-total-name">
            <div className="cart-child">
              <p>Shipping (3-5 Business Days)</p>
              <strong>Free</strong>
            </div>
            <div className="cart-child">
              <p>TAX (estimated for the United States (US))</p>
              <strong>$0</strong>
            </div>
            <div className="cart-child">
              <p>Subtotal</p>
              <strong>${totalPrice}</strong>
            </div>
          </div>
          
          <div className="total-child">
            <div className="cart-child">
              <strong>Total</strong>
              <strong>${totalPrice}</strong>
            </div>
            <div>
              <button className="total-btn">Proceed to Checkout</button>
              <button className="btn-cart car" onClick={() => history.push('/')}>
                <img style={{ width: "20px", height: "20px" }} src="/arrov.png" alt="loading" /> 
                Back to Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
