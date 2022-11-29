import baseUrl from '@util/baseUrl';
import { FC } from 'react';
import { AOSComp } from './AOS';

interface SkillImgProp {
  src: string;
  className: string;
}

const SkillImg: FC<SkillImgProp> = ({ src, className }) => {
  return (
    <AOSComp delay={50} anim={'roll-in'}>
      <img className={className} src={`${baseUrl}/img/skill/${src}`} alt={src} />
    </AOSComp>
  );
};

const Skills: FC = () => (
  <div className="skill_con">
    <h2 style={{ textShadow: 'none' }}>Skills</h2>

    <div className="skill_img">
      <SkillImg src="sass.png" className="o" />
      <SkillImg src="ts.png" className="tw" />
      <SkillImg src="react.png" className="th" />
      <SkillImg src="nextJs.jpg" className="fr" />
      <SkillImg src="express.png" className="ex" />
      <SkillImg src="node.png" className="si" />
      <SkillImg src="mdb.png" className="sev" />
      <SkillImg src="vscode.png" className="ei" />
    </div>
  </div>
);

export default Skills;
