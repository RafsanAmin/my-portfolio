import Style from '@style/navbar.module.css';
import Nlink from 'next/link';
import { FC, useState } from 'react';

const NavbarCont: FC = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className={Style.navbarCont}>
      <div className={Style.navbar}>
        <div className={Style.brand}>
          <h2>RAFSAN</h2>
        </div>
        <div className={`${Style.menuCont} ${toggle ? Style.on : Style.off}`}>
          <ul className="navbar-nav">{children}</ul>
        </div>
        <button type="button" onClick={() => setToggle((s) => !s)} className={Style.toggler}>
          <i className="fas fa-align-right" />
        </button>
      </div>
    </div>
  );
};

interface LinkProps {
  href: string;
  children: string;
}
const Link: FC<LinkProps> = ({ href, children }) => (
  <Nlink href={href}>
    <li className="nav-item">
      <a className="nav-link">{children}</a>
    </li>
  </Nlink>
);

const Navbar: FC = () => (
  <NavbarCont>
    <Link href="/">Home</Link>
    <Link href="/#abt">About Me</Link>
    <Link href="/#my_proj_con">My Projects</Link>
    <Link href="/#cont">Contact Me</Link>
  </NavbarCont>
);
export default Navbar;
