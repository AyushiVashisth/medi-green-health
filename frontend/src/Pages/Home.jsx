import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar1 from "../Components/Navbar/Navbar1";
import SearchBar from "../Components/Navbar/SearchBar";
import Navbar2 from "../Components/Navbar/Navbar2";

const Home = () => {
  return (
    <Box>
      <Navbar1 />
      <SearchBar />
      <Navbar2 />
    </Box>
  );
};

export default Home;
