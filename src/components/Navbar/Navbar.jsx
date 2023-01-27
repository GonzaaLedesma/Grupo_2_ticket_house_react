import logo from "../../assets/images/Ticket_House_var1.svg";
import "./navBar.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="contenedorNavHouse">
      <div className="navHouse">
        <ul>
          <h5>NOSOTROS</h5>
          <div className="dropDownHouse">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="listHouse">
            <li>Home</li>
            <li><Link className="links" to="products">Terminos</Link></li>
            <li>Ayuda</li>
          </div>
        </ul>
        <img className="logoHouse" src={logo} />
        <ul>
          <h5>USUARIOS</h5>
          <div className="dropDownHouse">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="listHouse">
            <li>Perfil</li>
            <li>Registro</li>
            <li>Carrito</li>
          </div>
        </ul>
      </div>
      </div>

      );
    }
    
    export default Navbar;
    
