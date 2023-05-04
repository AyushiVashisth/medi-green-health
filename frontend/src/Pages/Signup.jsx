import React, { useState } from 'react'

import { Link, Navigate, useNavigate } from "react-router-dom";


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  useToast,
} from '@chakra-ui/react'

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  const toast = useToast()

  const Handleregister = () => {
    setloading(true)
    const user = {
      name,
      email,
      password
    }
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }).then((res) => res.json()).then((res) => {
      console.log(res)

      if (res) {
        toast({
          title: "Registration Successful.",
          description: "Thank You For Registration",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        setloading(false)
        onClose()
      }
    }).catch((err) => {
      alert("SomeError occured")
      setloading(false)
    })

  }
  return (
    <>
      <Text onClick={onOpen}>Sign Up</Text>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" justifyContent="space-between" >
              <Box w='45%' h="300px" >

              </Box>

              <Box display="flex" flexDirection="column" w='50%' h="300px" textAlign="center" alignItems="center" justifyContent="space-between"  >
                <Input w="90%" variant='flushed' placeholder='Enter Name' onChange={(e) => setname(e.target.value)} />
                <Input w="90%" variant='flushed' placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} />
                <Input w="90%" variant='flushed' placeholder='Enter Password' onChange={(e) => setpassword(e.target.value)} />
                <Box display="flex"  >
                  <input type="checkbox" />
                  <Box paddingLeft="5px">
                    <Text fontSize='xs'>Are you a healthcare Professional</Text>
                  </Box>
                </Box>
                <Button isLoading={loading} colorScheme='red' variant='solid' w="90%" onClick={Handleregister}  >Register</Button>
                <Box display="flex" justifyContent="center" >
                  <Text fontSize='md'>Have an account?</Text>
                  <Link to="/login" ><Text color="red" >Login</Text></Link>
                </Box>
                <Box>
                  <Text fontSize='xs'>By signing up, you agree to our</Text>
                  <Text fontSize='xs'>Terms and Conditions & Privacy Policy</Text>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Signup