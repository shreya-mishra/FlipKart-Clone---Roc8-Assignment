import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection/ProductSection";
import Sidebar from "./components/Sidebar/Sidebar";
import { products } from "./data/product";
import { filterTheProducts } from "./function/filter";

function App() {
  const [allProducts, setProducts] = useState(products);
  const [sortValue, setsortValue] = useState();
  const [filterValues, setFilterValues] = useState({
    size: [],
    brand: [],
    idealFor: [],
  });

  return (
    <div className='App'>
      <Header />
      <div className='layout'>
        <Sidebar
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          allProducts={allProducts}
          sortValue={sortValue}
          setProducts={setProducts}
          setsortValue={setsortValue}
        />
        <ProductSection
          filterValues={filterValues}
          allProducts={allProducts}
          sortValue={sortValue}
          setProducts={setProducts}
          setsortValue={setsortValue}
        />
      </div>
    </div>
  );
}

export default App;
