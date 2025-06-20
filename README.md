# 🍕 Foodnow - Pizza Ordering App

Foodnow is a modern pizza ordering web application built with Vue 3. It provides users with an intuitive interface to browse pizza options, customize their orders, and check out seamlessly.

**Live Demo:** [https://foodnow-theta.vercel.app](https://foodnow-theta.vercel.app)

## 📊 Performance

![Lighthouse Score](https://raw.githubusercontent.com/irfan-za/foodnow/refs/heads/main/public/images/lighthouse-score.png)

Check the performance [here](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Ffoodnow-theta.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=en-US&utm_source=lh-chrome-ext).

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or newer)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```sh
git clone https://github.com/irfan-za/foodnow.git
cd foodnow
```

2. Install dependencies:

```sh
pnpm install
```

3. Start the development server:

```sh
pnpm dev
```

## ✨ Features

- **Pizza Selection**: Choose from a variety of pre-designed pizza options
- **Custom Pizza Builder**: Create your own pizza with customizable size and toppings
- **Dynamic Pricing**: Real-time price calculation based on selections
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Order Summary**: Clear breakdown of your order with item-by-item pricing
- **Special Offers**: Promotional prices and discounts on select items

## 🛠️ Tech Stack

- **Vue 3**: JavaScript framework with Composition API
- **TypeScript**: For type safety and better developer experience
- **Vue Router**: For navigation and routing
- **Pinia**: State management solution
- **SCSS/SASS**: CSS preprocessor for advanced styling capabilities
- **BEM Methodology**: For maintainable and scalable CSS architecture
- **Vite**: Next generation frontend build tool

## 📁 Folder Structure

```
foodnow/
├── public/                # Public assets
├── src/
│   ├── assets/            # Project assets
│   │   ├── icons/         # Icon files
│   │   └── images/        # Image files
│   ├── components/        # Vue components
│   │   ├── layout/        # Layout components
│   │   └── pizza/         # Pizza-related components
│   ├── json/              # Data files
│   │   ├── pizza-list.json     # Available pizzas
│   │   ├── size-list.json      # Available sizes
│   │   └── topping-list.json   # Available toppings
│   ├── lib/               # Utility libraries
│   ├── router/            # Vue Router configuration
│   ├── stores/            # Pinia store modules
│   ├── styles/            # Global SCSS styles
│   │   ├── layout/        # Layout-specific styles
│   │   └── pizza/         # Pizza-specific styles
│   ├── types/             # TypeScript type definitions
│   └── views/             # Route view components
├── App.vue                # Root component
├── main.ts               # Application entry point
└── README.md             # Project documentation
```

## 📝 Design Approach

- **Component-Based Architecture**: Modular components for better reusability and maintainability
- **BEM Methodology**: Block Element Modifier approach to CSS for consistent and scalable styling
- **Responsive Design**: Mobile-first approach to ensure great experience on all devices
- **Composition API**: Leveraging Vue 3's Composition API for better organization of component logic

## 📄 License

Foodnow is licensed under the [MIT License](https://github.com/irfan-za/foodnow/blob/main/LICENSE.md).
