const Cart = ({ products }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <img style={{width:"300px"}} src={p.image_url} alt={p.product_name}  />
            <h2>{p.name}</h2>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
