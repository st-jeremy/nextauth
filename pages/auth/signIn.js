import { getCsrfToken, getSession} from "next-auth/react";
import { Box, Input, Heading, Tooltip, InputRightElement, Button, InputGroup  } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function SignIn({ csrfToken }) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box>
      <Heading m={50} color='blue.700'>Admin</Heading>

      <Box textAlign={'center'} margin={'auto'} mt='100' p='2rem 1rem' borderRadius={15} boxShadow='lg' width={{base: '95%', sm:'85%', md: '60%', lg: '600px' }} >

        <form method="post" action="/api/auth/callback/credentials">
          <Heading> Login</Heading>
          <br />

          <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <Tooltip label="Use 'test@gmail.ng'" aria-label='A tooltip' closeDelay={600} hasArrow arrowSize={15} defaultIsOpen='true' bgColor='blue.700' >
            <Input 
              type="email"
              name="email" 
              placeholder="Email address" 
              width={{base: '90%', sm:'70%', md: '70%', lg: '500px' }} 
              marginBottom={30} 
              size='lg'
              bgColor='white'
            />
          </Tooltip>
          <br />
           
          <Tooltip label="Use 'hello123'" aria-label='A tooltip' closeDelay={600} hasArrow arrowSize={15} defaultIsOpen='true' bgColor='blue.700' >
            <InputGroup 
                width={{base: '90%', sm:'70%', md: '70%', lg: '500px' }} 
                margin='auto'
              >
              <Input 
                type="password"  
                name="password" 
                placeholder="Password"
                size='lg'
                bgColor='white'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' mt='2' bgColor='white' onClick={handleClick}>
                  {show ? < AiOutlineEyeInvisible /> : <AiOutlineEye /> }
                </Button>
              </InputRightElement>
            </InputGroup>
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
            size='lg'
            mt={50} 
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