import { Box, Heading } from "@chakra-ui/react";
import Gateway from "../pages/Gateway";
import Link from "next/link";

const Navbar = () => {
  return ( 
    <Box display='flex' backgroundColor='grey' padding='3'>
      <Link href='/'>
        <Heading>Authentication</Heading>
      </Link>

      <Box position='absolute' right='5'>
        <Gateway />
      </Box>
    </Box>
   );
}
 
export default Navbar;