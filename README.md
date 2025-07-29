# Clo-set

A product listing page built with **React 19**, **TypeScript**, **Vite**, and **TailwindCSS**.


---

## Features

- **Product Listing**: Displays products fetched from an API, with support for loading skeletons.
- **Filtering**: Filter products by pricing options (Paid, Free, View Only).
- **Search**: Search products by title or creator.
- **Sorting**: Sort products by name or price (ascending/descending).
- **Responsive UI**: Built with TailwindCSS for a modern, responsive design.
- **Context-based State Management**: Uses React Context and Reducer for global filter state.
- **URL State Sync**: Filter and sort state is reflected in the URL for shareable/filterable links.
- **TypeScript Strictness**: Strong typing for all data and state.

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your API base URL:
     ```
     VITE_API_BASE_URL=< enter the url provided along with the assignment>
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as indicated in the terminal).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Core Concepts & Architecture

### Data Flow

- **API Integration**: Product data is fetched from `${VITE_API_BASE_URL}/api/data` using the `fetchData` service.
- **State Management**: Filtering, searching, and sorting state is managed globally using React Context and a reducer (`FilterProvider`).
- **URL Sync**: Filter and sort state is reflected in the URL query parameters for shareable and bookmarkable state.

### Main Components

- **ProductsPage**: The main page, composed of `Navbar`, `SearchBar`, `Filter`, `Sort`, and `Products`.
- **Products**: Fetches and displays products, applies filtering, searching, and sorting.
- **ProductCard**: Renders individual product details.
- **Filter/SearchBar/Sort**: UI controls for filtering, searching, and sorting products.
- **SkeletonLoader**: Displays loading skeletons while data is being fetched.
