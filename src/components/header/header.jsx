import "./header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
      <div className="navigation">
        <a href="/">Accueil</a>
        <a href="/About">A Propos</a>
      </div>

    </header>)
  ;
};

export default Header;
