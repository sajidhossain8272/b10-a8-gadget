import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import ProductData from "../ProductData";

const Product = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let filteredProducts = [...ProductData];
    if (category !== "All Product") {
      filteredProducts = ProductData.filter(
        (product) => product.category === category
      );
    }

    const shuffledProducts = filteredProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 9);

    setProducts(shuffledProducts);
  }, [category]);

  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Product;
