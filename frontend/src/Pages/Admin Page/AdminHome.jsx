import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../../Components/AdminSidebar'
import Navbar1 from '../../Components/Navbar/Navbar1'
import Navbar2 from '../../Components/Navbar/Navbar2'

const AdminHome = () => {
  return (
    <Box>
      <Navbar1/>
      <Navbar2/>
    <Box>
      <Box><AdminSidebar/></Box>
      <Box w="80%" ml="20%">
        <Heading>this is admin home page</Heading>
      </Box>
    </Box>
    </Box>
  )
}

export default AdminHome
