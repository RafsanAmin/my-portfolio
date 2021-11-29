import Navbar from '@components/Navbar';
import { NextPage } from 'next';
import React from 'react';
import Style from '../styles/jscalc.module.css';

const basePath = '/nextjs';
const index: NextPage = () => {
  return (
    <div className={Style.jscalc}>
      <Navbar />
      <iframe className={Style.iframe_cont} src="/legacy/jscalc.html"></iframe>
    </div>
  );
};

export default index;
