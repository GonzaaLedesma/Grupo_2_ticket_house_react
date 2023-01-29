import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/userContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ingreso from "../components/Ingreso";

const Login_view = () => {
  const { user, isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar/>
      <Ingreso/>
      <Footer />
    </div>
  );
};

export default Login_view;

      // <button
      //   className="links"
      //   style={{ backgroundColor: "red" }}
      //   onClick={() => {
      //     isLoggedIn ? logout() : login("username", "password");
      //   }}
      // >
      //   {isLoggedIn ? "Logout" : "Login"}
      // </button>;