import imgTest from "../../assets/images/Catalogo/ejemplo1.jpg";
import icono from "../../assets/images/Catalogo/ejemplo.jpg";
import "./categoriasHome.scss";

function CategoriasHome() {
  return (
    <div className="categoriasHouse">
      <div className="divisor">
        <div className="imgCategorias">
          <img src={imgTest} alt="" />
          <h5>Actuales</h5>
        </div>
        <div className="imgCategorias">
          <img src={imgTest} alt="" />
          <h5>Nuevos</h5>
        </div>
        <div className="imgCategorias">
          <img src={imgTest} alt="" />
          <h5>Proximos</h5>
        </div>
        <div className="imgCategorias">
          <img src={imgTest} alt="" />
          <h5>Pasados</h5>
        </div>
      </div>
      <div className="novedadesHome">
        <div className="miniEvento">
          <img className="iconoNovedad" src={icono} alt="" />
          <h5>Evento</h5>
        </div>
        <div className="miniEvento">
          <img className="iconoNovedad" src={icono} alt="" />
          <h5>Evento</h5>
        </div>
        <div className="miniEvento">
          <img className="iconoNovedad" src={icono} alt="" />
          <h5>Evento</h5>
        </div>
        <div className="miniEvento">
          <img className="iconoNovedad" src={icono} alt="" />
          <h5>Evento</h5>
        </div>
        <div className="miniEvento">
          <img className="iconoNovedad" src={icono} alt="" />
          <h5>Evento</h5>
        </div>
      </div>
    </div>
  );
}

export default CategoriasHome;
