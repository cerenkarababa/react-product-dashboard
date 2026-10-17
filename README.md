# React Product Dashboard

A small React application built with Vite for the Web Programming assignment.

## File organization

- `src/main.jsx` starts the React application and renders `App`.
- `src/App.jsx` manages the name input and product-list visibility with `useState`.
- `src/components/Card.jsx` is a reusable layout wrapper that renders its `children`.
- `src/components/Product.jsx` displays one product using props.
- `src/components/ProductList.jsx` stores the static product data and renders products with `.map()`.

## Features

- Show and hide the product list.
- Type a name into a controlled input.
- Display a greeting using the current name.
- Render three static products with stable keys.
- Use simple styling without external component libraries.

## Challenges

One important part of this assignment is deciding which component owns each responsibility. `App` owns the interactive state, `ProductList` owns the static product data and list rendering, `Product` displays one product through props, and `Card` only provides a wrapper for its children. Keeping these responsibilities separate makes the code easier to understand and maintain.

## Run locally

Install dependencies with `npm install`, then start the development server with `npm run dev`.
