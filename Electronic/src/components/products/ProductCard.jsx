export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p className="brand">{product.brand}</p>

      <p className="price">
        ₹{product.discountPrice}
        <span className="old-price">₹{product.price}</span>
      </p>

      <button className="details-btn">View Details</button>
    </div>
  );
}
