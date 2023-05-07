
import Moveslider from "../Components/Moveslider";
import Healthconslider from "../Components/Healthconslider"

import React from 'react'
import { Link } from "react-router-dom";
import Brandslider from "../Components/Brandslider";
import Footerpara from "../Components/Footerpara"

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
  Image
} from '@chakra-ui/react'




const Homepage = () => {
  return (
    <Box w="100%" margin="auto" bgColor="#CBD5E0">

   
    <Link><Image w="100%" margin="auto" paddingBottom="40px" paddingTop="40px" src="https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png" /></Link>
     <Box margin="auto" w='95%'  >
      <Box textAlign="left"  paddingTop="15px" paddingBottom="15px" >
      <Text  w="90%" as="b"   fontSize={{ base: 'xl ', md: 'xl',lg: '2xl',xl: '2xl', '2xl': '2xl'}}>Shop By Health Concerns</Text>
      </Box>
     <Healthconslider/>
     </Box>

     <Box margin="auto" w='95%' >
     <Box textAlign="left"  paddingTop="25px" paddingBottom="15px" >
      <Text  w="90%" as="b"   fontSize={{ base: 'xl ', md: 'xl',lg: '2xl',xl: '2xl', '2xl': '2xl'}}>Featured brands</Text>
      </Box>
     <Brandslider/>
     </Box>

    
    <Box textAlign="left" margin="auto" w='95%'  paddingTop="30px"  >
    <Footerpara/>
     </Box>
    </Box>
  )
}

export default Homepage