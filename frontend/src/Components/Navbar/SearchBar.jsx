import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
// import React, { useContext, useState } from "react";
import { FaSearch, FaSearchLocation } from "react-icons/fa";
// import { SearchContext } from "../../Context/SearchContext";
// import { useNavigate } from "react-router-dom";
// const initial = "";
function SearchBar() {
//   const { setQuery } = useContext(SearchContext);
//   const [searchtext, setSearchext] = useState(initial);
//   const navigate = useNavigate();

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       setQuery(searchtext);
//       setSearchext("");
//       navigate("/products");
//     }
//   };

  return (
    <Box fontFamily={"Clear-Sans"} shadow={"sm"} bg="#fff">
      <Flex justify={"space-around"} minH={"40px"} py="10px" align={"center"}>
        <Flex
          gap={0.1}
          width={{ base: "100%", md: "60%" }}
          flexDir={{ base: "column", md: "row" }}
          align={"center"}
        >
          <InputGroup size={"sm"} width={{ base: "90%", md: "30%" }}>
            <InputLeftAddon children={<FaSearchLocation color="gray.300" />} />
            <Select bg={"#f1f4f6"} focusBorderColor="#f1f4f6">
              <option value="New Delhi">New Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Chennai">Chennai</option>
              <option value="Hydrabad">Hydrabad</option>
              <option value="Jaipur">Jaipur</option>
            </Select>
          </InputGroup>
          <InputGroup size={"sm"} width={{ base: "90%", md: "60%" }}>
            <Input
              placeholder="Search for Medical and Health Products"
              bg={"#f1f4f6"}
              focusBorderColor="#f1f4f6"
        //       onChange={(e) => setSearchext(e.target.value)}
        //       onKeyDown={handleKeyDown}
            />
            <InputRightElement
              children={<FaSearch color="green.500" />}
              pointerEvents={"auto"}
              cursor="pointer"
        //       onClick={handleKeyDown}
            />
          </InputGroup>
        </Flex>

        <Flex
          gap={2}
          align="center"
          justifyContent={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Text fontSize={"14px"}>QUICK BUY! Get 25% off on medicines*</Text>
          <Button
            px="30px"
            bg={"#ff6f61"}
            color="#fff"
            borderRadius={"5px"}
            fontSize={"16px"}
            fontWeight="300"
            _hover={{}}
            py="0px"
          >
            Quick Order
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SearchBar;
