import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { patchProduct } from "../../redux/admincrud/action";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

const initialState = {
  image: "",
  title: "",
  rating: "",
  price: "",
  discount: "",
  category: ""
};

const AdminEditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  // console.log(id);

  const singleproduct = useSelector((state) => {
    //  console.log(state)
    return state.AdminProductReducer.products;
  });
  // console.log(singleproduct)

  useEffect(() => {
    const data = singleproduct.find((ele) => ele._id === id);
    setProduct(data);
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(patchProduct(product, id)).then((res) => {
      toast({
        title: "product Updated.",
        description: "Product is Updated in database.",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true
      });
      navigate("/adminproducts");
    });
  };

  return (
    <Box>
      <AdminNavbar />
      <Box>
        <Flex
          className="addproductpagecontainer"
          justifyContent={"space-evenly"}
        >
          <Box className="sidebarcont">
            <AdminSidebar />
          </Box>
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
                  <Input
                    type="text"
                    name="id"
                    value={product._id}
                    placeholder="Enter Product Id"
                  />
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="text"
                    name="image"
                    placeholder="Enter Image URL"
                    value={product.image}
                    onChange={handleChange}
                  />
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter Product Title"
                    value={product.title}
                    onChange={handleChange}
                  />

                  <FormLabel>Discount</FormLabel>
                  <Input
                    type="number"
                    name="discount"
                    placeholder="Enter Discount"
                    value={product.discount}
                    onChange={handleChange}
                  />
                  <FormLabel>Rating</FormLabel>
                  <Input
                    type="number"
                    name="rating"
                    placeholder="Enter Product Rating"
                    value={product.rating}
                    onChange={handleChange}
                  />

                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    name="price"
                    placeholder="Enter Product Price"
                    value={product.price}
                    onChange={handleChange}
                  />
                  <FormLabel>Category</FormLabel>
                  <Input
                    type="text"
                    name="category"
                    placeholder="Enter Product category"
                    value={product.category}
                    onChange={handleChange}
                  />
                  <Button
                    backgroundColor={"#004aad"}
                    color="white"
                    marginTop={"3%"}
                    type="submit"
                    onClick={handleEdit}
                  >
                    EDIT PRODUCT
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

export default AdminEditProduct;
