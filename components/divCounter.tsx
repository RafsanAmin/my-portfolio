import { AppContext } from 'contexts/appContext';
import React, { useContext, useEffect, useRef, useState } from 'react';

const DivCounter = () => {
  const Ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    setState({
      type: 'CONT',
      value: [Ref.current?.clientHeight || 0, Ref.current?.clientWidth || 0],
    });
    window.addEventListener('resize', () => {
      setState({
        type: 'CONT',
        value: [Ref.current?.clientHeight || 0, Ref.current?.clientWidth || 0],
      });
    });
  }, [setState]);
  return (
    <div style={{ backgroundColor: 'navy', color: '#fff' }} ref={Ref}>
      <h6>{`height:${state.cont[0]} width:${state.cont[1]}`}</h6>
      <p>My name is HRM Rafsan Amin</p>
    </div>
  );
};

export default DivCounter;
