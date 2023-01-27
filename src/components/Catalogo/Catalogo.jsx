import React, { useState, useEffect } from "react";
import "./catalogo.scss";

const Catalogo = ({ products }) => {
  const data = products.products.map((item) => {
    return item.product;
  });

  return (
    <div className="card">
      {data.map((data) => (
        <div className="">
          <img src={data.img} className="" alt="ImgBand" />
          <div className="">
            <h5 className="">{data.nombre_evento}</h5>
            <p className="">{data.sede}</p>
            <p className="">{data.ubicacion}</p>
            <p className="">Participacion: {data.participacion}</p>
            <p className="">{data.fecha}</p>
            {/* <Link
            to={`/producto/detalles/${data.id}`}
            className="btn btn-primary"
            >
            Ir a detalles
          </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Catalogo;

// const filteredProducts = data.filter(
//   (data) => data.id_categoria === 1
// );
