import React, { Dispatch, FC as RComp } from 'react';

type ReactState<T> = [T, Dispatch<React.SetStateAction<T>>];
interface Props {
  state: ReactState<number>;
}
const A: RComp<Props> = ({ state }) => {
  const [stat, setState] = state;
  return (
    <>
      <p>{stat}</p>
      <button onClick={() => setState((s) => s + 1)}>++</button>
    </>
  );
};

export default A;
