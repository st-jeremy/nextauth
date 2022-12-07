import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleLogout = ()=> {
    signOut();
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
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleLogout} ml={3}>
                Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

