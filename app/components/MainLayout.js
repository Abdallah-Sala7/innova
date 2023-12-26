import Footer from './common/Footer';
import Navbar from './common/Navbar';
import Head from 'next/head';

const MainLayout = ({children}) => {
  return (
    <>
      <Head>
        <title>Mumat</title>
        <meta name="description" content="Mumat for smart solutions" />
        <meta
          name="keywords"
          content="Mumat, web development, programming, mobile development, software development, smart solutions, AI"
        />
        <meta name="author" content="Mumat" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="web_author" content="Mumat" />
        <meta name="theme-color" content="#0b132a" />

        <link rel="favicon" href="/mumat.png" />
        <link rel="icon" href="/mumat.png" />
      </Head>

    </>
  );
}

export default MainLayout