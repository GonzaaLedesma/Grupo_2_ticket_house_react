import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Carrusel from "./components/Carrusel";
import MiniNav from "./components/MiniNav";
import CategoriasHome from "./components/CategoriasHome";
import Catalogo from "./components/Catalogo";

function App() {
  return (
    <div className="ajusteVista">
      <div className="navVista">
        <Navbar />
      </div>
      <div className="homeVista">
        <MiniNav />
        <div className="carruselVista">
          <Carrusel />
        </div>
        <CategoriasHome />
        <Catalogo />
      </div>
    </div>
  );
}

export default App;
