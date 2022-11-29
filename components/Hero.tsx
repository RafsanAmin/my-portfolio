import { FC } from 'react';
import baseUrl from 'utils/baseUrl';
import { AOSComp } from './AOS';

const Header: FC = () => (
  <div>
    <div className="header">
      <div className="prof_con">
        <div className="prof_txt">
          <AOSComp anim={'top-in'} delay={50} duration={1250}>
            <h2 style={{ color: '#0f4982' }}>Hi! 👋 I am</h2>
          </AOSComp>
          <AOSComp anim={'top-in'} delay={150} duration={1250}>
            <h1 style={{ color: '#1976d2' }}>HRM</h1>
          </AOSComp>
          <AOSComp anim={'top-in'} delay={250} duration={1250}>
            <h1 style={{ color: '#2196f3' }}>Rafsan Amin</h1>
          </AOSComp>
          <AOSComp anim={'top-in'} delay={350} duration={1250}>
            <p style={{ color: '#666666' }}>I am a Web Developer and also a Tech Expert</p>
          </AOSComp>
          <AOSComp anim={'left-in'} delay={400} duration={1250}>
            <div className="prof_btn">
              <a href="#abt">
                <button className="prof_btn_1">About Me</button>
              </a>
              <a href="#my_proj_con">
                <button className="prof_btn_2">My Projects</button>
              </a>
            </div>
          </AOSComp>
        </div>
        <AOSComp anim={'right-in'} delay={150} duration={1250} className="prof_img">
          <img src={`${baseUrl}/img/imbg.png`} alt="imbg" />
        </AOSComp>
      </div>
    </div>
  </div>
);

export default Header;
