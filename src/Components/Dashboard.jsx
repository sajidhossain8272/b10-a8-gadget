import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ cart, wishlist }) => {
  const [activeTab, setActiveTab] = useState("cart");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const notify3 = () => toast("Purchase was successful!");


  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

  };
  const handleCloseModalSuccess = () => {
    setIsModalOpen(false);
    notify3()

  };

  return (
    <div className='p-4 bg-gray-100 sora-regular'>
      <Nav isProductDetailsPage={true} isDashboardPage={true} />

      <div className='flex justify-center gap-4'>
        <NavLink
          to='#'
          className={`btn pl-10 pr-10 rounded-full ${
            activeTab === "cart"
              ? "bg-gradient-to-r from-[#9538E2] to-[#C278F8] text-white"
              : ""
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </NavLink>
        <NavLink
          to='#'
          className={`btn pl-10 pr-10 rounded-full ${
            activeTab === "wishlist"
              ? "bg-gradient-to-r from-[#9538E2] to-[#C278F8] text-white"
              : ""
          }`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist
        </NavLink>
      </div>

      {activeTab === "cart" ? (
        <div className='mt-4 pb-64'>
          <div>
            <h3 className='text-3xl mb-4 font-semibold flex justify-center'>
              Shopping Cart
            </h3>
          </div>
          <div className="flex justify-around">
            <p className="sora-extra-bold">Total Cost: <span className="text-green-500"> ${calculateTotalPrice().toFixed(2)}</span></p>
            <button className='btn text-purple-500 bold border-purple-500 rounded-full hover:bg-purple-500 hover:text-white bold'>Sort By Price ↑↓</button>
            <button
              className='btn bg-gradient-to-r from-[#9538E2] to-[#C278F8] rounded-full text-white sora-bold'
              onClick={handlePurchaseClick}
            >
              Purchase
            </button>
          </div>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div className='flex justify-center' key={index}>
                <div className='bg-white flex gap-4 mt-4 border-b-2 py-4 p-8 rounded-xl'>
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className='w-30 h-24 object-cover rounded'
                  />
                  <div className='flex'>
                    <div>
                      <h4 className='sora-bold text-xl pb-2'>
                        {item.product_title}
                      </h4>
                      <p className='sora-light pb-1'>{item.description}</p>
                      <p className='sora-semi-bold '>${item.price}</p>
                    </div>
                  </div>
                  <div className='pt-4'>
                    <button className='btn flex-1 justify-end'>❌</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='flex justify-center text-error pt-2'>
              Your cart is empty.
            </p>
          )}
        </div>
      ) : (
        <div className='mt-4 pb-64 '>
          <h3 className='text-3xl font-semibold flex justify-center'>
            Wishlist
          </h3>
          {wishlist.length > 0 ? (
            wishlist.map((item, index) => (
              <div className='flex justify-center' key={index}>
                <div className='bg-white flex gap-4 mt-4 border-b-2 py-4 p-8 rounded-xl'>
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className='w-30 h-36 object-cover rounded'
                  />
                  <div className='flex'>
                    <div>
                      <h4 className='sora-bold text-xl pb-2'>
                        {item.product_title}
                      </h4>
                      <p className='sora-light pb-1'>{item.description}</p>
                      <p className='sora-semi-bold pb-2'>${item.price}</p>
                      <button className="btn rounded-full bg-[#9538E2] hover:bg-black text-white sora-bold"> Add to Cart</button>
                    </div>
                  </div>
                  <div className='pt-4'>
                    <button className='btn flex-1 justify-end'>❌</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='flex justify-center text-error pt-2'>
              Your wishlist is empty.
            </p>
          )}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/4 pt-10 pb-10 ">
          <div className="flex justify-around">
            <h3 className="text-2xl sora-extrabold text-center mb-4">
              Confirm Purchase
            </h3>

            </div>
            <p className="text-center mb-6 sora-regular">
              Are you sure you want to buy the items of your cart?
            </p>
            <div className="flex justify-center gap-4 sora-regular">
              <button
                className="btn bg-[#9538E2] text-white rounded-full sora-regular"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="btn bg-green-500 text-white rounded-full"
                onClick={handleCloseModalSuccess}
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ToastContainer /> 

    </div>
  );
};

Dashboard.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product_id: PropTypes.string.isRequired,
      product_title: PropTypes.string.isRequired,
      product_image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  wishlist: PropTypes.arrayOf(
    PropTypes.shape({
      product_id: PropTypes.string.isRequired,
      product_title: PropTypes.string.isRequired,
      product_image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired,
};

export default Dashboard;
