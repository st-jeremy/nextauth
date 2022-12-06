import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Stack,
  Button,
  Radio,
} from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { useDisclosure, useState } from '@chakra-ui/react';
import React from 'react';

function MenuPlacement() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = React.useState('right')
  // const [placement, setPlacement] = useState('right');

  return (
    <>
      <Button colorScheme='blue' defaultValue= {onOpen} onClick={onOpen}>
        Open
      </Button>
      <Drawer placement='left
      ' onClose={onClose} isOpen={isOpen}>
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <Button onClick={()=>signOut()}>Log Out</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuPlacement;