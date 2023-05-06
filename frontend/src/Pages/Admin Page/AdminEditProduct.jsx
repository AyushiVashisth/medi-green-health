import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

const AdminEditProduct = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");

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
  };

  return (
    <Box>
      <Flex className="addproductpagecontainer" justifyContent={"space-evenly"}>
        <Box className="sidebarcont"></Box>
        <Box className="adminpagedashboardbox">
          <Box
            className="form"
            padding={"3%"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <form>
              <Heading color={"#004aad"} marginBottom="2%">
                EDIT PRODUCT:
              </Heading>

              <FormControl isRequired>
                <FormLabel>ID</FormLabel>
                <Input type="text" name="id" placeholder="Enter Product Id" />
                <FormLabel>Image</FormLabel>
                <Input type="text" name="image" placeholder="Enter Image URL" value={image}
                  onChange={(e)=>setImage(e.target.value)} />
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter Product Title"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />

                <FormLabel>Discount</FormLabel>
                <Input
                  type="number"
                  name="discount"
                  placeholder="Enter Discount"
                  value={discount}
                  onChange={(e)=>setDiscount(e.target.value)}
                />
                <FormLabel>Rating</FormLabel>
                <Input
                  type="number"
                  name="rating"
                  placeholder="Enter Product Rating"
                  value={rating}
                  onChange={(e)=>setRating(e.target.value)}
                />

                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter Product Price"
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                />
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  name="category"
                  placeholder="Enter Product category"
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                />
                <Button
                  backgroundColor={"#004aad"}
                  color="white"
                  marginTop={"3%"}
                  type="submit"
                >
                  EDIT PRODUCT
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminEditProduct;
