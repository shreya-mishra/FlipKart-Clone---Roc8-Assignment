import SingleCard from "./SingleCard/SingleCard";

const ProductSection = ({ allProducts, setProducts }) => {
  return (
    <div className='productcontainer__cards'>
      {allProducts?.map((product) => (
        <SingleCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductSection;
