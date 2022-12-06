import { getSession, signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  return(
    <div>
      <h1>This is the Dashboard</h1>
    </div>
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