import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../../Components/AdminSidebar'
import { Piechart } from './PeiChat'

const AdminHome = () => {
  return (
    <Box>
      <Box><AdminSidebar/></Box>
      <Box w="80%" ml="20%">
        <Heading>this is admin home page</Heading>
        <Piechart/>
      </Box>
    </Box>
  )
}

export default AdminHome
