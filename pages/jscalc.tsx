import Navbar from '@components/Navbar';
import Style from '@style/jscalc.module.css';
import { NextPage } from 'next';
import React from 'react';

const index: NextPage = () => (
  <div className={Style.jscalc}>
    <Navbar />
    <iframe className={Style.iframe_cont} src="/legacy/jscalc.html" title="JsCalc" />
  </div>
);

export default index;
