import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';
import baseUrl from 'utils/baseUrl';
const ProjectsCont: FC = ({ children }) => {
  return (
    <div id="my_proj_con" className="my_proj_con">
      <h2>Projects</h2>
      <div className="my_proj_sld">{children}</div>
    </div>
  );
};

type projProps = {
  image: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  link: string;
};
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

const Projects: FC = () => {
  return (
    <ProjectsCont>
      <Project
        image={baseUrl + '/img/proj/jscalc.jpg'}
        icon={<i className="fas fa-calculator pr-3"></i>}
        title="JS Calc"
        desc="A javascript calculator"
        link="/jscalc"
      />
      <Project
        image={baseUrl + '/img/proj/todo.jpg'}
        icon={<i className="fas fa-list pr-3"></i>}
        title="JS Todo List"
        desc="A javascript to-do list"
        link="https://rafsanamin.herokuapp.com/todos/todo/todo.html"
      />
      <Project
        image={baseUrl + '/img/proj/rafpost_ss.png'}
        icon={<img className="contain" src={baseUrl + '/img/proj/rafpost.png'} alt="" />}
        title="RafPost"
        desc="An online based public posting platform."
        link="https://rafpost.herokuapp.com"
      />
      <Project
        image={baseUrl + '/img/proj/theme.png'}
        icon={<i className="fas fa-palette pr-3"></i>}
        title="One Dark Pro ++"
        desc="An Eye-catching VSCode Theme"
        link="https://marketplace.visualstudio.com/items?itemName=HRMRafsanAmin.onedarkproplusplus"
      />
    </ProjectsCont>
  );
};

export default Projects;
