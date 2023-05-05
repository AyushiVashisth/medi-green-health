
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


const Carousalsignup = () => {
  var settings = {
    width: "100px",
    height: "100px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <Box margin="auto"  >
      <Slider {...settings}>
        <Box justifyContent="center" w="100%" h="250px" textAlign="center"   >
          <Image src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png" margin="auto" />
          <br />
          <Text fontSize='md' as="b" >know your medicine</Text>
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >view medicine information like usage sideeffects and cheaper substutes before you take them</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="600px" h="250px" textAlign="center"   >
          <Image src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png" margin="auto" />
          <br />
          <Text fontSize='md' as="b" >Medicines home delivered</Text>
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Order any medicine or health product and we will deliver it for free.Enjoy discount on everything </Text>
          <br />
        </Box>
        <Box justifyContent="center" w="600px" h="250px" textAlign="center"   >
          <Image src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png" margin="auto" />
          <br />
          <Text fontSize='md' as="b" >Lab Tests at  Home</Text>
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Book any test from any lab.we will collect the sample and send the reports save upto 80% on everytime</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="600px" h="250px" textAlign="center"   >
          <Image src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png" margin="auto" />
          <br />
          <Text fontSize='md' as="b" >Make Healthcare Simpler</Text>
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'  >Get medicine information,order medicines.booklab tests and consult doctors online from the comfort of your home</Text>
          <br />
        </Box>
        <Box justifyContent="center" w="600px" h="250px" textAlign="center"   >
          <Image src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png" margin="auto" />
          <br />
          <Text fontSize='md' as="b" >Health Related Queries</Text>
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Consult Our certified doctors from anywhere anytime,and for free,we guarentee your privacy</Text>
          <br />
        </Box>
      </Slider>
    </Box>
  )
}

export default Carousalsignup