import React from "react";
// import React, {useEffect, useContext} from "react";
import CategoriasHome from "../components/CategoriasHome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import { AuthContext } from '../context/userContext';

const Home = () => {
  // const { user,isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <div className="ajusteHome">
      <Navbar />
      <CategoriasHome />
      <Footer/>
    </div>
  );
};

export default Home;
