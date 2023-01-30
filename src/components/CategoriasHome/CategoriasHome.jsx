import img2 from "../../assets/images/Categorias/2.jpg";
import img3 from "../../assets/images/Categorias/3.jpg";
import img4 from "../../assets/images/Categorias/4.jpg";
import img1 from "../../assets/images/Categorias/1.jpg";
import { useNavigate } from "react-router-dom";
import "./categoriasHome.scss";

function CategoriasHome() {
  const navigate = useNavigate();
  const handleOnClick = (navigateUrl) =>
    navigate(`/${navigateUrl}`, { replace: true });
  return (
    <div className="categoriasHouse">
      <img
        onClick={() => handleOnClick("products")}
        src={img2}
        alt="imgNuevos"
        title="Nuevos"
      />
      <img
        onClick={() => handleOnClick("products")}
        src={img3}
        alt="imgActuales"
        title="Actuales"
      />
      <img
        onClick={() => handleOnClick("products")}
        src={img4}
        alt="imgProximos"
        title="Proximos"
      />
      <img
        onClick={() => handleOnClick("products")}
        src={img1}
        alt="imgPasados"
        title="Pasados"
      />
    </div>
  );
}

export default CategoriasHome;
