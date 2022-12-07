import Head from 'next/head';
import { Box, Button, Heading } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import { useSession } from 'next-auth/react';
import auth from '../public/authentication-gif.gif';
import Image from 'next/image';
import Link from 'next/link';
import Dashboard from './Dashboard';


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
          <Heading textAlign='center' padding='15' mt='20' >Welcome to the Authentication with NextAuth.Js</Heading>

          <Box margin='auto' width='fit-content' mt='10' mb='40'>
            <Image src={auth} alt='authentication' width={500} height={400} />

            <Link href='./Dashboard'>
              <Button>Dashboard</Button>
          </Link>
          </Box>

          

        </Box>

      </main>
    </div>
  )
}

