import React from "react";
import "./novedades.scss";

const Novedades = ({ carrito, products, users }) => {
  const allProducts = products.products.productsWithDetail;
  const productsArray = allProducts.map((item) => item.product);
  const ultimoProducto = productsArray[productsArray.length - 1];

  const allUsers = users.users.usuarioWithDetail;
  const usersArray = allUsers.map((item) => item.usuario);
  const ultimoUsuario = usersArray[usersArray.length - 1];

  const allCart = carrito.carrito.count.rows;
  const totalVentas = carrito.carrito.count.count;
  const totalTickets = allCart
    .filter((item) => item.activo === true)
    .reduce((acc, item) => acc + item.cantidad, 0);

  const cartArray = allCart
    .sort(function (a, b) {
      return b.cantidad - a.cantidad;
    })
    .filter(function (item) {
      return item.activo === true;
    })
    .map((item) => item.evento_id);

  const filteredProductsArray = productsArray.filter((product) =>
    cartArray.some((eventId) => eventId === product.id)
  );

  const ultimoCarrito = new Set(cartArray);

  const setArray = [...ultimoCarrito].slice(0, 5);
  const filteredCartArray = productsArray.filter((product) =>
    setArray.some((eventId) => eventId === product.id)
  );

  return (
    <div>
      <h1>Ultimo Producto Y Usuario </h1>
      <div className="contenedorNoticias">
        <div className="panelDatos">
          <div>
            <h1>Ultimo Producto</h1>
            <h2>
              {ultimoProducto.id} : {ultimoProducto.nombre_evento}
            </h2>
            <img src={ultimoProducto.img} alt="" />
            <p>Ubicacion: {ultimoProducto.ubicacion}.</p>
            <p>Sede: {ultimoProducto.sede}.</p>
            <p>Participacion: {ultimoProducto.participacion}.</p>
          </div>
        </div>
        <div className="panelDatos">
          <div>
            <h1>Ultimo Usuario</h1>
            <h2>
              {ultimoUsuario.id} : {ultimoUsuario.nombre_usuario}
            </h2>
            <img src={ultimoUsuario.foto_perfil} alt="" />
            <p>
              {ultimoUsuario.nombre} {ultimoUsuario.apellido}.
            </p>
            <p>Genero: {ultimoUsuario.identidad_de_genero}.</p>
            <p>Pais: {ultimoUsuario.pais}.</p>
          </div>
        </div>
      </div>
      <h1>ventas</h1>
      <div className="contenedorPaneles">
        <div className="paneles">
          <h4>Total de Ventas</h4>
          <h5>{totalVentas}</h5>
        </div>
        <div className="paneles">
          <h4>Total de Tickets</h4>
          <h5>{totalTickets}</h5>
        </div>
      </div>
      <h1>Eventos mas vendidos</h1>
      <div className="contenedorNoticiasExtra">
        {filteredProductsArray.map((product) => (
          <div className="panelDatosExtra">
            <div>
              <h1>{product.nombre_evento}</h1>
              <h2>
                {product.id} : {product.nombre_evento}
              </h2>
              <img src={product.img} alt="" />
              <p>Ubicacion: {product.ubicacion}.</p>
              <p>Sede: {product.sede}.</p>
              <p>Participacion: {product.participacion}.</p>
            </div>
          </div>
        ))}
      </div>
      <h1>Ultimos 5 vendidos</h1>
      <div className="contenedorNoticiasExtra">
        {filteredCartArray.map((product) => (
          <div className="panelDatosExtra">
            <div>
              <h1>{product.nombre_evento}</h1>
              <h2>
                {product.id} : {product.nombre_evento}
              </h2>
              <img src={product.img} alt="" />
              <p>Ubicacion: {product.ubicacion}.</p>
              <p>Sede: {product.sede}.</p>
              <p>Participacion: {product.participacion}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novedades;
