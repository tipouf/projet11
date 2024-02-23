import "./Footer.scss";
import FooterImage from "../../assets/footer-logo.svg";
const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterImage} alt="Logo Kasa" />
      <p>© 2024 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer