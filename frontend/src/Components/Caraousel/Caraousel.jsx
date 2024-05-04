import React from "react";
import {
  Box,
  Center,
  IconButton,
  Image,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";

const settings = {
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 300,
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

export default function ManualCarousels({ allData, bgcolor }) {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: "37%", md: "37%" });
  const left = useBreakpointValue({ base: "0px", md: "0px" });

  return (
    <Center
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
          color="#fff"
          borderRadius="full"
          position="absolute"
          top={top}
          left={left}
          fontWeight={"9000"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          backgroundColor={"rgb(255,111,97)"}
          onClick={() => slider?.slickPrev()}
        >
          <IoIosArrowBack />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          color="#fff"
          borderRadius="full"
          position="absolute"
          top={top}
          right={left}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          backgroundColor={"rgb(255,111,97)"}
          onClick={() => slider?.slickNext()}
        >
          <IoIosArrowForward />
        </IconButton>
        <Box w={"95%"} m={"auto"}>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {allData.map((elem, index) => (
              <Box key={index} border={"0px solid green"}>
                <Box
                  style={{ cursor: "pointer" }}
                  _hover={{ boxShadow: "xl", rounded: "md" }}
                >
                  <Image
                    style={{ display: "flex", margin: "1px auto" }}
                    src={elem.img}
                  />
                  <Text textAlign="center" py="2" px="2">
                    {elem.name}
                  </Text>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Center>
  );
}
