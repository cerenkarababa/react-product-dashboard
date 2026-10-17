import Product from './Product.jsx'

const products = [
  { id: 1, title: 'Laptop', price: 1200 },
  { id: 2, title: 'Phone', price: 800 },
  { id: 3, title: 'Tablet', price: 600 },
]

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ProductList
