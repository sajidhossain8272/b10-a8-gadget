import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
       <div className="h-screen flex items-center justify-center bg-gray-100 text-center rounded-2xl ">
      <div className="p-40 bg-white shadow-2xl rounded-lg">
        <h1 className="text-6xl font-bold text-red-500 sora-bold">404</h1>
        <p className="text-xl mt-4 text-gray-700">Error! Page Not Found.</p>
        <p className="mt-2 text-gray-500 sora-semi-bold">Sorry, the page you are looking for does not exist or is under Construction.</p>
        <NavLink
          to="/"
          className="sora-regular mt-6 inline-block px-6 py-2 text-white bg-[#9538E2] rounded-full hover:bg-gradient-to-r from-[#9538E2]"
        >
          Go Back to Home
        </NavLink>
      </div>
    </div>
    </div>
  )
}

export default ErrorPage