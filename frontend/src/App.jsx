const { Buffer } = require("buffer");

import { Routes, Route } from "express"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <div className="min-h-screen bg-red-600 transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
