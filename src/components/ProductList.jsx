import { useState } from 'react'
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
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter((product) => {
    const searchText = searchTerm.trim().toLowerCase()

    return (
      product.title.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
    )
  })

  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
  }

  function handleClearSearch() {
    setSearchTerm('')
  }

  return (
    <div className="product-catalog">
      <div className="product-search">
        <label htmlFor="product-search-input">Search products</label>
        <input
          id="product-search-input"
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name or description..."
        />
        <p className="search-results" aria-live="polite">
          {filteredProducts.length}{' '}
          {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try searching with another product name or keyword.</p>
          <button type="button" onClick={handleClearSearch}>
            Clear Search
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductList
