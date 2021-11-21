import React, { FC } from 'react';
import baseUrl from 'utils/baseUrl';

const Header: FC = () => {
  return (
    <div>
      <div className="header">
        <div className="prof_con">
          <div className="prof_txt">
            <h2 style={{ color: '#0f4982' }}>Hi! I am</h2>
            <h1 style={{ color: '#1976d2' }}>HRM</h1>
            <h1 style={{ color: '#2196f3' }}>Rafsan Amin</h1>
            <p style={{ color: '#666666' }}>I am a Web Developer and also a Tech Expert</p>
            <div className="prof_btn">
              <a href="#abt" className="btn prof_btn_1">
                About Me
              </a>
              <a href="#my_proj_con" className="btn prof_btn_2">
                My Projects
              </a>
            </div>
          </div>
          <div className="prof_img">
            <img src={`${baseUrl}/img/imbg.png`} alt="imbg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
