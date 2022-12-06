import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import { useSession } from 'next-auth/react';


export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="Authetication with NextAuth.Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box>
          <Navbar />
          <Heading textAlign='center' padding='15'>Welcome to the Authetication with NextAuth.Js</Heading>

        </Box>

      </main>
    </div>
  )
}

