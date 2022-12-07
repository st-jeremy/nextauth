import { Box, Heading } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import vault from '../public/vault.jpeg'

const Dashboard = () => {
  const { data: session, loading } = useSession();

  if (loading){
    return <div>Loading...</div>
  };

  return(
    <>
      <Navbar />
      <Box bgColor='whiteAlpha.100'>
        <Heading padding='5%' textAlign='center'>
          This is the protected route.
        </Heading>
        <Box margin='auto' width={700}>
          <Image src={ vault } width={700} height={500} alt='vault' />
        </Box>
      </Box>
    </>
  )
}
export default Dashboard;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session){
    return{
      redirect:{
        destination: '/auth/SignIn',
      }
    }
  }
  return{
    props: {session}
  }
}