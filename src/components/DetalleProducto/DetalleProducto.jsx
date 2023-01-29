import React from "react";
import "./detalleProducto.scss";
import imgBottom from "../../assets/images/Detalles/BannerDetallesProducto.jpg";

const DetalleProducto = ({ product }) => {
  const data = product.products.product;
  const dataGeneros = product.products.arrayGeneros;
  return (
    <div className="contenedorDetalle">
      <div>
        <h1>{data.nombre_evento}</h1>
        <div className="contenedorEvento">
          <img src={data.foto_evento} alt={data.nombre_evento} />
          <div className="contenedorDatos">
            <h2>Concierto en {data.sede}</h2>
            <p>{data.biografia}</p>
            <p>Ubicacion: {data.ubicacion}.</p>
            <p>Capacidad de la sede: {data.capacidad_sede}.</p>
            <p>Fecha: {data.fecha}.</p>
            <p>Horario: {data.horario}hs.</p>
            <p>Participacion: {data.participacion}.</p>
            <p>Precio: {data.precio}$</p>
            <p>Descripción: {data.descripcion}.</p>
            <p>Generos:</p>
            <div className="contenedorGenero">
            {dataGeneros.map((generos) => (<p>{generos.genero}</p>))}
            </div>
            <div className="contenedorImg2">
              <img className="img2" src={data.foto_evento} alt={data.nombre_evento} />
            </div>
          </div>
        </div>
      </div>
      <div className="contenedorImg">
        <img className="imgBottom" src={imgBottom} alt="imgBottom" />
      </div>
    </div>
  );
};

export default DetalleProducto;
