import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Login from './Gateway';
import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="Authetication with NextAuth.Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box>
          <Navbar />
          <Heading>Welcome to the Authetication with NextAuth.Js</Heading>
        </Box>

      </main>
    </div>
  )
}
