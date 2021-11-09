import type { NextPage } from 'next';
import Img from 'next/image';
import { useState } from 'react';
import A from '../components/counter';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const state = useState<number>(0);
  return (
    <div className={styles.container}>
      <Link href="/credit">Credit</Link>
      <p>Next.js is made by</p>
      <Img src="/nextjs/vercel.svg" width="100" height="100" />
      <A state={state} />
    </div>
  );
};

export default Home;
