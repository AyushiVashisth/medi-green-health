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
import { useDispatch } from "react-redux";
import { postLogin } from "../../redux/AdminAuthRedux/action";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetail = { email, password };

    dispatch(postLogin(userDetail))
      .then(() => {
        toast({
          title: "Login Success.",
          description: "Welcome Admin.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Wrong Credential.",
          description: "Please Try again to Login.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });

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
