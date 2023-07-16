import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import albumArtNoText from '../assets/album-art-no-border-no-text.jpeg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonny Vickers - Music</title>
        <meta name="description" content="Jonny Vickers - Official Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className='background'>
          <Image alt='' fill src={albumArtNoText} objectFit='cover'/>
        </div>
        <h1>Jonny Vickers</h1>
      </main>
    </>
  )
}
