import { getCsrfToken, getSession} from "next-auth/react";
import { Box, Input, Heading } from "@chakra-ui/react";

export default function SignIn({ csrfToken }) {

  return (
    <Box>
      <Heading m={50}>NextAuth</Heading>
      <Box textAlign={'center'} margin={'auto'} mt='150' p='5rem 5rem' borderRadius={15} boxShadow='lg' width='70%'>
        
        <form method="post" action="/api/auth/callback/credentials">

          <Heading> Login</Heading>
          <br />

          <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <Input 
            type="email"
            name="email" 
            placeholder="Email address" 
            width={400} 
            marginBottom={30} 
          />
          <br />
           
          <Input 
            type="password"  
            name="password" 
            placeholder="Password" 
            width={400} 
            marginBottom={30} 
          />
          <br />

          <Input 
            type="submit" 
            value="Login" 
            width={300} 
            color='teal' 
            bgColor={'blackAlpha.300'} 
          />
        </form>
      </Box>
    </Box>
  )
}

export async function getServerSideProps(context) {

  const session = await getSession(context);
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      session,
    },
  }
}