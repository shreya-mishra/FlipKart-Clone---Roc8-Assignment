import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection/ProductSection";
import Sidebar from "./components/Sidebar/Sidebar";
import { products } from "./data/product";

function App() {
  const [allProducts, setProducts] = useState(products);

  return (
    <div className='App'>
      <Header />
      <div className='layout'>
        <Sidebar />
        <ProductSection allProducts={allProducts} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
