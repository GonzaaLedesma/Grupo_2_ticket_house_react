import { Link } from "react-router-dom";
import "./catalogo.scss";

const Catalogo = ({ products }) => {
  const data = products.products.map((item) => {
    return item.product;
  });
  const actuales = data.filter((data) => data.id_categoria === 1);
  const nuevos = data.filter((data) => data.id_categoria === 2);
  const proximos = data.filter((data) => data.id_categoria === 3);
  const pasados = data.filter((data) => data.id_categoria === 4);
  return (
    <>
      <div className="catalogo">
        {data.length === 0 && <p>Cargando</p>}
        {/* actuales */}
        <h1>Actuales</h1>
        <div className="categorias">
          {actuales.map((actuales) => (
            <div className="bodyCard">
              <img src={actuales.img} alt="ImgBand" />
              <div>
                <h5>{actuales.nombre_evento}</h5>
                <p>{actuales.sede}</p>
                <p>{actuales.ubicacion}</p>
                <p>Participacion: {actuales.participacion}</p>
                <p>{actuales.fecha}</p>
                <button>
                <Link to={`/products/${actuales.id}`} className="redireccion">
                    Ir a detalles
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* nuevos */}
        <h1>Nuevos</h1>
        <div className="categorias">
        {nuevos.map((nuevos) => (
          <div className="bodyCard">
            <img src={nuevos.img} alt="ImgBand" />
            <div>
              <h5>{nuevos.nombre_evento}</h5>
              <p>{nuevos.sede}</p>
              <p>{nuevos.ubicacion}</p>
              <p>Participacion: {nuevos.participacion}</p>
              <p>{nuevos.fecha}</p>
              <button>
              <Link to={`/products/${nuevos.id}`}className="redireccion">
                  Ir a detalles
                </Link>
              </button>
            </div>
          </div>
        ))}
        </div>
        {/* proximos */}
        <h1>Proximos</h1>
        <div className="categorias">
          {proximos.map((proximos) => (
            <div className="bodyCard">
              <img src={proximos.img} alt="ImgBand" />
              <div>
                <h5>{proximos.nombre_evento}</h5>
                <p>{proximos.sede}</p>
                <p>{proximos.ubicacion}</p>
                <p>Participacion: {proximos.participacion}</p>
                <p>{proximos.fecha}</p>
                <button>
                <Link to={`/products/${proximos.id}`} className="redireccion">
                    Ir a detalles
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* pasados */}
        <h1>Pasados</h1>
        <div className="categorias">
          {pasados.map((pasados) => (
            <div className="bodyCard">
              <img src={pasados.img} alt="ImgBand" />
              <div>
                <h5>{pasados.nombre_evento}</h5>
                <p>{pasados.sede}</p>
                <p>{pasados.ubicacion}</p>
                <p>Participacion: {pasados.participacion}</p>
                <p>{pasados.fecha}</p>
                <button>
                <Link to={`/products/${pasados.id}`} className="redireccion">
                    Ir a detalles
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Catalogo;

