
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
import { Link } from "react-router-dom";


const Brandslider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};
  return (
    <Box margin="auto" paddingTop="30px" bgColor="white" >
      <Slider {...settings}>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2faad55-b08e-46b0-87c4-5aa9bc9c0801.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'  as ="b"  >Detol</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e9be0e44-1ea6-4a1e-93e3-1f21c1d96d08.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Dabur</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5361468d-aaa9-4f58-829a-5d69f335924d.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"    >Nivea</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src=" https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/074ed4a2-6650-436e-b876-13fa6871a0ce.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Himalaya</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4d20c003-645b-475e-b859-6ddad1ab439d.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Dr.Morpen</Text>
          <br />
        </Box>

        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/508a5e42-eeeb-4db4-9aaa-c068a6ef7299.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'  as ="b"  >Contour</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1e7b19a4-a7c7-41a4-9c9f-7d9beb9f73b1.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Hanaplast</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/459ab067-8cb6-446a-b0d1-8b8a718ad701.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"  >Tejasya Ayurveda</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fbb2dcab-f58d-4cc3-a94b-e8829133dada.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"  >Tata 1Mg Health Products</Text>
          <br />
        </Box>
      </Slider>
    </Box>
  )
}

export default Brandslider