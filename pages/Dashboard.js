import { Box } from "@chakra-ui/react";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import MenuPlacement from '/Components/MenuPlacement';

const Dashboard = () => {
  const { data: session, loading } = useSession();

  if (loading){
    return <div>Loading...</div>
  };

  return(
    <Box>
      <MenuPlacement />

      {session.user.name} is signed in as {session.user.email}.
          <br />
          <br />
          Your token expires {session.expires}. <br />
          
          <button onClick={()=> signOut()}>Sign Out</button>

    </Box>
  )
}
export default Dashboard;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session){
    return{
      redirect:{
        destination: '/Login',
      }
    }
  }
  return{
    props: {session}
  }
}