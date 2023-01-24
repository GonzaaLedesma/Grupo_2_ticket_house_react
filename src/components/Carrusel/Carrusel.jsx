import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/images/Carrsuel/1.jpg";
import image2 from "../../assets/images/Carrsuel/2.jpg";
import image3 from "../../assets/images/Carrsuel/3.jpg";
import "./carrusel.scss"


function Carrusel() {
  return (
    <div className="ajusteCarrusel">
    <Carousel>
      <Carousel.Item interval={1000}>
        {/* <img className="d-block w-100" src={image1} alt="First slide" /> */}
        <img className="carruselImg" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="carruselImg" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carruselImg" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrusel;
