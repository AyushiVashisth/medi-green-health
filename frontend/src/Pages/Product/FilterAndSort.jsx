import { getData } from "../../redux/Product/actionProduct";
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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const FilterAndSort = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  //filter by Category
  let intialCategory = searchParams.getAll("category");
  let [category, setCategory] = useState(intialCategory || []);

  const handleChange = (e) => {
    let arr = [...category];
    const value = e.target.value;
    if (arr.includes(value)) {
      arr = arr.filter((el) => el != value)
    } else {
      arr.push(value)
    }
    setCategory(arr)
  }

console.log(category)
//sorting
const initialSort = searchParams.get("sort");
console.log(initialSort);
const [sort, setSort] = useState(initialSort || "");
const handleSort = (e) => {
  let val = e.target.value;
  val == sort ? setSort(null) : setSort(val);
  // setSort(e.target.value)
};
useEffect(()=>{
  if(category||sort){
    let params={};
    category && (params.category=category)
    sort &&(params.sort=sort)
    setSearchParams(params)
  }
},[category,sort])





  return (
    <>
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
          <Heading fontSize={"14px"} textAlign={"left"}>
            FILTER
          </Heading>
          {/* <CheckboxGroup
            colorScheme="green"          
           
            onChange={handleChange}
          > */}
            <Stack color={"grey"} spacing={[1, 1]} direction={["column"]}>
              <Box >

              <input type="checkbox" checked={category.includes("calcium")} value={"calcium"} onChange={handleChange}/>calcium
              </Box>
              <Box>

              <input type="checkbox" checked={category.includes("supplement")} value={"supplement"} onChange={handleChange}/>supplement
              </Box>
              <Box>

              <input type="checkbox" checked={category.includes("aryurvedic")} value={"aryurvedic"} onChange={handleChange}/>aryurvedic
              </Box>
              <Box>

              <input type="checkbox" checked={category.includes("mask")} value={"mask"} onChange={handleChange}/>mask
              </Box>
              
            </Stack>
          {/* </CheckboxGroup> */}
        </Box>
        <h2 id="heading">Sort By Price</h2>
      <div style={{ padding: "7px" }}>
        <input
          className="inp"
          type="checkbox"
          checked={sort == "asc"}
          value={"asc"}
          onChange={handleSort}
        />
        <label className="inpLabel">Low to High</label>
      </div>

     
      
      <div style={{ padding: "7px" }}><input
        className="inp"
        type="checkbox"
        checked={sort == "desc"}
        value={"desc"}
        onChange={handleSort}
      />
      <label className="inpLabel">High to Low</label></div>
        <Divider />
        {/* <Box m="20px 0">
          <Heading fontSize={"14px"} textAlign={"left"}>
            SORT BY PRICE
          </Heading>
          <RadioGroup
            colorScheme="green"
            onChange={(value) => handleSort(value)}
            value={order}
          >
            <Stack color={"grey"} direction="column" fontSize={"12px"}>
              <Radio value="asc">Low to high</Radio>
              <Radio value="desc">High to low</Radio>
            </Stack>
          </RadioGroup>
        </Box> */}
        <Divider />
        <Box m="20px 0">
          {/* <Heading fontSize={"14px"} textAlign={"left"}>
            SORT BY RATING
          </Heading>
          <RadioGroup
            colorScheme="green"
            onChange={(value) => handleRating(value)}
              value={rating}
            >
              <Stack color={"grey"} direction="column" fontSize={"12px"}>
                <Radio value="asc">Low to high</Radio>
                <Radio value="des">High to low</Radio>
              </Stack>
            </RadioGroup> */}
        </Box>
        {/* <Button
            fontWeight={"700"}
            bg="white"
            size={"sm"}
            color="#ff6f61"
            border={"2px solid #ff6f61"}
            _hover={{
              bg: "#ff6f61",
              color: "white",
            }}
            mr={"40px"}
            onClick={() => {
              setFilterValues([]);
              handleReset();
              setOrder("");
              setRating("");
            }}
          >
            Reset
          </Button> */}
      </Box>
      {/* </Show> */}

      {/* -------------------- */}

      {/* <Hide above="sm">
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
                    <CheckboxGroup
                      colorScheme="green"
                      value={filterValues}
                      onChange={handleFilterChange}
                    >
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
                        onChange={(value) => handleSort(value)}
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
                        onChange={(value) => handleRating(value)}
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
                    onClick={() => handleSortReset()}
                  >
                    Reset
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Hide> */}
    </>
  );
};
export default FilterAndSort;
