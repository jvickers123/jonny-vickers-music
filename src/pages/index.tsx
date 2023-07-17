import Head from 'next/head';
import Image from 'next/image';

import albumArtNoText from '../assets/album-art-no-border-no-text.jpeg';

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
        <div className="background">
          <Image alt="" fill src={albumArtNoText} objectFit="cover" />
        </div>
        <h1>Jonny Vickers</h1>
      </main>
    </>
  );
}
