import React from "react";
import Statement from "../components/Statement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Footer/>
      <Statement />
    </div>
  );
};

export default Home;
