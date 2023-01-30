import logo from "../../assets/images/Ticket_House_var1.svg";
import "./navBar.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
// import { AuthContext } from '../../context/userContext';
// import { useContext } from "react";

function Navbar() {
  // const { user, isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <div className="contenedorNavHouse">
      <div className="navHouse">
        <ul>
          <h5>NOSOTROS</h5>
          <div className="dropDownHouse">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Ticket
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/">
                  <Dropdown.Item>Home</Dropdown.Item>
                </Link>
                <Link to="/products">
                  <Dropdown.Item>Catalogo</Dropdown.Item>
                </Link>
                <Link to="/Statistics">
                  <Dropdown.Item>Estadisticas</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="listHouse">
            <li>
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/products">
                Catalogo
              </Link>
            </li>
            <li>
              <Link className="links" to="/Statistics">
                Estadisticas
              </Link>
            </li>
          </div>
        </ul>
        <Link className="linkLogo" to="/">
          <img className="logoHouse" alt="logo" src={logo} />
        </Link>
        <ul>
          <h5>USUARIOS</h5>
          <div className="dropDownHouse">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                House
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/Login">
                  <Dropdown.Item>Login</Dropdown.Item>
                </Link>
                <Link to="/products">
                  <Dropdown.Item>Registro</Dropdown.Item>
                </Link>
                <Link to="/News">
                  <Dropdown.Item>Novedades</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="listHouse">
            <li>
              <Link className="links" to="/Login">
                Login
              </Link>
            </li>
            <li>
              <Link className="links" to="/Register">
                Registro
              </Link>
            </li>
            <li>
              <Link className="links" to="/News">
                Novedades
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
