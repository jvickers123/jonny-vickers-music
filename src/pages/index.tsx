import Head from 'next/head';

import Header from '@/components/sections/Header';
import AlbumArtwork from '@/components/sections/AlbumArtwork';
import Links from '@/components/sections/Links';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonny Vickers - Music</title>
        <meta name="description" content="Jonny Vickers - Official Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="main-content-container">
          <Header />
          <AlbumArtwork />
          <Links />
          <Footer />
        </div>
      </main>
    </>
  );
}
