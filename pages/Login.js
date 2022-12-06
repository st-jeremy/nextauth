import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data:session, loading} = useSession();

  if (loading){
    return <div>Loading...</div>
  };

  function logToggle(){
    if (session){
      return(
        <>
        {session.user.name} is signed in as {session.user.email}.
        <br />
        <br />
        Your token expires {session.expires}. <br />
        <img src={session.user.image} alt='user picture' width={300} height={300} style={{borderRadius: '50%'}}/>

        <br />
        <button onClick={()=> signOut()}>Sign Out</button>
      </>
      )
    }else{
      return(
        <>
          Not signed in 
          <br />
          <br />
          <button onClick={()=> signIn({callbackUrl:'/Dashboard'})}>Sign In</button>
        </>
      )
    }
  }
  return ( 
    <div className="btn">{logToggle()}</div>
   );
}
 
export default Login;