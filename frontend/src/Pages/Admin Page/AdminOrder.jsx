import React from "react";
// import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
  Grid
  // useToast
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import AdminSidebar from "../../Components/AdminSidebar";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

const products = [
  {
    _id: "6426fc0afcf829b54a307ae1",
    title: "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
    src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/0fa72f2c-072d-4c6a-bc52-446edab403a4/tata-1mg-salmon-omega-3-fish-oil-capsule.jpeg",
    packsize: "bottle of 60 capsules",
    price: 524,
    strike: "995",
    discount: "47%",
    maxQty: 7,
    rating: "4.4",
    CardRatingDetail: "1506",
    description:
      "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule is your complete daily health supplement, packed with 25 essential vitamins and minerals that boost immunity, maintain cardiovascular health, and improve fitness and strength, enhance memory and concentration and support overall wellbeing.",
    category: "supplement"
  },
  {
    _id: "6426fc0afcf829b54a307ae2",
    title:
      "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablet, Joint Support, Bones Health, Immunity & Energy Support",
    src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gc3u9gfc331wtsipnljl/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablet-joint-support-bones-health-immunity-energy-support.jpg",
    packsize: "bottle of 60 tablets",
    price: 277,
    strike: "595",
    discount: "53%",
    maxQty: 3,
    rating: "4.3",
    CardRatingDetail: "2418 ratings",
    description:
      "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablet is a dietary supplement that supports joint health, bone health, immunity and energy. It contains calcium, which is essential for building and maintaining strong bones, vitamin D3, which helps the body absorb calcium, zinc, which supports the immune system, and magnesium, which plays a role in muscle and nerve function. Additionally, it also contains alfalfa, which is rich in antioxidants and nutrients that support overall health and well-being. This bottle contains 60 tablets, and each tablet is designed to be easy to swallow.",
    category: "calcium"
  },
  {
    _id: "6426fc0afcf829b54a307ae3",
    title: "Tata 1mg Lumbar Sacral Belt for Lower Back Support Universal",
    src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gggpxmbrgyv0uqhzwyy8/tata-1mg-lumbar-sacral-belt-for-lower-back-support-universal.jpg",
    packsize: "box of 1 Unit",
    price: 451,
    strike: "800",
    discount: "43%",
    maxQty: 7,
    rating: "4.2",
    CardRatingDetail: "94 ratings",
    description:
      "The Tata 1mg Lumbar Sacral Belt is designed to provide support to the lower back and to help alleviate pain and discomfort caused by various back conditions. The belt is made of high-quality materials that are durable and provide the necessary compression to support the lumbar region. The belt is also adjustable and can be customized to fit different body sizes. The Tata 1mg Lumbar Sacral Belt is ideal for individuals who have to stand or sit for long periods, as well as those who engage in physical activities that put a strain on the lower back. It is recommended by doctors and physiotherapists for use during recovery from back injuries or surgery.",
    category: "fitness"
  }
  // {
  //   "_id": "6426fc0afcf829b54a307ae4",
  //   "title": "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health",
  //   "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gmkrpf1imjj9djwvq4gq/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-capsule-for-immunity-energy-overall-health.jpg",
  //   "packsize": "bottle of 60 capsules",
  //   "price": 422,
  //   "strike-price": "995",
  //   "discount": "57%",
  //   "maxQty": 8,
  //   "rating": "4.2",
  //   "CardRatingDetail": "1243 ratings",
  //   "description": "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule is a dietary supplement that helps support immunity, energy and overall health. It contains essential vitamins and minerals such as zinc, calcium, and vitamin D, which are important for maintaining healthy bones and teeth, and also plays a crucial role in maintaining a healthy immune system. This multivitamin capsule is designed to help provide the body with the necessary nutrients to help support overall health and well-being. This bottle contains 60 capsules and each capsule is designed to be easy to swallow.",
  //   "category": "calcium"
  // }
];

const AdminOrder = () => {
  return (
    <Box>
      <AdminNavbar />
      <Box>
        <Box>
          <AdminSidebar />
        </Box>
        <Box w="80%" ml="20%">
          <Grid
            templateColumns={{
              xl: "repeat(4, 1fr)",
              lg: "repeat(3, 1fr)",
              md: "repeat(2, 1fr)",
              base: "repeat(1, 1fr)"
            }}
            gap="20px 20px"
            mt="30px"
          >
            {products.length > 0 &&
              products.map((item) => (
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
                  <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"}>
                    <Image
                      objectFit={"contain"}
                      h="100%"
                      src={item.src}
                      alt={item._id}
                      cursor="pointer"
                    />
                  </Box>
                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    mb="5px"
                    cursor="pointer"
                  >
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
                        bg: "#4dc65b"
                      }}
                    >
                      {item.rating}
                      <AiFillStar />
                    </Button>
                  </Flex>
                  <Flex gap={"10px"}>
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
                      {item.strike}
                    </Text>

                    <Text
                      fontSize={"13px"}
                      mb={"10px"}
                      color="#1aab2a"
                      fontWeight={600}
                    >
                      {item.discount}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminOrder;
