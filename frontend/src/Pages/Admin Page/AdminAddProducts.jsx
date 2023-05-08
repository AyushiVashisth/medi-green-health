import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import "./AdminAddproducts.css";
import AdminSidebar from "../../Components/AdminSidebar";
import { useDispatch } from "react-redux";
import { postProduct } from "../../redux/admincrud/action";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../../Components/Navbar/Navbar1";
import Navbar2 from "../../Components/Navbar/Navbar2";

const AdminAddProducts = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const produceDetail = {
      image,
      title,
      price,
      discount,
      rating,
      category,
    };

    dispatch(postProduct(produceDetail)).then((res) => {
      toast({
        title: "product Added.",
        description: "Product is added to database.",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
      navigate("/adminproducts");
    });
  };
  return (
    <Box>
      <Navbar1/>
      <Navbar2/>
    <Box>
      <Flex className="addproductpagecontainer" justifyContent={"space-evenly"}>
        <Box className="sidebarcont">
          <AdminSidebar />
        </Box>
        <Box className="adminpagedashboardbox">
          <Box
            className="form"
            padding={"3%"}
            margin="2% auto"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <form>
              <Heading color={"#004aad"} marginBottom="2%">
                ADD PRODUCT
              </Heading>
              <FormControl isRequired>
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  name="image"
                  placeholder="Enter Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter Product Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <FormLabel>Discount</FormLabel>
                <Input
                  type={"number"}
                  name="discount"
                  placeholder="Enter Discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />

                <FormLabel>Rating</FormLabel>
                <Input
                  type="text"
                  name="rating"
                  placeholder="Enter Product Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter Product Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  name="category"
                  placeholder="Enter Product Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <Button
                  backgroundColor={"#004aad"}
                  color="white"
                  marginTop={"3%"}
                  type="submit"
                  onClick={handleSubmit}
                >
                  ADD PRODUCT
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
    </Box>
  );
};

export default AdminAddProducts;
