import { useState } from "react";
import "./drawer.css";
import Close from "../../../assets/Close";
import Burger from "../../../assets/Burger";

type DrawerProps = {
  src: Array<{
    title: string;
    link: string;
    icon: React.ReactNode;
  }>;
};
const Drawer = ({ src }: DrawerProps) => {
  const getStyled = () => (open ? "open" : "closed");
  const getOverlayStyled = () => (open ? "darken" : "");

  const [open, setOpen] = useState(false);
  return (
    <div className="drawer">
      <button onClick={() => setOpen(true)} className="toggleBtn">
        <Burger />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`${"overlay"} ${getOverlayStyled()}`}
      ></div>
      <aside className={"aside"}>
        <div className={getStyled()}>
          <div className={"closeContainer"}>
            <button className="closeBtn" onClick={() => setOpen(false)}>
              <Close />
            </button>
          </div>
          <nav>
            <ul>
              {src.map((i) => (
                <li>
                  <a
                    key={i.title}
                    href={i.link}
                    title={`Link to ${i.title}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {i.icon}
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
