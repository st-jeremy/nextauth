import { Box, Heading } from "@chakra-ui/react";
import Gateway from "../pages/Gateway";

const Navbar = () => {
  return ( 
    <Box display='flex' backgroundColor='blue.100' padding='5'>
      <Heading>Authetication</Heading>

      <Gateway />
    </Box>
   );
}
 
export default Navbar;