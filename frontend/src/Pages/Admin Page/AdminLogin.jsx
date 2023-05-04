import React from "react";
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
} from "@chakra-ui/react";

const AdminLogin = () => {
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
                isRequired
                width={"100%"}
              >
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
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
