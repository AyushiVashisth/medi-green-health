import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const adminUser = [

  {
    "name":"Ankush Kumar",
    "email":"adminankush@gmail.com",
    "password":"medigreen@123"
  },
  {
    "name":"Ayushi Vashisth",
    "email":"adminayushi@gmail.com",
    "password":"medigreen@123"
  },
  {
    "name":"Aajad Kumar",
    "email":"adminaajad@gmail.com",
    "password":"medigreen@123"
  },
  {
    "name":"Sourabh Patel",
    "email":"adminsourabh@gmail.com",
    "password":"medigreen@123"
  },
  {
    "name":"Akshay Kumar",
    "email":"adminakshay@gmail.com",
    "password":"medigreen@123"
  },
]

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   if((email==="adminankush@gmail.com" ||email==="adminayushi@gmail.com" ||email==="adminaajad@gmail.com" ||email==="adminsourabh@gmail.com" ||email==="adminakshay@gmail.com") && password === "medigreen@123"){
    toast({
      title: "Hello Admin.",
      description: "Login Successfully.",
      status: "success",
      position: "top",
      duration: 2000,
      isClosable: true,
    });
    navigate("/adminhome");
   }else{
    toast({
      title: "Wrong Credentials.",
      description: "Please try again to Login.",
      status: "error",
      position: "top",
      duration: 2000,
      isClosable: true,
    });
   }

     
        
    setEmail("");
    setPassword("");
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#eeeeee"}
      minW={["100%", "100%"]}
    >
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"#004aad"}>
            MEDI GREEN{" "}
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow={"lg"}
          p={[6, 6, 7, 8]}
          maxW={["100%", "100%"]}
          w={["350px", "400px", "400px", "500px"]}
        >
          <Heading fontSize={"2xl"} textAlign="center" p="10">
            ADMIN LOGIN
          </Heading>
          <Stack spacing={4}>
            <form>
              <FormControl
                id="email"
                display="inline-block"
                mr={2}
                
                width={"100%"}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"black"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"#004aad"}
                  color={"white"}
                  _hover={{
                    bg: "#eeeeee",
                    color: "black",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AdminLogin;
