import React, { Dispatch, FC as RComp, useContext } from 'react';
import { AppContext } from '../contexts/appContext';

const A: RComp<{}> = () => {
  const [stat, ss] = useContext(AppContext);
  return (
    <>
      <p>{stat.counter}</p>
      <button
        onClick={() => {
          ss({ type: 'COUNTER' });
        }}
      >
        ++
      </button>
    </>
  );
};

export default A;
