import { Router, useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';

const ProjectsCont: FC = ({ children }) => {
  return (
    <div id="my_proj_con" className="my_proj_con">
      <h2>Projects</h2>
      <div className="my_proj_sld">{children}</div>
    </div>
  );
};

interface projProps {
  image: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  link: string;
}
const Project: FC<projProps> = ({ image, icon, title, desc, link }) => {
  const Router = useRouter();
  return (
    <div
      className="my_proj_crd text-center"
      onClick={() => {
        if (link.includes('http://') || link.includes('https://')) {
          window.open(link);
        } else {
          Router.push(link);
        }
      }}
    >
      <img src={image} alt="" />
      <div className="my_proj_d">
        <div className="text">
          <h3>
            {icon}
            {title}
          </h3>
          <p>{desc}</p>
        </div>

        <div className="proj_a">
          <a>Check it out!</a>
        </div>
      </div>
    </div>
  );
};

export { ProjectsCont, Project };
