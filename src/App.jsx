import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <header>
          <nav className='navbar'>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to='/'
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to='/products'
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink to='/cart'>
                  {cart.length > 0 && (
                    <span className='cart-count'>{cart.length}</span>
                  )}
                  <div>
                    <FaShoppingCart />
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/products'
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
