import { signIn, useSession } from 'next-auth/react';
import Dashboard from './Dashboard';
import { Box, Button, useToast, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import LogoutButton from '../Components/LogoutAlert';

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
    }
    // else if(status === 'unauthenticated'){
      // toast({
      //   title: "Logged out successfully",
      //   status: 'success',
      //   duration: 3000,
      //   isClosable: true,
      // })
    // }
  }, [status, toast])

 
  if (loading){
    return (<Box>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='2xl'
        padding='5'
      />
      Loading...
    </Box>
  )};

  const handleLogin = ()=>{
    signIn();
  }
  
 return (
  <>
  {status === 'authenticated' ? (
    <LogoutButton />
   
  ): (
    <Button onClick={handleLogin}>Sign In</Button>
  )}

  </>
 )
}
 
export default Login;