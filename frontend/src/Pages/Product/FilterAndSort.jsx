import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Heading,
  Hide,
  Radio,
  RadioGroup,
  Show,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/Product/actionProduct";

const FilterAndSort = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Show above="sm">
        <Box
          bg="white"
          w={{ lg: "190px", md: "250px" }}
          h={{ lg: "500px", md: "500px" }}
          ml={{ lg: "7%", md: "5%" }}
          mt="15px"
          p={5}
          fontSize={{ lg: "14px", md: "10px" }}
        >
          <Box m="20px 0">
            <Heading fontSize={"14px"}>FILTER</Heading>
            <CheckboxGroup colorScheme="green">
              <Stack color={"grey"} spacing={[1, 1]} direction={["column"]}>
                <Checkbox fontSize="10px" value="calcium">
                  Calcium
                </Checkbox>
                <Checkbox value="supplement">Suppliments</Checkbox>
                <Checkbox value="aryurvedic">Ayurvedic</Checkbox>
                <Checkbox value="mask">Masks</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
          <Divider />
          <Box m="20px 0">
            <Heading fontSize={"14px"}>SORT BY PRICE</Heading>
            <RadioGroup colorScheme="green">
              <Stack color={"grey"} direction="column" fontSize={"12px"}>
                <Radio value="asc">Low to high</Radio>
                <Radio value="des">High to low</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Divider />
          <Box m="20px 0">
            <Heading fontSize={"14px"}>SORT BY RATING</Heading>
            <RadioGroup colorScheme="green">
              <Stack color={"grey"} direction="column" fontSize={"12px"}>
                <Radio value="asc">Low to high</Radio>
                <Radio value="des">High to low</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Button
            fontWeight={"700"}
            bg="white"
            size={"sm"}
            color="#ff6f61"
            _hover={{
              bg: "#ff6f61",
              color: "white",
            }}
          >
            Reset
          </Button>
        </Box>
      </Show>

      {/* -------------------- */}

      <Hide above="sm">
        <>
          <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
            Filter and Sort
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box>
                  <Box>
                    <Heading fontSize={"14px"} mt="20px">
                      FILTER
                    </Heading>
                    <CheckboxGroup colorScheme="green">
                      <Stack
                        color={"grey"}
                        fontSize={"12px"}
                        spacing={[1, 1]}
                        direction={["column"]}
                      >
                        <Checkbox fontSize="10px" value="calcium">
                          Calcium
                        </Checkbox>
                        <Checkbox value="Suppliments">Suppliments</Checkbox>
                        <Checkbox value="Proteins">Proteins</Checkbox>
                        <Checkbox value="masks">masks</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                  <Box m="10px 0">
                    <Heading fontSize={"14px"}>SORT BY PRICE</Heading>
                    <RadioGroup colorScheme="green">
                      <Stack
                        color={"grey"}
                        direction="column"
                        fontSize={"12px"}
                      >
                        <Radio value="asc">Low to high</Radio>
                        <Radio value="desc">High to low</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Divider />
                  <Box m="10px 0">
                    <Heading fontSize={"14px"}>SORT BY RATING</Heading>
                    <RadioGroup colorScheme="green">
                      <Stack
                        color={"grey"}
                        direction="column"
                        fontSize={"12px"}
                      >
                        <Radio value="asc">Low to high</Radio>
                        <Radio value="desc">High to low</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Button
                    fontWeight={"700"}
                    bg="white"
                    size={"sm"}
                    color="#ff6f61"
                    _hover={{
                      bg: "#ff6f61",
                      color: "white",
                    }}
                  >
                    Reset
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Hide>
    </>
  );
};
export default FilterAndSort;
