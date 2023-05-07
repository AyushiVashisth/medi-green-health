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
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Show,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterAndSort = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();

  //----------------------filter by Category---------------
  let intialCategory = searchParams.getAll("category");
  let [category, setCategory] = useState(intialCategory || []);

  const handleChange = (e) => {
    let arr = [...category];
    const value = e.target.value;
    if (arr.includes(value)) {
      arr = arr.filter((el) => el !== value);
    } else {
      arr.push(value);
    }
    setCategory(arr);
  };
  console.log(category);

  //--------------------sorting---------------
  const initialSort = searchParams.get("sort");
  console.log(initialSort);
  const [sort, setSort] = useState(initialSort || "");
  const handleSort = (val) => {
    val === sort ? setSort("") : setSort(val);
  };

  // this is only use hide
  //const handleSort = (e) => {
  //   let val = e.target.value;
  //   val === sort ? setSort(null) : setSort(val);
  // };

  useEffect(() => {
    if (category || sort) {
      let params = {};
      category && (params.category = category);
      sort && (params.sort = sort);
      setSearchParams(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sort]);

  const handleSortReset = () => {
    setCategory([]);
    setSort("");
  };

  return (
    <>
      <Show above="sm">
        <Box
          bg="white"
          w={{ lg: "190px", md: "250px" }}
          h={{ lg: "500px", md: "500px" }}
          ml={{ lg: "7%", md: "5%" }}
          mt="95px"
          p={5}
          fontSize={{ lg: "14px", md: "10px" }}
        >
          <Box m="20px 0">
            <Heading fontSize={"14px"}>FILTER</Heading>
            <CheckboxGroup
              colorScheme="green"
              value={category}
              onChange={(values) => setCategory(values)}
            >
              <Stack color={"grey"} spacing={3} mt={3} direction={["column"]}>
                <Checkbox
                  fontSize="10px"
                  value="calcium"
                  isChecked={category.includes("calcium")}
                >
                  Calcium
                </Checkbox>
                <Checkbox
                  value="supplement"
                  isChecked={category.includes("supplement")}
                >
                  Suppliments
                </Checkbox>
                <Checkbox
                  value="aryurvedic"
                  isChecked={category.includes("aryurvedic")}
                >
                  Ayurvedic
                </Checkbox>
                <Checkbox value="mask" isChecked={category.includes("mask")}>
                  Masks
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
          <Heading fontSize={"14px"}>SORT BY PRICE</Heading>
          <RadioGroup value={sort} onChange={handleSort} colorScheme="green">
            <Stack direction="column" spacing={3} mt={3}>
              <Radio value="asc" isChecked={sort === "asc"}>
                Low to High
              </Radio>
              <Radio value="desc" isChecked={sort === "desc"}>
                High to Low
              </Radio>
            </Stack>
          </RadioGroup>
          <Button
            fontWeight={"700"}
            spacing={3}
            mt={7}
            ml={7}
            border={"2px solid #ff6f61"}
            p={3}
            bg="white"
            size={"sm"}
            color="#ff6f61"
            _hover={{
              bg: "#ff6f61",
              color: "white",
            }}
            onClick={() => handleSortReset()}
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
                    <Heading fontSize={"16px"} textAlign={"left"}>
                      FILTER
                    </Heading>
                    <Stack
                      color={"grey"}
                      spacing={[1, 1]}
                      direction={["column"]}
                    >
                      <Box>
                        <input
                          type="checkbox"
                          checked={category.includes("calcium")}
                          value={"calcium"}
                          onChange={handleChange}
                        />
                        calcium
                      </Box>
                      <Box>
                        <input
                          type="checkbox"
                          checked={category.includes("supplement")}
                          value={"supplement"}
                          onChange={handleChange}
                        />
                        supplement
                      </Box>
                      <Box>
                        <input
                          type="checkbox"
                          checked={category.includes("aryurvedic")}
                          value={"aryurvedic"}
                          onChange={handleChange}
                        />
                        aryurvedic
                      </Box>
                      <Box>
                        <input
                          type="checkbox"
                          checked={category.includes("mask")}
                          value={"mask"}
                          onChange={handleChange}
                        />
                        mask
                      </Box>
                    </Stack>
                  </Box>
                  <Box m="10px 0">
                    <Heading fontSize={"16px"} textAlign={"left"}>
                      Sort By Price
                    </Heading>
                    <div>
                      <input
                        className="inp"
                        type="checkbox"
                        checked={sort === "asc"}
                        value={"asc"}
                        onChange={handleSort}
                      />
                      <label className="inpLabel">Low to High</label>
                    </div>

                    <div>
                      <input
                        className="inp"
                        type="checkbox"
                        checked={sort === "desc"}
                        value={"desc"}
                        onChange={handleSort}
                      />
                      <label className="inpLabel">High to Low</label>
                    </div>
                  </Box>
                  <Divider />
                  <Button
                    textAlign={"center"}
                    justifyContent={"center"}
                    fontWeight={"700"}
                    bg="white"
                    size={"sm"}
                    color="#ff6f61"
                    _hover={{
                      bg: "#ff6f61",
                      color: "white",
                    }}
                    onClick={() => handleSortReset()}
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
