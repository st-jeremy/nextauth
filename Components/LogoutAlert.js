import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const handleLogout = ()=> {
    signOut('',  {callbackUrl:'/'});
    toast({
      title: "Logged out successfully",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Log Out
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered= 'true'
        size='xl'
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='xl' fontWeight='bold'>
              Log Out
            </AlertDialogHeader>

            <AlertDialogBody fontWeight='500'>
              Are you sure? 
              <br />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No, Cancel
              </Button>
              <Button colorScheme='red' onClick={handleLogout} ml={3}>
                Yes, Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

