// import { Box } from '@chakra-ui/react'
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import {  MdLibraryAdd } from "react-icons/md"
import { TbReportMedical } from "react-icons/tb";

import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <Box className="sidebar" backgroundColor={"#051e3e"}>
      <Flex className="adminsidebar">
        <Link to={"/admin"}>
          <Flex
            className="three"
            justifyContent={"space-evenly"}
            padding={"6%"}
          >
            <Box className="iconcont">
              <AiOutlineHome className="icons" color="white" size={27} />
            </Box>
            <Box className="labelcont">
              {" "}
              <Text className="labels" color="white">
                Home
              </Text>
            </Box>
          </Flex>
        </Link>
        <Link to={"/adminorders"}>
          <Flex
            className="three"
            justifyContent={"space-evenly"}
            padding={"6%"}
          >
            <Box className="iconcont">
              <AiOutlineShoppingCart
                className="icons"
                color="white"
                size={27}
              />
            </Box>
            <Box className="labelcont">
              <Text className="labels" color="white">
                Orders
              </Text>
            </Box>
          </Flex>
        </Link>
        <Link to="/adminlogin">
          <Flex
            className="three"
            justifyContent={"space-evenly"}
            padding={"4%"}
          >
            <Box className="iconcont">
              <TbReportMedical className="icons" color="white" size={25} />
            </Box>
            <Box className="labelcont" id="usercontainer">
              <Text className="labels" color="white">
                Login
              </Text>
            </Box>
          </Flex>
        </Link>
        <Link to="/adminproducts">
          <Flex
            className="three"
            justifyContent={"space-evenly"}
            padding={"4%"}
          >
            <Box className="iconcont">
              <TbReportMedical className="icons" color="white" size={25} />
            </Box>
            <Box className="labelcont" id="usercontainer">
              <Text className="labels" color="white">
                Products
              </Text>
            </Box>
          </Flex>
        </Link>
        <Link to="/adminaddproducts">
          <Flex
            className="three"
            justifyContent={"space-evenly"}
            padding={"4%"}
          >
            <Box className="iconcont">
              <MdLibraryAdd className="icons" color="white" size={25} />
            </Box>
            <Box className="labelcont" id="usercontainer">
              <Text className="labels" color="white">
                Add Products
              </Text>
            </Box>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default AdminSidebar;
