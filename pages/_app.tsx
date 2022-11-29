/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-props-no-spreading */
import { AOSCont } from '@components/AOS';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/bootstrap.min.css';
import '../public/fav/all.min.css';
import '../public/style.css';
import '../styles/aos.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>RAFSAN-Home</title>
      </Head>
      <AOSCont>
        <Component {...pageProps} />
      </AOSCont>
    </>
  );
};

export default MyApp;
