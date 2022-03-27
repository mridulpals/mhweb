import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import { GeneralContext } from '../context/GeneralContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/root.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [windowWidth, setwindowWidth] = useState();

  useEffect(() => {
    setwindowWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setwindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  useEffect(() => {
    scrollTo(0, 0)
  }, [router])

  return (
    <>
      <Head>
        <title>Mindful Habitats</title>
        {/* favicon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" size="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" size="32x32" href="/favicon-32x32.png" />
        <link rel="icon" size="16x16" href="/favicon-16x16.png" />
        <link rel="icon" size="500x500" href="/favicon-500x500.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="canonical" href="https://mindfulhabitats.netlify.app/" />

        <meta name="description" content="Canadian Centre for Mindful Habitats – Vasudhaiva Kutumbakam" />
        <meta property="og:title" content="Mindful Habitats" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mindfulhabitats.netlify.app/favicon-500x500.png" />
        <meta property="og:url" content="https://mindfulhabitats.netlify.app/" />

      </Head>

      <GeneralContext.Provider value={{ windowWidth }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </GeneralContext.Provider>
    </>
  )

}

export default MyApp
