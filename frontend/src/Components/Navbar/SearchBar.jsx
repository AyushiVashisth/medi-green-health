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
import { useEffect, useState } from "react";
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
  const [add, setP] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      fetch(url).then(res => res.json()).then((loc) => {

        setP(loc.address.county.split(" ")[0])
      })
    })
  }, [])
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
            <InputLeftAddon children={<FaSearchLocation color="gray.300" onClick={
              () => {
                navigator.geolocation.getCurrentPosition(position => {
                  const { latitude, longitude } = position.coords

                  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                  fetch(url).then(res => res.json()).then((loc) => {

                    setP(loc.address.county.split(" ")[0])
                  })
                })
              }
            } />} />
            <Input bg={"#f1f4f6"} focusBorderColor="#f1f4f6" value={add ? add : "New Delhi"} />
            {/* <Select bg={"#f1f4f6"} focusBorderColor="#f1f4f6">
              <option value="New Delhi">{add}</option>
              <option value="Mumbai" onClick={()=>{
                "but"
              }}>Your Location</option>
            </Select> */}
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
