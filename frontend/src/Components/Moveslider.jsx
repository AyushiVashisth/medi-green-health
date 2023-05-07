import React from 'react'


import Slider from "react-slick";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Moveslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Box>
      <Slider {...settings}>
        <Box>
          <Link>
            <Image w="100%" h="200px" src="/assets/1.png" alt="err" />
            </Link>
        </Box>
        <Box>
          <Link>
        <Image w="100%" h="200px" src="/assets/2.png" alt="err" />
        </Link>
        </Box>
        <Box>
          <Link>
        <Image w="100%" h="200px" src="/assets/3.png" alt="err" />
        </Link>
        </Box>
        <Box>
          <Link>
        <Image w="100%" h="200px" src="/assets/4.png" alt="err" />
        </Link>
        </Box>
        <Box>
          <Link>
        <Image w="100%" h="200px" src="/assets/5.png" alt="err" />
        </Link>
        </Box>
        <Box>
          <Link>
        <Image w="100%" h="200px" src="/assets/6.png" alt="err" />
        </Link>
        </Box>
      </Slider>
    </Box>
  )
}

export default Moveslider