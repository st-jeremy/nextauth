import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='lg'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        // m='5'
        // width={{base: '90%', sm:'70%', md: '70%', lg: '500px' }}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? < AiOutlineEyeInvisible /> : <AiOutlineEye /> }
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}