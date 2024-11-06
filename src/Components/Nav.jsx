import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Nav = ({ isProductDetailsPage, isDashboardPage, isContactUsPage }) => {
  return (
    <div>
      <section>
        <nav className={`${isProductDetailsPage ? "pb-10" : "lg:pt-12"}`}>
          <div
            className={`${
              isProductDetailsPage
                ? "bg-gray-600 lg:rounded-3xl lg:pl-20 lg:pr-20 lg:pt-4 hover:bg-gradient-to-r from-gray-600 to-gray-800"
                : isContactUsPage
                ? "bg-[#9538E2] sora-regular lg:ml-12 lg:mr-12 lg:pl-20 lg:pr-20 lg:pt-4 lg:rounded-3xl"
                : "bg-[#9538E2] sora-regular lg:ml-12 lg:mr-12 lg:pl-20 lg:pr-20 lg:pt-4 lg:rounded-3xl"
            }`}
          >
            <div className="navbar text-white">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
                  >
                    <li>
                      <NavLink to="/" activeClassName="active" exact>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/statistics" activeClassName="active" exact>
                        Statistics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard" activeClassName="active" exact>
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" activeClassName="active" exact>
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <NavLink to="/" activeClassName="active" exact>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/statistics" activeClassName="active" exact className="p-2">
                      Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard" activeClassName="active" exact>
                      Dashboard
                    </NavLink>
                  </li>
                  <NavLink className="pt-2" to="/contact" activeClassName="active" exact>
                    Contact Us
                  </NavLink>
                </ul>
              </div>
              <div className="navbar-end flex gap-4">
                <NavLink to="/dashboard" className="bg-white btn w-12 rounded-full">
                  <img src="/cart.png" alt="Cart" />
                </NavLink>
                <button className="bg-white btn w-12 rounded-full">
                  <img src="/heart.png" alt="Wishlist" />
                </button>
              </div>
            </div>

            <div className="text-white pt-10">
              <h1 className="flex justify-center sora-bold lg:text-6xl text-3xl text-center p-2 lg:p-0">
                {isDashboardPage
                  ? "Dashboard"
                  : isProductDetailsPage
                  ? "Product Details"
                  : isContactUsPage
                  ? "Contact Us"
                  : "Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
              </h1>
              <p className="flex justify-center pt-4 text-sm text-center pl-2 pr-2 lg:pl-0 lg:pr-0">
                {isContactUsPage
                  ? "Contact us at info@GadgetHeaven.com"
                  : isProductDetailsPage
                  ? "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                  : "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
              </p>

              <div className="flex justify-center pt-4 lg:pb-64 pb-10">
                {!isProductDetailsPage && !isContactUsPage && (
                  <NavLink to="/dashboard" className="btn rounded-2xl text-[#9538E2] sora-bold">
                    Shop Now
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

Nav.propTypes = {
  isProductDetailsPage: PropTypes.bool,
  isDashboardPage: PropTypes.bool,
  isContactUsPage: PropTypes.bool,
};

export default Nav;
