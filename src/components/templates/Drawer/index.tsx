import { useState } from "react";
import "./drawer.css";
import Close from "../../../assets/Close";
import Burger from "../../../assets/Burger";

// type DrawerProps = {};
// const Drawer = (props: DrawerProps) => {
const Drawer = () => {
  const getStyled = () => (open ? "open" : "closed");
  const getOverlayStyled = () => (open ? "darken" : "");

  const [open, setOpen] = useState(false);
  return (
    <div className='drawer'>
      <button onClick={() => setOpen(true)} className='toggleBtn'>
        <Burger />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`${'overlay'} ${getOverlayStyled()}`}
      ></div>
      <aside className={'aside'}>
        <div className={getStyled()}>
          <div className={'closeContainer'}>
            <button className='closeBtn' onClick={() => setOpen(false)}>
              <Close />
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