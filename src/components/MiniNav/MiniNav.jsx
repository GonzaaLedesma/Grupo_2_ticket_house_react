import './miniNav.scss'
import icono from '../../assets/images/Catalogo/ejemplo.jpg'
function MiniNav() {
return (
        <div className="miniNavHouse">
            <form action="">
                <input type="text" />
                <button type='sumit'>Q</button>
            </form>
            <div className='miniNavUsuarios'>
                <h5>Novedades</h5>
                <h5>Usuario</h5> 
                <img src={icono} className="iconoHouse" alt="a" />   
            </div>
        </div>
  );
}

export default MiniNav;
