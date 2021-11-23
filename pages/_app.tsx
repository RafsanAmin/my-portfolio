import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@style/bootstrap.min.css';
import '../public/fav/all.min.css';
import '@style/style.css';

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
        <meta name="author" content="HRM Rafsan Amin" />
        <title>RAFSAN-Home</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
