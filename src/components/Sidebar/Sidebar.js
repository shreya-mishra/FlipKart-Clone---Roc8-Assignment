import { Button } from "react-bootstrap";
import "./Sidebar.scss";
import { products } from "../../data/product";

const Sidebar = ({
  setProducts,
  allProducts,
  selectedFilter,
  setSelectedFilter,
}) => {
  const handleBrandChange = (brandValue, checked) => {
    let selectedBrand = [];
    if (checked) {
      selectedBrand = selectedFilter.brand.filter(
        (item) => item !== brandValue
      );
    } else {
      selectedBrand = [...selectedFilter.brand, brandValue];
    }
    setSelectedFilter({
      ...selectedFilter,
      brand: selectedBrand,
    });
  };
  const handleSizeChange = (sizeValue, checked) => {
    let selectedSize = [];
    if (checked) {
      selectedSize = selectedFilter.size.filter((item) => item !== sizeValue);
    } else {
      selectedSize = [...selectedFilter.size, sizeValue];
    }
    setSelectedFilter({
      ...selectedFilter,
      size: selectedSize,
    });
  };

  return (
    <div className='sidebar'>
      <span className='sidebar__title'>
        <span>Filters</span>
        {/* <Button onClick={() => console.log("clear filter")} size='sm'>
          Clear all
        </Button> */}
      </span>
      <hr />
      <div className='sidebar__categories'>
        <span>Brands</span>
        {products.map((prod) => (
          <div
            key={prod.brand}
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <input
              type='checkbox'
              onChange={(e) => {
                handleBrandChange(
                  prod.brand,
                  selectedFilter.brand.includes(prod.brand) || false
                );
              }}
              name={prod.brand}
              value={selectedFilter.brand.includes(prod.brand) || false}
            />
            <label className='mx-2'>{prod.brand}</label>
          </div>
        ))}
      </div>
      <div className='sidebar__categories'>
        <span>Sizes</span>
        {["S", "M", "L", "XL", "XXL"].map((prod) => (
          <div
            key={prod}
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <input
              type='checkbox'
              name={prod}
              value={prod}
              onChange={(e) => {
                handleSizeChange(
                  prod,
                  selectedFilter.size.includes(prod) || false
                );
              }}
              name={prod.size}
              value={selectedFilter.size.includes(prod) || false}
            />
            <label className='mx-2'>{prod}</label>
          </div>
        ))}
      </div>
      <div className='sidebar__categories'>
        <span>Ideal for</span>
        {["Men", "Women", "Girl", "Boy", "Senior"].map((prod) => (
          <div
            key={prod}
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <input
              type='checkbox'
              name={prod}
              value={prod}
              onChange={(e) => console.log("filter gender", e)}
            />
            <label className='mx-2'>{prod}</label>
          </div>
        ))}
      </div>
      <Button onClick={() => console.log("clicked")}>Filter</Button>
    </div>
  );
};

export default Sidebar;
