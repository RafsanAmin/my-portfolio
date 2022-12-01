import baseUrl from '@util/baseUrl';
import { FC } from 'react';
import { AOSComp } from './AOS';

const Channel: FC = () => (
  <div className="ch_con">
    <AOSComp anim={'zoom-in'} delay={100}>
      <h2>
        <i style={{ color: 'red' }} className="fab fa-youtube fa-3x" />
        <br />
        Youtube Channel
      </h2>
    </AOSComp>

    <div className="ch">
      <AOSComp anim={'left-in'} delay={100} classNameCont="img">
        <img src={`${baseUrl}/img/ch_lg.png`} alt="" />
      </AOSComp>
      <AOSComp anim={'right-in'} delay={100} classNameCont="inner-cont" className="inner">
        <div>
          <h3>
            Mr. <span style={{ color: '#1976d2' }}>Tech</span>
            <span style={{ color: '#2196f3' }}> Experts</span>
          </h3>
          <p>
            Our channel talks about various technological matters. You can find everything about
            tech here.
          </p>
          <a
            href="https://www.youtube.com/channel/UCHSI2gyTW3dI1GK1RHAnyGg"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-angle-right gtch mr-2" />
            Go to Channel
          </a>
        </div>
      </AOSComp>
    </div>
  </div>
);

export default Channel;
