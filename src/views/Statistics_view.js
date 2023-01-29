import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Estadisticas from "../components/Estadisticas";

const Statistics_view = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
      console.log("%cSe Monto El Componente","Color: Green");
      fetch("http://localhost:3001/api/productos")
        .then(response => response.json())
        .then(data => {
          setProducts({
            products:data.productsWithDetail
          })
        })
        .catch(error => console.error(error));
    },[])
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
    if(products.length === 0) return null;
    if(users.length === 0) return null;

  return (
    <div>
        <Navbar/>
        <Estadisticas products={products} users={users}/>
        <Footer/>
    </div>
  )
}

export default Statistics_view