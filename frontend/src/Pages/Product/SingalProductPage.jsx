import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';
import ReactImageMagnify from 'react-image-magnify';
import { Box, Button, Grid, Image, List, ListItem, Radio, RadioGroup, SimpleGrid, Stack, Text, UnorderedList } from '@chakra-ui/react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const SingalProductPage = () => {
    let { id } = useParams();
    id = "64553b2ff15f9ec53e7c77e4"
    const [product, setProduct] = useState({})
    const { image, rating, price, title, discount, category } = product
    console.log(product)
    useEffect(() => {
        axios.get(`https://onemg-database.onrender.com/vitamin/${id}`).then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
    }, [])

    return (
        <DIV>


            <Grid templateColumns={{
                xl: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
                md: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)",
            }}
                gap="20px 20px"
                mt="30px" >
                <Box id="image" >
                    <div style={{ "width": "300px", "height": "200px" }}>
                        <div width="80%">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: { title },
                                    isFluidWidth: true,
                                    src: image,
                                    width: 140,
                                    height: 180
                                },
                                largeImage: {
                                    src: image,
                                    width: 400,
                                    height: 500,

                                },
                                enlargedImageContainerStyle: { width: "100%", height: "100%", backgroundSize: "cover" },
                                lensStyle: { backgroundColor: `rgba(0,0,0,0.3)` }
                            }} />
                        </div>
                    </div>

                </Box >
                <Box w={"300px"} h={"300px"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                    <Text>{title}</Text>
                    <Text>Tata product limites.pvt.</Text>
                    <Button
                        fontSize={"12px"}
                        fontWeight={600}
                        bg="#1aab2a"
                        size={"xs"}
                        color={"white"}
                        mb={"10px"}
                        cursor="auto"
                        _hover={{
                            bg: "#4dc65b",
                        }}
                    >
                        {rating}
                        <AiFillStar />
                    </Button>
                    <Text>Product highlights</Text>
                    <UnorderedList>

                        <ListItem>Promotes hair growth</ListItem>
                        <ListItem>Strengthen nails</ListItem>
                        <ListItem>Improves skin texture</ListItem>
                        <ListItem>Aids in weight loss</ListItem>
                    </UnorderedList>

                </Box>
                <Box w={"300px"} h={"300px"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                    <Box backgroundColor={"#8ff4b4"} borderRadius={"10px 10px 0px 0px"} p={"2px"} pl={"15px"} >📈 126 people bought this recently</Box>
                    <RadioGroup
                        colorScheme="green"

                    >
                        <Stack color={"grey"} direction="column" fontSize={"12px"}>

                            <Radio  >₹{price} <span style={{ "text-decoration": "line-through", color: "#4d4848" }}>{price + 300}</span> <span style={{ color: "red" }}>{discount}%</span> </Radio>
                            <Radio >₹{price}+ free shipping and 3% Extra NeuCoins with Credit Card </Radio>
                        </Stack>
                    </RadioGroup>


                    <Button
                        w={"90%"}

                        fontWeight={"700"}
                        bg="#ff6f61"

                        color="#fff"
                        _hover={{
                            bg: "#ff6f61",
                            color: "white",
                        }

                        }
                    >          Add to Cart        </Button>

                </Box>
            </Grid>
        </DIV>
    )
}

const DIV = styled.div`
    width: 90%;
    margin:auto;
   
`
export default SingalProductPage