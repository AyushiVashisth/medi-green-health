import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import "./AddProducts.css";

const AddProducts = () => {
  return (
    <Box>
      <Flex className="addproductpagecontainer" justifyContent={"space-evenly"}>
        <Box className="sidebarcont"></Box>
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
                <FormLabel>ID</FormLabel>
                <Input type="number" name="id" placeholder="Enter ID" />
                <FormLabel>Image1</FormLabel>
                <Input
                  type="text"
                  name="image"
                  placeholder="Enter Image1 URL"
                />
                <FormLabel>Image2</FormLabel>
                <Input
                  type="text"
                  name="image"
                  placeholder="Enter Image2 URL"
                />
                <FormLabel>Image3</FormLabel>
                <Input
                  type="text"
                  name="image"
                  placeholder="Enter Image3 URL"
                />
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter Product Title"
                />

                <FormLabel>Discount</FormLabel>
                <Input
                  type={"number"}
                  name="discount"
                  placeholder="Enter Discount"
                />

                <FormLabel>Rating</FormLabel>
                <Input
                  type="text"
                  name="rating"
                  placeholder="Enter Product Rating"
                />
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter Product Price"
                />
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  name="category"
                  placeholder="Enter Product Category"
                />
                <Button
                  backgroundColor={"#004aad"}
                  color="white"
                  marginTop={"3%"}
                  type="submit"
                >
                  ADD PRODUCT
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddProducts;
