import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactImageMagnify from "react-image-magnify";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  ListItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import Navbar1 from "../../Components/Navbar/Navbar1";
import HomeNavbar from "../../Components/Navbar/HomeNavbar";

const SingalProductPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const { image, rating, price, title, discount, category } = product;
  const [addText, setAddText] = useState("Add To Cart");
  console.log(product);
  useEffect(() => {
    axios
      .get(`https://onemg-database.onrender.com/vitamin/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar1 />
      <HomeNavbar />
      <DIV>
        <Stack
          direction={{ lg: "row", md: "column", base: "column" }}
          m={{ lg: "40px auto", md: "30px auto", base: "20px auto" }}
        >
          <Flex
            direction={{ lg: "row", md: "row", base: "column" }}
            ml={["40px", "0px", "0px", "0px", "0px"]}
          >
            <Box id="image">
              <Box style={{ width: "300px", height: "200px" }}>
                <Box width="90%">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: { title },
                        isFluidWidth: true,
                        src: image,
                        width: 140,
                        height: 180,
                      },
                      largeImage: {
                        src: image,
                        width: 400,
                        height: 500,
                      },
                      enlargedImageContainerStyle: {
                        width: "100%",
                        height: "100%",
                        backgroundSize: "cover",
                      },
                      lensStyle: { backgroundColor: `rgba(0,0,0,0.3)` },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box p={""} mt={["220px", "0px", "0px", "0px", "0px"]}>
              <Text
                fontSize={{ lg: "24px", md: "18px", base: "16px" }}
                mb={"10px"}
                fontWeight={700}
                lineHeight="35px"
              >
                {title}
              </Text>
              <Text
                fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                mb={"10px"}
                color="#ff6f61"
                fontWeight={600}
              >
                Tata 1mg Healthcare Solutions Private Limited
              </Text>
              <Flex gap={"20px"}>
                <Button
                  bg="#1aab2a"
                  size={"xs"}
                  color={"#fff"}
                  fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                  mb={"10px"}
                  fontWeight={600}
                  zIndex={-1000}
                >
                  {rating} <AiFillStar />
                </Button>
              </Flex>
              <Text color="grey" fontSize={"18px"} mb={"10px"} fontWeight={600}>
                {category}
              </Text>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  alignSelf: "flex-start",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                <li>
                  Contains a blend of vitamins and minerals to support overall
                  health and well-being
                </li>
                <li>
                  Formulated with antioxidants to help protect against oxidative
                  stress and free radical damage
                </li>
                <li>
                  Includes probiotics to support digestive health and immune
                  function
                </li>
                <li>
                  Non-GMO, gluten-free, and free from artificial colors,
                  flavors, and preservatives
                </li>
                <li>Third-party tested for purity and potency</li>
                <li>
                  Made in a GMP-certified facility to ensure quality and
                  consistency
                </li>
                <li>Easy-to-swallow capsules for convenient daily use</li>
                <li>100% satisfaction guarantee or your money back</li>
              </ul>
            </Box>
          </Flex>
          <Grid
            bgColor={"white"}
            // w="409px"
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(1,1fr)",
            }}
            gap="10"
          >
            <VStack
              bgColor={"white"}
              h={"347px"}
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              borderRadius={"10px"}
              ml={["70px", "0px", "0px", "0px", "0px"]}
            >
              <Flex h="37px" bgColor={"green.200"} borderTopRadius="10px" p={2}>
                <Box ml={"20px"}>
                  <BsGraphUpArrow size={20} />
                </Box>
                <Text ml={"20px"} fontSize={12}>
                  26 people bought this recently
                </Text>
              </Flex>
              <Box w={"100%"} pl="5" pr="5">
                <RadioGroup defaultValue="1">
                  <Stack direction="column">
                    <Radio value="1" colorScheme="orange">
                      <Flex alignItems={"center"}>
                        <Text fontSize={"25"} mr="20px">
                          ₹{price}
                        </Text>
                        <Text fontSize={"15"} ml={"10px"}>
                          {discount} off
                        </Text>
                      </Flex>
                    </Radio>
                    <Radio value="2" colorScheme="orange">
                      <Flex alignItems={"center"}>
                        <Text fontSize={"25"} mr="20px">
                          ₹{price}
                        </Text>
                        <Text fontSize={"15"}>
                          + free shipping and 3% Extra
                        </Text>
                      </Flex>
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Text p={"2"}>Inclusive of all taxes</Text>
                <Flex mb={"20px"}>
                  <Select placeholder="1 Box" size="xs" w={"100px"} />
                  <Text ml={"20px"}>of 1 Unit</Text>
                </Flex>
                <Button
                  w={"100%"}
                  size={"md"}
                  borderRadius="5px"
                  bg={"#ff6f61"}
                  _hover={{
                    bg: "#fd7c70",
                  }}
                  color="#fff"
                  onClick={() => {
                    //     if (addText.length > 9) {
                    //       dispatch(
                    //         postCartData({
                    //           title: data.title,
                    //           src: data.src,
                    //           packsize: data.packsize,
                    //           price: data.price,
                    //           "strike-price": data["strike-price"],
                    //           "discount-percent": data["discount-percent"],
                    //           qty: 1,
                    //           rating: data.rating,
                    //           CardRatingDetail: data.CardRatingDetail,
                    //           description: data.description,
                    //           category: data.category,
                    //         })
                    //       ).then(() => {
                    setAddText("ADDED ✓");
                    //       });
                    //     }
                  }}
                >
                  {addText}
                </Button>
              </Box>
            </VStack>
            <VStack
              p={5}
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              borderRadius={"10px"}
              mt="20px"
              w={{
                base: "250px",
                md: "250px",
                lg: "409px",
              }}
              mb={"20px"}
              ml={["80px", "0px", "0px", "0px", "0px"]}
            >
              <Flex>
                <Text fontSize={15} as="b" mr={"10px"}>
                  Earliest delivery by
                </Text>
                <Text as="b" color={"green"}>
                  10pm, Tomorrow
                </Text>
              </Flex>
              <Text>Delivering to: 110020, New Delhi</Text>
            </VStack>
            <Image
              src="https://onemg.gumlet.io/b7cb336e-f8ca-4700-becd-7450a5d538b6_1680157560.jpg?w=410&h=94&format=auto"
              alt="single img"
            />
            <VStack
              mt={"20px"}
              border="1px dotted grey"
              w={{
                base: "250px",
                md: "250px",
                lg: "409px",
              }}
              ml={["70px", "0px", "0px", "0px", "0px"]}
            >
              <Flex p={2} alignItems="center">
                <Image
                  src="https://onemg.gumlet.io/vibatg4xwiuep6bhonzs.svg"
                  mr={"20px"}
                  w="20px"
                  h={"20px"}
                />
                <Text fontSize={12}>
                  <Text as="b">Paytm Wallet:</Text>
                  Pay with Paytm Wallet on Tata 1mg for ₹799 or more and get up
                  to ₹400 cashback with minimum cashback of ₹20. Offer ends 31st
                  March 2023.
                </Text>
              </Flex>
            </VStack>
          </Grid>
        </Stack>
        <Box bgColor={"#f8f8f8"}>
          <Stack
            direction={{ xl: "row", lg: "column", base: "column" }}
            m={{ lg: "40px auto", md: "30px auto", base: "20px auto" }}
            bgColor={"#f8f8f8"}
          >
            <Flex
              direction={{ lg: "row", md: "column", base: "column" }}
              pl="10"
              pt={"10"}
              pb={"10"}
              justifyContent={"space-between"}
            >
              <VStack
                textAlign={"left"}
                bgColor={"white"}
                w={{
                  base: "100%",
                  md: "100%",
                  lg: "65%",
                }}
                p={4}
              >
                <Text alignSelf={"flex-start"} fontSize={"20"} mb={"10px"}>
                  Information about {title}
                </Text>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  {title}
                </Text>
                <Text alignSelf={"flex-start"} fontSize={"14"} mb={"10px"}>
                  Pay with Paytm Wallet on Tata 1mg for ₹799 or more and get up
                  to ₹400 cashback with minimum cashback of ₹20. Offer ends 31st
                  March 2023.
                </Text>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  Uses:
                </Text>
                <Text alignSelf={"flex-start"} fontSize={"14"} mb={"10px"}>
                  A glucometer is used to measure blood glucose levels.
                </Text>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  Product Specifications and Features:
                </Text>
                <UnorderedList
                  spacing={5}
                  alignSelf={"flex-start"}
                  fontSize={"14"}
                  mb={"10px"}
                  p={0}
                >
                  <ListItem ml={"15px"}>
                    Second-chance® sampling: 60 sec.
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Provides highly accurate results and is easy to use
                  </ListItem>
                  <ListItem ml={"15px"}>
                    SmartLIGHT® target range changes the colour according to the
                    blood glucose level for easier understanding of blood
                    glucose levels
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Connects to the CONTOUR®DIABETES app for easy storage of
                    readings
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Second-chance® allows to reply more blood to the same test
                    stript to help minimise the strip wastage
                  </ListItem>
                </UnorderedList>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  Directions for Use:
                </Text>
                <UnorderedList
                  alignSelf={"flex-start"}
                  fontSize={"14"}
                  mb={"10px"}
                  spacing={5}
                  p={0}
                >
                  <ListItem ml={"15px"}>
                    Insert the CONTOUR®PLUS test strip, and the meter will
                    switch on
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Let the blood drop be sipped into the test strip
                  </ListItem>
                  <ListItem ml={"15px"}>
                    View the test result together with the smartLIGHT® colour
                    indicator
                  </ListItem>
                </UnorderedList>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  How often should you test your blood glucose levels?
                </Text>
                <Text alignSelf={"flex-start"} fontSize={"14"} mb={"10px"}>
                  In the case of type 1 diabetes, check the blood glucose levels
                  several times a day, such as before and after meals and before
                  and after exercise or as advised by the doctor. Whereas, in
                  the case of type 2 diabetes, monitoring the sugar levels might
                  be based on the severity of the condition, which can be
                  several times a day, once a day, or thrice a week. Hence, talk
                  to the doctor about how often blood glucose levels should be
                  tested.
                </Text>
              </VStack>
              <Grid
                bgColor={"#f8f8f8"}
                // w="409px"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(1,1fr)",
                }}
                margin="auto"
                gap="10"
                ml={"10px"}
                mt={{
                  base: "20px",
                  md: "20px",
                  lg: "0",
                }}
              >
                <VStack
                  w={{
                    base: "250px",
                    md: "250px",
                    lg: "409px",
                  }}
                  bgColor="white"
                  p={5}
                >
                  <Image
                    src="https://onemg.gumlet.io/Doctor_xqon4h.png"
                    m={"auto"}
                    w="100px"
                    h={"100px"}
                  />
                  <Button variant={"outline"} bgColor="500">
                    Consult Doctors Online
                  </Button>
                </VStack>
                <VStack bgColor="white" p={5}>
                  <Flex>
                    <VStack>
                      <Text alignSelf={"flex-start"}>Stressful life?</Text>
                      <Text alignSelf={"flex-start"}>
                        Stay on top of your Health with our
                      </Text>
                      <Text alignSelf={"flex-start"} as={"b"} fontSize="22px">
                        Preventive Health Packages
                      </Text>
                    </VStack>
                    <Image
                      w={"100px"}
                      h={"100px"}
                      src="https://onemg.gumlet.io/Preventive_Health_Package_yaejrz.png?format=auto"
                    />
                  </Flex>
                  <Button
                    variant={"outline"}
                    colorScheme={"500"}
                    alignSelf={"flex-end"}
                  >
                    Book a Lab Test Online
                  </Button>
                </VStack>
                <VStack
                  mt={"20px"}
                  w={{
                    base: "250px",
                    md: "250px",
                    lg: "409px",
                  }}
                  bgColor="white"
                  p={5}
                >
                  <Text alignSelf={"flex-start"} as="b">
                    Content Details
                  </Text>
                  <Text alignSelf={"flex-start"} fontSize="13">
                    Last updated
                  </Text>
                  <Text alignSelf={"flex-start"} fontSize="13">
                    27 Mar 2023 | 03:03 PM (IST)
                  </Text>
                  <Divider />
                  <Flex>
                    <Image
                      w={"80px"}
                      src="https://onemg.gumlet.io/hpmev62q0ukad0pyv31g.png"
                    />
                    <VStack>
                      <Text alignSelf={"flex-start"} fontSize="13">
                        We provide you with authentic, trustworthy and revelant
                        information
                      </Text>
                      <Text
                        alignSelf={"flex-start"}
                        as="b"
                        fontSize="13"
                        color={"500"}
                      >
                        Want to know more
                      </Text>
                    </VStack>
                  </Flex>
                  <Divider />
                  <Flex justifyContent={"space-between"}>
                    <Image
                      w={"30px"}
                      src="https://onemg.gumlet.io/cross_with_tag_1_vsxphe.svg"
                    />
                    <HStack>
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Have issue with the content?
                      </Text>
                      <Text
                        alignSelf={"flex-start"}
                        as="b"
                        fontSize="13"
                        color={"500"}
                      >
                        Report Problem
                      </Text>
                    </HStack>
                  </Flex>
                </VStack>
                <VStack
                  mt={"20px"}
                  w={{
                    base: "250px",
                    md: "250px",
                    lg: "409px",
                  }}
                  bgColor="white"
                  p={5}
                >
                  <Flex justifyContent={"space-between"} w={"80%"}>
                    <VStack>
                      <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/star.png" />
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Authentic Products
                      </Text>
                    </VStack>
                    <VStack>
                      <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/group.png" />
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Great Savings
                      </Text>
                    </VStack>
                    <VStack>
                      <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/delivery.png" />
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Home Delivery
                      </Text>
                    </VStack>
                  </Flex>
                </VStack>
              </Grid>
            </Flex>
          </Stack>
        </Box>
      </DIV>
    </>
  );
};

const DIV = styled.div`
  width: 90%;
  margin: auto;
`;
export default SingalProductPage;
