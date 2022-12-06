import { signIn, useSession } from 'next-auth/react';
import Dashboard from './Dashboard';
import { useRouter } from 'next/router'


const Login = () => {
  const { data:session, loading} = useSession();
  
  if (loading){
    return <div>Loading...</div>
  };

  function LogToggle(){

    // const router = useRouter();
    if (session){
      return(
        <>
          <Dashboard />
        </>
      )
    }
    else{
      return( 
        <>
          {/* useRouter().push(href) */}
          {/* Router.replace("/auth/signIn"); */}
          <button onClick={()=> signIn({callbackUrl:'/auth/SignIn'})}>Sign In</button>
        </>
      )
    }
  }
  return ( 
    <div className="btn">{LogToggle()}</div>
   );
}
 
export default Login;