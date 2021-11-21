import About from '@components/About';
import Channel from '@components/Channel';
import Header from '@components/Hero';
import { Project, ProjectsCont } from '@components/Projects';
import Skills from '@components/Skills';
import { NextPage } from 'next';
import React from 'react';

const basePath = '/nextjs';
const index: NextPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <ProjectsCont>
        <Project
          image={basePath + '/img/proj/jscalc.jpg'}
          icon={<i className="fas fa-calculator pr-3"></i>}
          title="JS Calc"
          desc="A javascript calculator"
          link="/jscalc"
        />
        <Project
          image={basePath + '/img/proj/todo.jpg'}
          icon={<i className="fas fa-list pr-3"></i>}
          title="JS Todo List"
          desc="A javascript to-do list"
          link="https://rafsanamin.herokuapp.com/todos/todo/todo.html"
        />
        <Project
          image={basePath + '/img/proj/rafpost_ss.png'}
          icon={<i className="fas fa-calculator pr-3"></i>}
          title="RafPost"
          desc="An online based public posting platform."
          link="https://rafpost.herokuapp.com"
        />
        <Project
          image={basePath + '/img/proj/theme.png'}
          icon={<i className="fas fa-calculator pr-3"></i>}
          title="One Dark Pro ++"
          desc="An Eye-catching VSCode Theme"
          link="https://marketplace.visualstudio.com/items?itemName=HRMRafsanAmin.onedarkproplusplus"
        />
      </ProjectsCont>
      <Channel />
    </div>
  );
};

export default index;
