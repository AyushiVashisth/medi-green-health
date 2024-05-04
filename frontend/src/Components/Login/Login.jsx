// import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

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
  Input,
  Text,
  Box
} from "@chakra-ui/react";
import Carousalsignup from "../CarousalSignup";
import { loca420 } from "../../redux/User/action";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../Context/AuthContext";
import Signup from "../Signup";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const { setIsLoggedIn } = useContext(AuthContext);

  const dispatch = useDispatch();

  const HandleLogin = () => {
    localStorage.removeItem("data");
    // console.log("hilogin");
    setloading(true);
    const user = {
      email,
      password
    };

    dispatch(loca420(user)).then((res) => {
      // console.log("login-res", res);
      setIsLoggedIn(true);
      // setToken(res.token);
      toast({
        title: "Login Successfull",
        description: "Redirecting to Home",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      onClose();
    });
  };

  return (
    <>
      <Text onClick={onOpen}>Login</Text>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" justifyContent="space-between">
              <Box w="45%" h="300px">
                <Carousalsignup />
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                w="50%"
                h="300px"
                textAlign="center"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="md" as="b">
                  Get access to your orders, lab tests & doctor consultations
                </Text>
                <Input
                  w="90%"
                  variant="flushed"
                  placeholder="Enter Email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <Input
                  w="90%"
                  variant="flushed"
                  placeholder="Enter Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <Button
                  colorScheme="red"
                  variant="solid"
                  w="90%"
                  isLoading={loading}
                  onClick={HandleLogin}
                >
                  <Login />
                </Button>
                <Box display="flex" justifyContent="center">
                  <Text fontSize="md">New on 1mg?</Text>
                  <Text color="red" onClose={onClose}>
                    <Signup />
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="xs">By signing up, you agree to our</Text>
                  <Text fontSize="xs">
                    Terms and Conditions & Privacy Policy
                  </Text>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
