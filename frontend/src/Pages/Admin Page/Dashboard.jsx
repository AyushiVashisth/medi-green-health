import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import { Piechart } from "./PeiChat";
import Navbar1 from "../../Components/Navbar/Navbar1";

const Blog = () => {
  const [allproducts, setAllProducts] = useState(0);
  const [men, setMens] = useState(0);
  const [women, setWomen] = useState(0);
  const [kids, setKids] = useState(0);
  const [both, setBoth] = useState(0);
  const [user, setUser] = useState(0)


  useEffect(() => {
    getAllProduct();
    getMen();
    getWomen();
    getKids();
    getBoth();
    getUser();
  }, []);

  function getAllProduct() {
    fetch("https://onemg-database.onrender.com/vitamin").then((result) => {
      result.json().then((res) => {
        console.log("allproducts", res.length);
        setAllProducts(res.length);
      });
    });
  }

  function getMen() {
    fetch("https://onemg-database.onrender.com/vitamin/?category=calcium").then((result) => {
      result.json().then((res) => {
        console.log("Men", res.length);
        setMens(res.length);
      });
    });
  }

  function getWomen() {
    fetch("https://onemg-database.onrender.com/vitamin/?category=supplement").then((result) => {
      result.json().then((res) => {
        console.log("Women", res.length);
        setWomen(res.length);
      });
    });
  }

  function getKids() {
    fetch("https://onemg-database.onrender.com/vitamin/?category=aryurvedic").then((result) => {
      result.json().then((res) => {
        console.log("Kids", res.length);
        setKids(res.length);
      });
    });
  }

  function getBoth() {
    fetch("https://onemg-database.onrender.com/vitamin/?category=mask").then((result) => {
      result.json().then((res) => {
        console.log("Both", res.length);
        setBoth(res.length);
      });
    });
  }
  function getUser() {
        fetch("https://onemg-database.onrender.com/users").then((result) => {
          result.json().then((res) => {
            console.log("User", res.length);
            setUser(res.length);
          });
        });
      }
  return (
    <Box>
    <Navbar1/>
      <AdminSidebar />
      <Box ml={["5", "5","139","200", "300"]} mt={["100px", "10px", "10px", "10px"]}>
        <SimpleGrid fontWeight={"bold"} columns={[2, 3,3, 3, 6]} gap={4}>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            AllProduct <br />
            {allproducts}{" "}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Calcium <br />
            {men}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Suppliments <br />
            {women}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Ayurveda <br />
            {kids}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Mask <br />
            {both}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Users <br />
            {user}
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={75}>
        <Piechart />
      </Box>
    </Box>
  );
};

export default Blog;