import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
// import { useRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Swal from "sweetalert2";
// import { useDispatch, useSelector } from "react-redux";
// import { useToast } from "@chakra-ui/react";
// import { postCartData } from "@/redux/cart/cart.action";

const ProductCard = (props) => {
  // const { isAuth } = useSelector((state) => state.authReducer);
  const [addText, setAddText] = useState("ADD");
  // const router = useRouter();
  // const toast = useToast();
  // const dispatch = useDispatch();
  // const goToSingleProductPage = () => {
  //   router.push(`/products/${props._id}`);
  // };
 
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  )
  const handleAdd=(el)=>{
    const newCartItems = [...cartItems, el];
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }
  useEffect(()=>{

  },[cartItems])
  return (
    <GridItem
      w="240px"
      h="auto"
      padding="5"
      textAlign="left"
      bg="white"
      m="auto"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"}>
        <Image
          objectFit={"contain"}
          h="100%"
          src={props.image}
          alt={props.id}
          // onClick={goToSingleProductPage}
          cursor="pointer"
        />
      </Box>
      <Text
        fontSize="14px"
        fontWeight="600"
        mb="5px"
        // onClick={goToSingleProductPage}
        cursor="pointer"
      >
        {props.title}
      </Text>
      <Text color="grey" fontSize="13px" fontWeight="600" mb="10px">
        {props.category}
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
          {props.rating}
          <AiFillStar />
        </Button>
        <Text fontSize={"13px"} mb={"10px"} color="grey" fontWeight={600}>
          {props.CardRatingDetail}
        </Text>
      </Flex>
      <Flex gap={"10px"}>
        <Text
          fontSize={"13px"}
          mb={"10px"}
          color="red"
          fontWeight={600}
          textDecor="line-through"
        >
          {props["price"] ? `₹${props["price"] + 300}` : "0%"}
        </Text>
        <Text fontSize={"13px"} mb={"10px"} color="#1aab2a" fontWeight={600}>
          {props["discount"] ? `${props["discount"]}%` : "0%"}
        </Text>
      </Flex>
      <Flex align={"center"} justify="space-between">
        <Heading fontSize={"15px"} mb="2px" fontWeight={600}>
          ₹{props.price}
        </Heading>
        <Button
          fontWeight={"700"}
          bg="white"
          size={"sm"}
          color="#ff6f61"
          _hover={{
            bg: "#ff6f61",
            color: "white",
          }}
          border={"2px solid #ff6f61"}
          onClick={() => {
            //   if (isAuth && addText.length === 3) {
            //     dispatch(
            //       postCartData({
            //         title: props.title,
            //         src: props.src,
            //         packsize: props.packsize,
            //         price: props.price,
            //         "strike-price": props["strike-price"],
            //         "discount-percent": props["discount-percent"],
            //         qty: 1,
            //         rating: props.rating,
            //         CardRatingDetail: props.CardRatingDetail,
            //         description: props.description,
            //         category: props.category,
            //       })
            //     );
            //   }
            //   if (!isAuth) {
            //     toast({
            //       title: "Product cannot be added.",
            //       description: "Please login first.",
            //       status: "error",
            //       duration: 9000,
            //       isClosable: true,
            //       position: "top",
            //       bg: "#ff6f61",
            //     });
            //   }
            // isAuth &&
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your product has been added",
              showConfirmButton: false,
              timer: 1500,
            });
            setAddText("ADDED ✓");
            handleAdd({...props})
            
          }}
      
          // display={isAuth ? "block" : "none"}
        >
          {addText}
        </Button>
      </Flex>
    </GridItem>
  );
};

export default ProductCard;
