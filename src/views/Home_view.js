import React from "react";
import CategoriasHome from "../components/CategoriasHome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="ajusteHome">
      <Navbar />
      <CategoriasHome />
      <Footer/>
    </div>
  );
};

export default Home;
