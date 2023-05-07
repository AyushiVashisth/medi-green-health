import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Link,
  useBoolean,
} from "@chakra-ui/react";
import useThrottle from "../../Components/customHooks/useThrottle";
import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
function SearchBar() {
  const [onChangeValue, setOnChangeValue] = useState("");
  const [search, setSearch] = useState([]);
  const [Products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean();
  const throttledText = useThrottle(onChangeValue, 400);

  const searchMovies = async () => {
    const data = await fetch(`https://onemg-database.onrender.com/vitamin`);
    const res = await data.json();
    setProducts(res);
  };
  useEffect(() => {
    searchMovies();
  }, []);
  useEffect(() => {
    if (throttledText === "") {
      setSearch([]);
    } else {
      console.log(throttledText);
      let newSuggestions = Products.filter((item) => {
        return item.title
          .split(" ")
          .join("")
          .trim()
          .toLowerCase()
          .indexOf(throttledText) !== -1
          ? true
          : false;
      });
      setSearch(newSuggestions);
      setShowDropdown.on();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [throttledText]);
  console.log(search);
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
          </InputGroup>
          <Input
            ml={"20px"}
            variant="filled"
            placeholder="Search for medicines and health products"
            size="sm"
            w={"100%"}
            onChange={(e) => setOnChangeValue(e.target.value)}
          />
          {search.length > 0 && (
            <Box
              borderRadius="5px"
              position="absolute"
              top="100px"
              zIndex="100"
              bgColor="white"
              overflow="scroll"
              w="38%"
              maxH="400px"
              m="auto"
              left={"280"}
            >
              {search.map((item, i) => {
                return (
                  <Link href={`/products/${item._id}`} key={i + 1}>
                    <Text
                      fontSize="16px"
                      p="10px"
                      cursor="pointer"
                      onClick={setShowDropdown.off}
                    >
                      {item.title}
                    </Text>
                  </Link>
                );
              })}
            </Box>
          )}
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
