/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/bootstrap.min.css';
import '../public/fav/all.min.css';
import '../public/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I am HRM Rafsan Amin. I am a beginner level front-end web developer. Visit my website to see WHO I AM"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="Keywords"
          content="Rafsan, HRM Rafsan, Amin, HRM Rafsan Amin, rafsanamin, jscalc, todolist, stopwatch"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rafsan Amin's Portfolio" />
        <meta
          property="og:description"
          content="RI am HRM Rafsan Amin. I am a beginner level front-end web developer. Visit my website to see WHO I AM"
        />
        <meta property="og:site_name" content="RafsanAmin" />
        <meta property="og:url" content="https://rafsanamin.epizy.com/" />
        <meta property="og:image" content="https://rafsanamin.epizy.com/favicon-32x32.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="HRM Rafsan Amin" />
        <title>RAFSAN-Home</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="7evutjBOtSMy736iZQxlqPMYy3_vxm21jxLpTKPiM2k"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
