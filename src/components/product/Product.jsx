import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching the product:', error);
      }
    }

    fetchProductById();
  }, [productId]);

  return (
    <div className="containe">
      {product && (
        <>
          <div>
            <p>Products / Gaming Headsets & Audio / <span style={{ color: "#0D2612", fontWeight: "500", fontSize: "20px", fontFamily: "Readex Pro, sans-serif" }}> {product.name}</span></p>
          </div>
          <div className="single-product">
            <div className="content">
              <div className="big-image big">
                <img className="image" src={product.image_url} alt={product.name} />
              </div>

              <div className="image-min">
                {Array(5).fill().map((_, index) => (
                  <img key={index} className="image-mini" src={product.image_url} alt={product.name} />
                ))}
              </div>
            </div>

            <div className="father-desc">
              <div className="name-child">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-decrip">{product.description}</p>
                <div className="child-count">
                  <img className="star" src="/star.png" alt="star rating" />
                  <p>({product.rating_counts})</p>
                </div>
              </div>

              <div className="price-child">
                <h3 className="product-price">${product.price} or 99.99/month</h3>
                <p className="product-price-desc">Suggested payments with 6 month special financing</p>
              </div>

              <div className="product-color">
                <h2 className="choose">Choose a color</h2>
                <div className="colors">
                  {product.color_options.map((color, index) => (
                    <div
                      key={index}
                      className="color-option"
                      style={{
                        backgroundColor: color,
                        width: '50px',
                        height: '50px',
                        border: "1px solid black",
                        borderRadius: '50%',
                        cursor: 'pointer',
                      }}
                      title={color}
                    >
                    </div>
                  ))}
                </div>
              </div>


              <div className="count-product">
                <div className="fath-count">
                  <div className="count">
                    <img style={{ width: "30px" }} src="/minus.png" alt="decrease quantity" />
                    <h2>1</h2>
                    <img style={{ width: "30px" }} src="/plus.png" alt="increase quantity" />
                  </div>
                  <div>
                    <p style={{ width: "157px" }}>Only <span className="item">16 items</span> left! Don't miss it</p>
                  </div>
                </div>
                <div className="btn-shop">
                  <button className="shop-btn"><img style={{ width: "26px" }} src="/shop.png" alt="shop" /> Add to Cart</button>
                  <img style={{ width: "60px" }} src="/yurak.svg" alt="wishlist" />
                </div>
                <div className="contents">
                  <div className="deliv ver">
                    <div>
                      <img style={{ width: "25px", height: "25px" }} src="/schoolbus.png" alt="delivery" />
                    </div>
                    <div>
                      <h4>Free delivery</h4>
                      <p>Enter your Postal Code for Delivery Availability</p>
                    </div>
                  </div>

                  <div className="deliv">
                    <div>
                      <img style={{ width: "25px", height: "25px" }} src="/box.png" alt="delivery box" />
                    </div>
                    <div>
                      <h4>Free delivery</h4>
                      <p>Enter your Postal Code for Delivery Availability</p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
