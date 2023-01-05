import { useState } from "react";
import "./drawer.css";
import close from "../../../assets/close.svg";
import burger from "../../../assets/burger.svg";

// type DrawerProps = {};
// const Drawer = (props: DrawerProps) => {
const Drawer = () => {
  const getStyled = () => (open ? "open" : "closed");
  const getOverlayStyled = () => (open ? "darken" : "");

  const [open, setOpen] = useState(false);
  return (
    <div className='drawer'>
      <button onClick={() => setOpen(true)} className='toggleBtn'>
        <img src={burger} alt='burger icon' />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`${'overlay'} ${getOverlayStyled()}`}
      ></div>
      <aside className={'aside'}>
        <div className={getStyled()}>
          <div className={'closeContainer'}>
            <button className='closeBtn' onClick={() => setOpen(false)}>
              <img src={close} alt='close icon' />
            </button>
          </div>
          <nav>
            <ul>
              <li>hola perros</li>
              {/* <ItemList name="Home" link="/" />
              <ItemList name="Postres" link="/postres" /> */}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
