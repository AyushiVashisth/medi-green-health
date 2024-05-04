import React from "react";
import {
  Box,
  IconButton,
  Image,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const settings = {
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

export default function BigProduct({ allData }) {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: "37%", md: "37%" });
  const left = useBreakpointValue({ base: "0px", md: "0px" });
  return (
    <Box
      bgColor={"white"}
      w="100%"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      mt="10"
      mb="10"
      p={10}
    >
      <Box position={"relative"} width={"95%"} m={"auto"} overflow={"hidden"}>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          color="rgb(255,111,97)"
          borderRadius="full"
          position="absolute"
          top={top}
          left={left}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <IoIosArrowBack />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          color="rgb(255,111,97)"
          borderRadius="full"
          position="absolute"
          top={top}
          right={left}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <IoIosArrowForward />
        </IconButton>
        <Box w={"95%"} m={"auto"}>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {allData.map((elem, index) => (
              <VStack
                key={index}
                style={{ cursor: "pointer" }}
                position={"relative"}
                border={"0px solid red"}
                padding={3}
                spacing={0}
                justifyContent={"center"}
                alignItems={"flex-start"}
                _hover={{ boxShadow: "xl", borderRadius: "xl" }}
              >
                <Box
                  position={"absolute"}
                  top={1}
                  left={1}
                  bg="#19AB2A"
                  color="white"
                  w="max-content"
                  borderRadius="4px"
                  fontSize={"12px"}
                  padding={[0, 1, 1]}
                >
                  SALE
                </Box>

                <Image
                  h={["90px", "120px", "150px"]}
                  style={{ display: "flex", margin: "2px auto" }}
                  src={elem.image}
                />
                <Text
                  textAlign="left"
                  py="1"
                  noOfLines={[1, 1, 2]}
                  fontSize={"14px"}
                  fontWeight={"semibold"}
                >
                  {elem.title}
                </Text>
                <VStack textAlign={"left"}>
                  <Text
                    mr={["19px", "29px", "39px", "49px", "59px"]}
                    fontSize={"14px"}
                  >
                    MRP ₹{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "red"
                      }}
                    >
                      {elem.price + 400}
                    </span>{" "}
                    <span style={{ color: "green" }}> {elem.discount}%</span>
                  </Text>
                </VStack>
                <Text ml="2" as="b">
                  ₹ {elem.price}
                </Text>
              </VStack>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
