import Head from 'next/head';

import Hero from '@/components/hero';

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
        <Hero />
      </main>
    </>
  );
}
