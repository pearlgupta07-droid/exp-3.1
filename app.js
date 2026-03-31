const { useState } = React;
// ProductCard Component
function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <div className="price">${props.price}</div>

      <div className={
        props.inStock ? "stock in-stock" : "stock out-stock"
      }>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </div>
    </div>
  );
}
// Main App
function App() {
  return (
    <div className="container">
      <ProductCard name="Wireless Headphones" price="129.99" inStock={true} />
      <ProductCard name="Mechanical Keyboard" price="89.99" inStock={false} />
      <ProductCard name="Smart Watch" price="199.99" inStock={true} />
    </div>
  );
}
// Render to DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);