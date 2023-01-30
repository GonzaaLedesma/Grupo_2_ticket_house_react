import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Novedades from "../components/Novedades";

const News_view = () => {
  const [carrito, setCarrito] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    console.log("%cSe Monto El Componente","Color: Green");
    fetch("http://localhost:3001/api/usuarios")
      .then(response => response.json())
      .then(data => {
          setUsers({
          users:data
        })
      })
      .catch(error => console.error(error));
  },[])

  useEffect(()=>{
    console.log("%cSe Monto El Componente","Color: Green");
    fetch("http://localhost:3001/api/productos")
      .then(response => response.json())
      .then(data => {
        setProducts({
          products:data
        })
      })
      .catch(error => console.error(error));
  },[])


  useEffect(()=>{
    console.log("%cSe Monto El Componente","Color: Green");
    fetch("http://localhost:3001/api/carrito")
      .then(response => response.json())
      .then(data => {
        setCarrito({
          carrito:data
        })
      })
      .catch(error => console.error(error));
  },[])

  if(products.length === 0) return null;
  if(users.length === 0) return null;
  if(carrito.length === 0) return null;

  return (
    <div>
        <Navbar/>
        <Novedades carrito={carrito} products={products} users={users}/>
        <Footer/>
    </div>
  )
}

export default News_view