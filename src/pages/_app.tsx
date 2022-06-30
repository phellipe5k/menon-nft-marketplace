import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default myApp;
