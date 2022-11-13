import "../style/Header.css";
import Card from 'react-bootstrap/Card';
import HeaderPhoto from '../assets/howmymindisworking.png';

function Header() {
  return (
    <div className="header__container">
      <Card.Img src={HeaderPhoto} alt="Card image" />
      <Card.ImgOverlay className="header__content">
        <h5>Hi my name is</h5>
        <h1>Blessed Adodo</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
      </Card.ImgOverlay>
    </div>
  );
}

export default Header;
