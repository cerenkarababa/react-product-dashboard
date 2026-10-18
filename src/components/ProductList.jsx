
import Product from './Product.jsx'

const products = [
  {
    id: 1,
    title: 'Laptop',
    price: 1200,
    description: 'A computer for work, study, and everyday tasks.',
  },
  {
    id: 2,
    title: 'Phone',
    price: 800,
    description: 'A mobile device for communication and daily use.',
  },
  {
    id: 3,
    title: 'Tablet',
    price: 600,
    description: 'A portable device for reading and entertainment.',
  },
]

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  )
}

export default ProductList
