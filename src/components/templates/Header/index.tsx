import logo from "../../../assets/clock.png";
import "./header.css";

const Footer = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" width={20} />
      <h1>Wallpaper generator</h1>
    </header>
  );
};

export default Footer;
