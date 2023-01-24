import logo from "../../assets/images/Ticket_House_var1.svg";
import "./navBar.scss";

function Navbar() {
  return (
    <div className="navHouse">
      <img className="logoHouse" src={logo} />
      <div className="listHouse">
        <ul>
          <h5>Eventos</h5>
          <li>Busca</li>
          <li>Catalogo</li>
          <li>Nuevos</li>
        </ul>
        <ul>
          <h5>Tu Zona</h5>
          <li>Tu Perfil</li>
          <li>Registro</li>
          <li>Carrito</li>
        </ul>
        <ul>
          <h5>Sobre nosotros</h5>
          <li>Terminos</li>
          <li>Condiciones</li>
          <li>Preguntas</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
