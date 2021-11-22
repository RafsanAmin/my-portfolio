import React, { FC, useState } from 'react';
import Style from '@style/navbar.module.css';
const Navbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className={Style.navbarCont}>
      <div className={Style.navbar}>
        <div className={Style.brand}>
          <h2>RAFSAN</h2>
        </div>
        <div className={`${Style.menuCont} ${toggle ? Style.on : Style.off}`}>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">
                About Me <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">
                My Projects <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <button onClick={() => setToggle((s) => !s)} className={Style.toggler}>
          fdfd
        </button>
      </div>
    </div>
  );
};

export default Navbar;
