import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection/ProductSection";
import Sidebar from "./components/Sidebar/Sidebar";
import { products } from "./data/product";
import { filterTheProducts } from "./function/filter";

function App() {
  const [allProducts, setProducts] = useState(products);
  const [sortBy, setSortBy] = useState();
  const [filterValues, setFilterValues] = useState({
    size: [],
    brand: [],
    idealFor: [],
  });
  const [filteredProductValues, setFilteredProductValues] = useState([]);

  useEffect(() => {
    console.log(filterTheProducts(filterValues, allProducts));
    setFilteredProductValues(filterTheProducts(filterValues, allProducts));
  }, [filterValues]);

  return (
    <div className='App'>
      <Header />
      <div className='layout'>
        <Sidebar
          selectedFilter={filterValues}
          setSelectedFilter={(filters) => setFilterValues(filters)}
          allProducts={allProducts}
          setProducts={setProducts}
        />
        <ProductSection
          allProducts={filteredProductValues}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
