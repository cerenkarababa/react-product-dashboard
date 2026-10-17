import { useState } from 'react'
import ProductList from './components/ProductList.jsx'

function App() {
  const [showProducts, setShowProducts] = useState(true)
  const [name, setName] = useState('')

  function handleToggleProducts() {
    setShowProducts((currentValue) => !currentValue)
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">WEB PROGRAMMING</p>
        <h1>React Product Dashboard</h1>
        <p className="subtitle">
          A simple dashboard built with reusable React components.
        </p>
      </header>

      <section className="welcome-panel" aria-labelledby="welcome-heading">
        <h2 id="welcome-heading">Welcome</h2>
        <label htmlFor="name-input">Your name</label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Type your name"
        />
        <p className="greeting">Hello, {name || 'there'}!</p>
      </section>

      <section className="products-section" aria-labelledby="products-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR CATALOG</p>
            <h2 id="products-heading">Products</h2>
          </div>
          <button type="button" onClick={handleToggleProducts}>
            {showProducts ? 'Hide Products' : 'Show Products'}
          </button>
        </div>

        {showProducts && <ProductList />}
      </section>
    </main>
  )
}

export default App
