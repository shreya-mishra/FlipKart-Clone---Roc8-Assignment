import { Button } from "react-bootstrap";
import "./Sidebar.scss";
import { products } from "../../data/product";
import { addFilter, filterTheProducts } from "../../function/filter";

const Sidebar = ({
  setsortValue,
  setFilterValues,
  filterValues,
  sortValue,
  setProducts,
}) => {
  const clearFilters = () => {
    setsortValue();
    setFilterValues({
      size: [],
      brand: [],
      idealFor: [],
    });
    filterTheProducts(products, sortValue, filterValues);
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((el) => (el.checked = false));
  };

  return (
    <div className='sidebar'>
      <span className='sidebar__title'>
        <span>Filters</span>
        <Button onClick={clearFilters} size='sm'>
          Clear all
        </Button>
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
              onChange={(e) =>
                setFilterValues(addFilter(filterValues, e.target, "brand"))
              }
              name={prod.brand}
              value={prod.brand}
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
              onChange={(e) =>
                setFilterValues(addFilter(filterValues, e.target, "size"))
              }
              name={prod}
              value={prod}
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
              onChange={(e) =>
                setFilterValues(addFilter(filterValues, e.target, "idealFor"))
              }
            />
            <label className='mx-2'>{prod}</label>
          </div>
        ))}
      </div>
      <Button
        onClick={() =>
          setProducts(filterTheProducts(products, sortValue, filterValues))
        }>
        Filter
      </Button>
    </div>
  );
};

export default Sidebar;
