# React Product Dashboard

A React application built with Vite for the Web Programming assignment. It demonstrates reusable components, props, state management, controlled inputs, conditional rendering, and list filtering.

## Features

- Show and hide the product list.
- Enter a name into a controlled input and display a personalized greeting.
- Display three static products with their names, prices, and descriptions.
- Search products by name or description.
- Display the number of matching products.
- Show a message when no products match the search.
- Clear the search to display all products again.
- Use responsive styling for desktop and mobile screens.
- Provide accessible labels and feedback for interactive elements.

## Project Structure

```text
assignment5/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── components/
        ├── Card.jsx
        ├── Product.jsx
        └── ProductList.jsx
```

## Component Responsibilities

- **`main.jsx`**: Creates the React root, renders the application, and imports the stylesheet.
- **`App.jsx`**: Manages the name input and product-list visibility using `useState`.
- **`Card.jsx`**: Provides a reusable card layout using the `children` prop.
- **`Product.jsx`**: Displays a product's title, description, and price using props.
- **`ProductList.jsx`**: Stores the static product data, manages the search input, filters products, and renders the matching results.
- **`styles.css`**: Defines the dashboard layout, product cards, search interface, and responsive styling.

## Technologies

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- ESLint

## Getting Started

### Requirements

Node.js and npm must be installed.

### Installation

Clone the repository and open its directory:

```bash
git clone https://github.com/cerenkarababa/react-product-dashboard.git
cd react-product-dashboard
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Validation

Check the code with ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## How to Use

1. Enter your name in the welcome section.
2. Use the button to show or hide the product list.
3. Enter a product name or a keyword from its description in the search field.
4. Review the matching products and the result count.
5. Select **Clear Search** to restore the full product list.

## Challenges and Lessons Learned

One challenge was separating responsibilities between components. `App` manages the main interactive state, while `ProductList` handles the product data and search functionality. `Product` displays product information through props, and `Card` provides a reusable wrapper.

Implementing search also required a controlled input, array filtering, and conditional rendering for empty results. These choices help keep the application organized and easier to maintain.
