import React from "react";
import "./estadisticas.scss";

const Estadisticas = ({ products, users }) => {
  // console.log(products.products.countNuevos);
  // console.log(users.users.usuarioWithDetail);

  const totalUsuarios = users.users.count;
  const countRock = users.users.countRock.count;
  const counHardRock = users.users.counHardRock.count;
  const countPop = users.users.countPop.count;
  const countRockAlternativo = users.users.countRockAlternativo.count;
  const countPopPunk = users.users.countPopPunk.count;
  const countPopRock = users.users.countPopRock.count;
    
  const totalProductos = products.products.count;
  const countActuales = products.products.countActuales.count;
  const countNuevos = products.products.countNuevos.count;
  const countProximos = products.products.countProximos.count;
  const countPasados = products.products.countPasados.count;



  return (
    <div className="contendedo">
      <h1>Nuestros Eventos</h1>
      <div className="contenedorPaneles">
        <div className="paneles">
          <h4>Eventos Totales</h4>
          <h5>{totalProductos}</h5>
        </div>
        <div className="paneles">
          <h4>Actuales</h4>
          <h5>{countActuales}</h5>
        </div>
        <div className="paneles">
          <h4>Nuevos</h4>
          <h5>{countNuevos}</h5>
        </div>
        <div className="paneles">
          <h4>Proximos</h4>
          <h5>{countProximos}</h5>
        </div>
        <div className="paneles">
          <h4>Pasados</h4>
          <h5>{countPasados}</h5>
        </div>
      </div>
      <br />
      <h1>Usuarios Y sus Gustos</h1>
      <div className="contenedorPaneles">
        <div className="paneles">
          <h4>Total Usuarios</h4>
          <h5>{totalUsuarios}</h5>
        </div>
        <div className="paneles">
          <h4>Rock</h4>
          <h5>{countRock}</h5>
        </div>
        <div className="paneles">
          <h4>Hard Rock</h4>
          <h5>{counHardRock}</h5>
        </div>
        <div className="paneles">
          <h4>Pop</h4>
          <h5>{countPop}</h5>
        </div>
        <div className="paneles">
          <h4>Rock Alternativo</h4>
          <h5>{countRockAlternativo}</h5>
        </div>
        <div className="paneles">
          <h4>Pop Rock</h4>
          <h5>{countPopRock}</h5>
        </div>
        <div className="paneles">
          <h4>Pop Punk</h4>
          <h5>{countPopPunk}</h5>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
