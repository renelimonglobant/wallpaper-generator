import { useState, type FunctionComponent } from 'react';
import './drawer.css';
import Close from '../../../assets/Close';
import Burger from '../../../assets/Burger';

interface DrawerProps {
  src: Array<{
    title: string;
    link: string;
    icon: React.ReactNode;
  }>;
}
const Drawer: FunctionComponent<DrawerProps> = ({ src }) => {
  const getStyled = (): string => (open ? 'open' : 'closed');
  const getOverlayStyled = (): string => (open ? 'darken' : '');

  const [open, setOpen] = useState(false);
  return (
    <div className="drawer">
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="toggle-btn"
      >
        <Burger />
      </button>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={`${'overlay'} ${getOverlayStyled()}`}
      ></div>
      <aside className={'aside'}>
        <div className={getStyled()}>
          <div className={'close-container'}>
            <button
              className="close-btn"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close />
            </button>
          </div>
          <nav>
            <ul className="list">
              {src.map((i) => (
                <li key={i.title}>
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
