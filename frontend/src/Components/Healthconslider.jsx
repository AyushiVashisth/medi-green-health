
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


const Healthconslider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        rtl: true,
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
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'  as ="b"  >Diabetics care</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Cardiac care</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src=" https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"    >Stomach care</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src=" https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Liver care</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src=" https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Bone Joint & muscle care</Text>
          <br />
        </Box>

        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src=" https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'  as ="b"  >Kidney care</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src=" https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"   >Derma care</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"  >Respiratory care</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs' as ="b"  >Eye care</Text>
          <br />
        </Box>
      </Slider>
    </Box>
  )
}

export default Healthconslider