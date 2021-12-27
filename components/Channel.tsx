import baseUrl from '@util/baseUrl';
import React, { FC } from 'react';

const Channel: FC = () => (
  <div className="ch_con">
    <h2>
      <i style={{ color: 'red' }} className="fab fa-youtube fa-3x" />
      <br />
      Youtube Channel
    </h2>
    <div className="ch">
      <img src={`${baseUrl}/img/ch_lg.png`} alt="" />
      <div>
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
      </div>
    </div>
  </div>
);

export default Channel;
