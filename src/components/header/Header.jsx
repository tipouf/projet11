import "./Header.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
      <div className="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>

    </header>)
  ;
};

export default Header;
