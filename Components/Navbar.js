import { Box, Heading } from "@chakra-ui/react";
import Gateway from "../pages/Gateway";

const Navbar = () => {
  return ( 
    <Box display='flex' backgroundColor='blue.300'>
      <Heading>Authetication</Heading>

      <Gateway />
    </Box>
   );
}
 
export default Navbar;