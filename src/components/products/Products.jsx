import { useEffect, useState } from "react";

import styles from "./Products.module.scss";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/productsSlice";

const baseURL = import.meta.env.VITE_BASE_URL;

const Products = ({ cart, setCart }) => {
  const products = useSelector((store) => store.productsReducer.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    async function fetchBrands() {
      const response = await fetch(`${baseURL}/brands`);
      const data = await response.json();
      setBrands(data);
    }

    async function fetchColors() {
      const response = await fetch(`${baseURL}/colors`);
      const data = await response.json();
      setColors(data);
    }

    fetchBrands();
    fetchColors();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let query = `${baseURL}/products`;

      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }
      if (minPrice) {
        params.push(`price_gte=${minPrice}`);
      }
      if (maxPrice) {
        params.push(`price_lte=${maxPrice}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      try {
        const response = await fetch(`${query}`);
        const data = await response.json();
        dispatch(addProducts(data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedColor, minPrice, maxPrice]);
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 60px", display: "flex", alignItems: "start", justifyContent: "space-between" }}>

      <aside className="asside">
        <div className="brand">
          <h3>BRAND</h3>
          <ul className="list-chek">
            {brands.map((brand, index) => (
              <li className="check" key={index}>

                <label class="contai">
                  <input
                    className="chec"
                    type='checkbox'
                    value={brand}
                    name='brand'
                    id={brand}
                    checked={brand === selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  />
                  <span class="checkmark"></span>
                </label>
                <label className="lab" htmlFor={brand}>{brand}</label>
              </li>
            ))}
          </ul>
          <button className="reset" onClick={() => setSelectedBrand("")}>Reset</button>
        </div>

        <div className="asside-color">
          <h3>COLORS</h3>
          <ul style={{
            display: "flex",
            alignItems: "center", flexWrap: "wrap", gap: "10px", margin: "20px 0"
          }}>
            {colors.map((color, index) => (
              <li key={index}>
                <div
                  key={index}
                  className="color-option"
                  style={{
                    backgroundColor: color,
                    width: '24px',
                    height: '24px',
                    border: "1px solid black",
                    borderRadius: '50%',
                    cursor: 'pointer',
                    outline: selectedColor === color ? "3px solid Dodgerblue" : "",

                  }}
                  onClick={() => setSelectedColor(color)}>
                </div>
              </li>
            ))}
          </ul>
          <button className="reset" onClick={() => setSelectedColor("")}>Reset</button>
        </div>

        <div className="price-range">
          <h3 className="price-label">PRICE RANGE</h3>
          <div>
            <label  htmlFor="minPrice">Min Price:</label>
            <input
            className="price-input"
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="maxPrice">Max Price:</label>
            <input
            className="price-input"
            
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <button className="reset" onClick={() => { setMinPrice(""); setMaxPrice(""); }}>Reset</button>
        </div>
      </aside>

      <main>
        {loading ? (
          <p>Loading...</p>
        ) : products.length ? (
          <div style={{ width: "1000px", display: "flex", flexWrap: "wrap", justifyContent: "start", gap: "50px", alignItems: "center" }}>
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        ) : (
          <p>No products</p>
        )}
      </main>
    </div>
  );
};

export default Products;
