import { Box} from '@chakra-ui/react'
import React from 'react'
import Blog from './Dashboard'
import AdminNavbar from '../../Components/Navbar/AdminNavbar'


const AdminHome = () => {
  return (
    <Box>
      <AdminNavbar/>
      <Blog/>
    </Box>
  )
}

export default AdminHome
