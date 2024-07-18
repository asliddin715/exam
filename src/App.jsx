import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Cart from "./components/Cart";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <Navbar />
        <header>
          <nav className='navbar'>
            <div className="nav-logo">
              <NavLink to='/'>
                <img className="logo" src="/logo.png" alt="Logo" />
              </NavLink>
            </div>

            <div>
              <ul className="list">
                <li>
                  <NavLink to='/categories'>Categories</NavLink>
                </li>
                <li>
                  <NavLink to='/brands'>Brands</NavLink>
                </li>
                <li>
                  <NavLink to='/whats-new'>What's New</NavLink>
                </li>
                <li>
                  <NavLink to='/sales'>Sales</NavLink>
                </li>
                <li>
                  <NavLink to='/help'>Help</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <ul className="list lists">
                <li>
                  <img src="/black-serch.png" alt="Search" />
                </li>
                <li>
                  <img src="/black-user.png" alt="User" />
                </li>
                <li>
                  <NavLink to='/cart'>
                    <div className="cart-fath">
                      {cart.length > 0 && (
                        <span className='cart-count'>{cart.length}</span>
                      )}
                      <img src="/black-shop.png" alt="Cart" />
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Routes>
          <Route
            path='/'
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart products={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
