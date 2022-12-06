import { signIn, useSession } from 'next-auth/react';
import Dashboard from './Dashboard';
import { useRouter } from 'next/router'
import { Box, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react';
import SignOut from './auth/signOut';

const Login = () => {

  const toast = useToast()
  const { data:session, loading, status} = useSession();

  useEffect(()=> {
    if(status === 'authenticated'){
      toast({
        title: "Logged in successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }else if(status === 'unauthenticated'){
      toast({
        title: "Logged out successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }, [status, toast])

 
  if (loading){
    return <div>Loading...</div>
  };

  const handleLogin = ()=>{
    signIn();
  }
  
 return (
  <>
  {status === 'authenticated' ? (
    <Dashboard />
  ): (
    <Button onClick={handleLogin}>Sign In</Button>
  )}

  </>
 )
}
 
export default Login;