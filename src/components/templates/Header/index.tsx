import { type FunctionComponent } from 'react';
import logo from '../../../assets/clock.png';
import Github from '../../../assets/Github';
import Twitter from '../../../assets/Twitter';
import Linkedin from '../../../assets/Linkedin';
import './header.css';
import Drawer from '../Drawer';

const links = [
  {
    title: 'Github',
    link: 'https://github.com/soyreneon/wallpaper-generator',
    icon: <Github />,
  },
  {
    title: 'Linkedin',
    link: 'https://mx.linkedin.com/in/soyreneon',
    icon: <Linkedin />,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/soyreneon',
    icon: <Twitter />,
  },
];
const Footer: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="head">
        <img src={logo} alt="logo" />
        <h1>Wallpaper generator</h1>
      </div>
      <div className="side">
        <div className="icons">
          {links.map((i) => (
            <a
              key={i.title}
              href={i.link}
              title={`Link to ${i.title}`}
              target="_blank"
              rel="noreferrer"
            >
              {i.icon}
            </a>
          ))}
        </div>
        <Drawer src={links} />
      </div>
    </header>
  );
};

export default Footer;
