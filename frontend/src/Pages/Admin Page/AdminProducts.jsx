
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
  Grid,
  useToast
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import AdminSidebar from '../../Components/AdminSidebar';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, get_products } from '../../redux/admincrud/action';




const AdminProducts = () => {
  
  const dispatch = useDispatch();
  const toast = useToast();
   const {products} = useSelector((state) => {
    // console.log(state.productReducer.products);
    return state.AdminProductReducer;
  });

  // console.log(products)

  const handleDelete = (id) =>{
     dispatch(deleteProduct(id))
     .then((res)=>{
      toast({
        title: 'product Deleted.',
        description: "Product is deleted from database.",
        status: 'success',
        position:"top",
        duration: 2000,
        isClosable: true,
      })
      dispatch(get_products)
     })
    
  }



  useEffect(()=>{
    dispatch(get_products);
  },[])
  return (
    <Box>
      <Box><AdminSidebar/></Box>
    <Box w="80%" ml="20%" >
              <Grid
    templateColumns={{
      xl: "repeat(4, 1fr)",
      lg: "repeat(3, 1fr)",
      md: "repeat(2, 1fr)",
      base: "repeat(1, 1fr)",
    }}
    gap="20px 20px"
    mt="30px"
  >
    
      
        { products.length>0 && products.map((item)=>(
          <GridItem
                w="240px"
                h="auto"
                padding="5"
                textAlign="left"
                bg="white"
                m="auto"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                borderRadius={"10px"}
                key={item._id}
              >
                <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"} >
                  <Image
                    objectFit={"contain"}
                    h="100%"
                    src={item.image}
                    alt={item.id}
                    cursor="pointer"
                  />
                </Box>
                <Text fontSize="14px" fontWeight="600" mb="5px" cursor="pointer">
                  {item.title.substring(0, 24).concat("...")}
                </Text>
                <Text color="grey" fontSize="13px" fontWeight="600" mb="10px">
                  {item.category}
                </Text>
                <Flex gap={"20px"}>
                  <Button
                    fontSize={"12px"}
                    fontWeight={600}
                    bg="#1aab2a"
                    size={"xs"}
                    color={"white"}
                    mb={"10px"}
                    cursor="auto"
                    _hover={{
                      bg: "#4dc65b",
                    }}
                  >
                    {item.rating}
                    <AiFillStar />
                  </Button>
                  
                </Flex>
                <Flex gap={"10px"} >

                <Heading fontSize={"15px"} mb="2px" fontWeight={600}>
                    ₹{item.price}
                  </Heading>

                  <Text
                    color="grey"
                    fontSize={"12px"}
                    mb={"10px"}
                    textDecor="line-through"
                    fontWeight={600}
                  >
                   {item.price+item.price*Number(item.discount)/100}
                  </Text>

                  <Text fontSize={"13px"} mb={"10px"} color="#1aab2a" fontWeight={600}>
                    {item.discount}%
                  </Text>

                </Flex>

                <Flex align={"center"} justify="space-between">
                  
                  <Flex justifyContent={"space-between"} w="100%" >
                  <Button
                    fontWeight={"700"}
                    bg="white"
                    size={"sm"}
                    color="#ff6f61"
                    _hover={{
                      bg: "#ff6f61",
                      color: "white",
                    }}
                  >
                    <Link to={`/admineditproduct/${item._id}`}>Edit</Link>
                  </Button>
                  <Button
                    fontWeight={"700"}
                    bg="white"
                    size={"sm"}
                    color="#ff6f61"
                    _hover={{
                      bg: "#ff6f61",
                      color: "white",
                    }}
                    onClick={(e)=>handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                  </Flex>
                  
                </Flex>
              </GridItem>
                  ))} 
      
    
  </Grid>

    
    </Box>
    </Box>
  )
}

export default AdminProducts;

