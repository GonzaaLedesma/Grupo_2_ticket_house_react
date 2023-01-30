import React, { useEffect, useState } from "react";
import DetalleProducto from "../components/DetalleProducto";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    console.log("%cSe Monto El Componente", "Color: Green");
    fetch(`http://localhost:3001/api/productos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts({
          products: data,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  if (product.length === 0) return null;
  return (
    <div className="ajusteHome">
      <Navbar />
      <DetalleProducto product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
