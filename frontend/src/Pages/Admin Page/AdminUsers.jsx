import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import {VscVerifiedFilled} from "react-icons/vsc"
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

const AdminUsers = () => {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    fetch("https://onemg-database.onrender.com/users").then(
      (result) => {
        result.json().then((res) => {
          setCart(res);
          console.log(res)
        });
      }
    );
  }
  function deleteItem(id) {
    fetch(`https://onemg-database.onrender.com/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getUsers();
      });
    });
  }


  return (
    <Box>
      <AdminNavbar/>
      <Box>
        <Box>
          <AdminSidebar />
        </Box>
        <Box w="85%" ml="20%" >
          <TableContainer w="99%" >
            <Table size="sm" ml={2} w={"80%"}>
              <Thead >
                <Tr>
                  <Th>Users</Th>
                  <Th>User Name</Th>
                  
                  <Th>Email</Th>
                  
                  <Th>Verified</Th>
                  <Th>Reject</Th>
                </Tr>
              </Thead>
              {cart.length > 0 && cart.map((product, index) => (
                <Tbody key={index}>
                  <Tr>
                    <Td>
                      {index+1}
                     
                    </Td>
                    <Td>
                      {product.name}
                     
                    </Td>
                   
                    <Td>{product.email}</Td>
                    <Td color="green" ><Flex fontWeight={"bold"} w="60%"justifyContent={"space-around"}>{"verified"}<VscVerifiedFilled/></Flex></Td>
                    
                    <Td>
                      <Button
                        bg="tomato"
                        variant="solid"
                        onClick={() => deleteItem(product._id)}
                      >
                        Reject
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminUsers;
