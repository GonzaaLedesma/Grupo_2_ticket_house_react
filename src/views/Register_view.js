import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/userContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

const Login_view = () => {
  const { user, isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar/>
      <Register/>
      <Footer />
    </div>
  );
};

export default Login_view;