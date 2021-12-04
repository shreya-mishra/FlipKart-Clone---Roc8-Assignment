import { Button } from "react-bootstrap";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <span className='sidebar__title'>
        <span>Filters</span>
        <Button onClick={() => console.log("clear filter")} size='sm'>
          Clear all
        </Button>
      </span>
      <hr />
      <div className='sidebar__categories'>
        <span>Brands</span>
        {["abrand", "bbrand"].map((prod) => (
          <div
            key={prod}
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <input
              type='checkbox'
              onChange={(e) => console.log("filter brands", e)}
              name={prod}
              value={prod}
            />
            <label className='mx-2'>{prod}</label>
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
              onChange={(e) => console.log("filter size", e)}
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
