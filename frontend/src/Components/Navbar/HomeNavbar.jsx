import React from "react";
import Navbar2 from "./Navbar2";
import SearchBar from "./SearchBar";
import { Box } from "@chakra-ui/react";

const HomeNavbar = () => {
  return (
    <Box bg={"white"}>
      <SearchBar />
      <Navbar2 />
    </Box>
  );
};
export default HomeNavbar;
