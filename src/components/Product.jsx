
import Card from './Card.jsx'

function Product({ title, price, description }) {
  return (
    <Card>
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toLocaleString('en-US')}</p>
    </Card>
  )
}

export default Product
