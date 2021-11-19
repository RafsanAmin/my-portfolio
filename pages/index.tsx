import type { NextPage } from 'next';
import { useState, useReducer, createContext, Dispatch } from 'react';
import Counter from '@components/counter';
import Time from '@components/time';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import DivCounter from '@components/divCounter';
import { AppContext, State, Action } from 'contexts/appContext';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'COUNTER':
      return { ...state, counter: state.counter + 1 };
    case 'DATE':
      return { ...state, date: new Date().toLocaleTimeString() };
    case 'CONT':
      return { ...state, cont: action.value };
  }
};
const init: State = {
  cont: [0, 0],
  counter: 0,
  date: new Date().toLocaleTimeString(),
};
const Home: NextPage = () => {
  const reducerS = useReducer(reducer, init);
  return (
    <div className={styles.container}>
      <Link href="/credit">Credit</Link>
      <p>Next.js is made by</p>
      <img src="/nextjs/vercel.svg" width="100" height="100" alt="hello" />
      <AppContext.Provider value={reducerS}>
        <Counter />
        <Time />
        <hr />
        <DivCounter />
      </AppContext.Provider>
    </div>
  );
};

export default Home;
