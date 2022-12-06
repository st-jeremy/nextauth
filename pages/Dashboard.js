import { Box } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";
import LogoutButton from "../Components/LogoutAlert";

const Dashboard = () => {
  const { data: session, loading } = useSession();

  if (loading){
    return <div>Loading...</div>
  };

  return(
    <Box>
      <LogoutButton />
      This is the protected route
    </Box>
  )
}
export default Dashboard;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session){
    return{
      redirect:{
        destination: '/',
      }
    }
  }
  return{
    props: {session}
  }
}