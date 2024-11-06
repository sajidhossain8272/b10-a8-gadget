import { useParams } from "react-router-dom";
import ProductData from "../ProductData";
import Nav from "./Nav";
import Footer from "./Footer";
import RatingStars from "./RatingStars";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

const ProductDetails = ({ addToCart, addToWishlist }) => {
  const { id } = useParams();
  const product = ProductData.find((p) => p.product_id === id);
  
  const [isAddedToWishlist, setIsAddedToWishlist] = React.useState(false);
  
  const notify = () => toast("Item Added to Cart!");
  const notify2 = () => toast("Item Added to Wishlist!");

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setIsAddedToWishlist(true); 
    notify2(); 
  };

  return (
    <div className='p-4'>
      <Nav isProductDetailsPage={true} />
      <div className='lg:relative flex lg:-mt-56 justify-center lg:p-20'>
        <div className='border-white bg-white shadow-2xl border-2 p-4 bg-transparent rounded-3xl lg:flex gap-4'>
          <img
            src={product.product_image}
            alt={product.product_title}
            className='lg:max-w-prose object-cover rounded-2xl'
          />
          <div>
            <h2 className='text-2xl font-semibold mt-2'>
              {product.product_title}
            </h2>
            <p className='text-xl mt-2'>Price: ${product.price}</p>
            <p className='text-lg mt-4'>{product.description}</p>
            <ol className='list-decimal pl-5 mt-2 space-y-1'>
              {product.specification.map((spec, index) => (
                <li key={index} className='text-lg'>
                  {spec}
                </li>
              ))}
            </ol>
            <div className='items-center mt-4'>
              <h2 className='text-lg sora-bold mr-2'>Rating:⭐</h2>
              <RatingStars rating={product.rating} />
            </div>
            <div className='flex gap-4 mt-4'>
              <button
                className='bg-white btn border-2'
                onClick={() => {
                  addToCart(product);
                  notify(); 
                }}
              >
                Add to Cart <img width={12} src='/cart.png' alt='' />
              </button>
              <button
                className='bg-white btn w-12 rounded-full border-2'
                onClick={handleAddToWishlist}
                disabled={isAddedToWishlist}
              >
                <img src='/heart.png' alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer /> 
    </div>
  );
};

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired,
};

export default ProductDetails;
