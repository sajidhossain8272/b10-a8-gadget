import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className='bg-white Sora-regular border rounded-lg p-4 shadow-md'>
      <img
        src={product.product_image}
        alt={product.product_title}
        className='w-full object-cover rounded'
      />
      <h2 className='text-lg font-semibold mt-2'>{product.product_title}</h2>
      <p className='text-xl text-[#09080F] opacity-60 mt-2'>
        Price: ${product.price}
      </p>
      <Link to={`/product/${product.product_id}`}>
        <button className='mt-2 bg-white border-2 border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:text-white py-1 px-4 rounded-full'>
          View Details
        </button>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    product_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired,
};

export default ProductCard;
