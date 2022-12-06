import { Box, Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";

export default function SignOut({ csrfToken }) {

  function CenterModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  return (
    <>
    <Box>

      <CenterModal />
    </Box>
    </>
  )
}