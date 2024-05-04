// BrandedDeals

import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "./StarRating";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
// import { AiOutlineUnderline } from "react-icons/ai";
export const Scroller = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let list = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qysbfwlucvdhkvdgqsmv.jpg",
      title: "Dabur Vasant Kusumakar Ras with Gold & Pearl Tablet",
      MRP: "₹2120",
      price: " ₹1399",
      discount: "34%",
      rating: 4.2
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/09fa5f9f3f744e989a3bf4cb42652a23.jpg",
      title: "Tata 1mg Multivitamin & Multimineral Supplement Tablet",
      MRP: "₹99",
      price: " ₹88",
      discount: "11%",
      rating: 3.5
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/1989fc8a41aa4bc4880e8b6094a2200e.jpg",
      title: "Dabur GlycoDab Tablet Giloy Neem Juice with Tulsi",
      MRP: "₹360",
      price: " ₹270",
      discount: "25%",
      rating: 4.3
    },

    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/fb86e12d-a420-4fd0-9177-f082253d401f.jpeg",
      title:
        "Tata 1mg Antifungal Dusting Powder for Sweat Rash, Itching, Skin Irritation, Chafing & Redness",
      MRP: "₹120",
      price: " ₹90",
      discount: "30%",
      rating: 3.6
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/69199e6a4d99439fb23db417b156b68f.jpg",
      title: "Dabur Giloy Neem Juice with Tulsi, Giloy Neem Juice with Tulsi  ",
      MRP: "₹100",
      price: " ₹90",
      discount: "10%",
      rating: 3.5
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qzz0mjr3m4rcely6spks.jpg",
      title: "Dabur Vasant Kusumakar Ras with Gold & Pearl Tablet",
      MRP: "₹2120",
      price: " ₹1399",
      discount: "34%",
      rating: 4.2
    }
  ];

  return (
    <>
      <DIV>
        <h2 className="heading-home-page">Top Deals</h2>
      </DIV>
      <BOX
        style={{
          position: "relative",
          marginTop: "32px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          width: "90%",
          margin: "auto"
        }}
      >
        <Carousel responsive={responsive}>
          {list.map((item, index) => {
            return (
              <Box
                borderRadius="10px"
                padding="10px"
                _hover={{
                  cursor: "pointer",
                  position: "relative",
                  top: "3px",
                  right: "2px",
                  transition: "2sec"
                }}
                key={index}
              >
                <Image
                  width={{ sm: "20%", md: "30%", lg: "50%" }}
                  margin={"auto"}
                  src={item.img}
                />
                <Box marginLeft={"30%"}>
                  <StarRating rating={item.rating} />
                </Box>

                <Text>{item.title}</Text>
                <Flex justifyContent="center">
                  <Text textDecoration="line-through" color="red">
                    {" "}
                    {item.MRP}
                  </Text>
                  <Text color="green">
                    {item.price} {item.discount} off
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Carousel>
      </BOX>
    </>
  );
};

const DIV = styled.div`
  margin-top: 20px;
  .heading-home-page {
    margin-top: 52px;
    display: flex;
    font-size: 35px;
    font-weight: 700;
    margin-left: 7%;
  }
  .div-1 {
  }

  .imga {
    border: 3px solid black;
  }
`;

const BOX = styled.div`
  .imgtag:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border: 1px solid #24a3b5;
  }
`;
