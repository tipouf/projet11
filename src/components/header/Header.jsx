import "./Header.scss";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Kasa"/>
      </Link>
      <div className="navigation">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
