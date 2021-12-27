import baseUrl from '@util/baseUrl';
import React, { FC } from 'react';

const Skills: FC = () => (
  <div className="skill_con">
    <h2 style={{ textShadow: 'none' }}>Skills</h2>
    <div className="skill_img">
      <img className="o" src={`${baseUrl}/img/skill/sass.png`} alt="sass" />
      <img className="tw" src={`${baseUrl}/img/skill/ts.png`} alt="ts" />
      <img className="th" src={`${baseUrl}/img/skill/react.png`} alt="react" />
      <img className="fr" src={`${baseUrl}/img/skill/nextJs.jpg`} alt="next" />
      <img className="fi" src={`${baseUrl}/img/skill/express.png`} alt="ex" />
      <img className="si" src={`${baseUrl}/img/skill/node.png`} alt="node" />
      <img className="sev" src={`${baseUrl}/img/skill/mdb.png`} alt="mdb" />
      <img className="ei" src={`${baseUrl}/img/skill/vscode.png`} alt="vscode" />
    </div>
  </div>
);

export default Skills;
