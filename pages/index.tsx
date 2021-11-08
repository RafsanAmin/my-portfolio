import type { NextPage } from 'next';
import { useState } from 'react';
import A from '../components/counter';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const state = useState<number>(0);
  return (
    <div className={styles.container}>
      <Link href="/credit">Credit</Link>
      <A state={state} />
    </div>
  );
};

export default Home;
