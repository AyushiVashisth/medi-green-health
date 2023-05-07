import {
  Stack,
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { CATEGORY_ITEMS } from "../../utils/navbar.data.js";

export default function Navbar2() {
  const linkColor = useColorModeValue("gray.900", "gray.200");
  const linkHoverColor = useColorModeValue("#ff6f61", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.900");

  return (
    <Box
      fontFamily={"Clear Sans"}
      shadow={"sm"}
      display={["none", "none", "none", "block", "block"]}
      border="0px solid black"
      h={"auto"}
    >
      <Stack
        direction={"row"}
        spacing={[0, 0, 1, 1, 3]}
        justifyContent="space-evenly"
        border="0px solid black"
        h={"100%"}
        display={["none", "none", "none", "flex", "flex"]}
      >
        {CATEGORY_ITEMS.map((navItem) => (
          <Box key={navItem.label} border="0px solid red" h={"100%"}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <NavLink to={navItem.href}>
                  <Text
                    p={[0, 0, 0, 1, 1]}
                    border="0px solid black"
                    h={"100%"}
                    href={navItem.href ?? "#"}
                    fontSize={"md"}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Text>
                </NavLink>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={0}
                  rounded={"sm"}
                  maxW={"min-content"}
                >
                  {navItem.children.map((child, i) => (
                    <SimpleGrid column={2} key={i}>
                      <DesktopSubNav key={i} {...child} />
                    </SimpleGrid>
                  ))}
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Flex fontSize="10px">
      <Box width={"max-content"} border={"0px solid black"}>
        <Box
          as={NavLink}
          to={href}
          border={"0px solid red"}
          display={"block"}
          p={2}
          h={"30px"}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            color: "#ff6f61",
          }}
          textAlign="left"
        >
          <Text transition={"all .3s ease"} fontWeight="semibold">
            {label}
          </Text>
        </Box>
        {subLabel.length
          ? subLabel.map((sl, i) => (
              <Box
                as={NavLink}
                key={i}
                to={href}
                display={"block"}
                p={2}
                h={"25px"}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#ff6f61",
                }}
                textAlign="left"
                border={"0px solid black"}
              >
                <Text fontSize={"12px"}>{sl}</Text>
              </Box>
            ))
          : null}
      </Box>
    </Flex>
  );
};
