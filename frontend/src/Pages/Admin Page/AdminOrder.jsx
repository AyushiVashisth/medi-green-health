import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../../Components/AdminSidebar'

const AdminOrder = () => {
  return (
    <Box>
      <Box><AdminSidebar/></Box>
      <Box w="80%" ml="20%"><Heading>this is order page</Heading></Box>
    </Box>
  )
}

export default AdminOrder
