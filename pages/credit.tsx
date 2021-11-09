import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Styles from '../styles/Home.module.css';
const credit: NextPage = ({ json }: any) => {
  return (
    <div className={Styles.container}>
      <Link href="/">Go Home Bro</Link>
      <br />
      <a href="https://rafpost.herokuapp.com">My FaceBook</a>
      <br />
      <a href="https://rafsanamin.epizy.com">My Portfolio</a>
      <br />
      <p>{json.title}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await res.json();
  return {
    props: {
      json,
    },
  };
};
export default credit;
