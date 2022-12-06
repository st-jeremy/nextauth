import { getCsrfToken, getSession} from "next-auth/react";
import { Box, Input, Heading, Tooltip } from "@chakra-ui/react";

export default function SignIn({ csrfToken }) {

  return (
    <Box>
      <Heading m={50} color='blue.700'>Authetication using NextAuth</Heading>

      <Box textAlign={'center'} margin={'auto'} mt='100' p='2rem 1rem' borderRadius={15} boxShadow='lg' width={{base: '95%', sm:'85%', md: '60%', lg: '600px' }} >

        <form method="post" action="/api/auth/callback/credentials">

          <Heading> Login</Heading>
          <br />

          <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <Tooltip label="Use 'manager@sendme.ng'" aria-label='A tooltip' closeDelay={600} hasArrow arrowSize={15} defaultIsOpen='true'>
            <Input 
              type="email"
              name="email" 
              placeholder="Email address" 
              width={{base: '90%', sm:'70%', md: '70%', lg: '500px' }} 
              marginBottom={30} 
            />
          </Tooltip>
          <br />
           
          <Tooltip label="Use 'hello123'" aria-label='A tooltip' closeDelay={600} hasArrow arrowSize={15} >
            <Input 
              type="password"  
              name="password" 
              placeholder="Password" 
              width={{base: '90%', sm:'70%', md: '70%', lg: '500px' }}
              marginBottom={50} 
            />
          </Tooltip>
          <br />

          <Input 
            type="submit" 
            value="Login" 
            width={300} 
            color='black' 
            bgColor={'blue.300'} 
            fontWeight='extrabold'
            fontSize='xl'
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