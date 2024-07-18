import { FaCartShopping } from "react-icons/fa6";

import Button from "../button/Button";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ product, cart, setCart }) => {
  return (
  <div className="product-container" style={{border:"none"}}>
      <div className="product-content" style={{width:"300px", display:"flex", flexDirection:"column" }} >
     
      <img style={{ width:"270px", height:"300px",objectFit:"contain",boxShadow:" -1px 2px 13px -2px rgba(34, 60, 80, 0.2)",marginBottom:"20px"}} src={product.image_url} alt={product.product_name} />
    
      <h4 style={{fontFamily:"Hammersmith One , sans-serif", fontSize:"20px", fontWeight:"400",}}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </h4>
      <p style={{width:"259px",height:"69px", margin:"15px 0", fontFamily:"Readex Pro, sans-serif", fontSize:"18px", fontWeight:"300"}}>{product.description}</p>

      <div className={styles.colors}>
        {product.color_options.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
            }}
            className={styles.color}
          />
        ))}
      </div>

      <strong style={{fontFamily:"Readex Pro, sans-serif",fontSize:"22px", fontWeight:"600"}}>${product.price}</strong>
      <div>
        <Button onClick={() => setCart([...cart, product])}>
         <img style={{width:"24px", height:"24px"}} src="/shop.png" alt="loading" />
          <span style={{fontSize:"20px", fontWeight:"700",fontFamily:"Inter, sans-serif",color:"white" }} >Add to Cart</span>
        </Button>
      </div>
    </div>
  </div>
  );
};

export default Card;
