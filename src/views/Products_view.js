import React, { useEffect, useState } from 'react'
import Catalogo from '../components/Catalogo'
import Navbar from '../components/Navbar'


const Products = () => {
  const [products, setProducts] = useState([]);

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

    if(products.length == 0) return null;
  return (
    <div>
        <Navbar/>
        <Catalogo products={products}/>
    </div>
  )
}

export default Products