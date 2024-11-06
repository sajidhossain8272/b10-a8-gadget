import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className='bg-[#f6f6f6]'>
      <Nav />
      <Banner />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
