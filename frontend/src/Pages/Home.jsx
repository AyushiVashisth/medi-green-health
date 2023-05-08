import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import Maped from "../Components/Caraousel/Maped";
import Navbar1 from "../Components/Navbar/Navbar1";
import Footer from "../Components/Footer";
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  const [slider, setSlider] = React.useState(null);
  const cards = [
    "https://onemg.gumlet.io/86059720-cd97-4ec6-b027-deb99924b036_1666118481.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/2ccd19da-c816-4ed8-935e-441c55589f18_1680270570.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/1ffd90fb-d778-4499-96e9-c5a5decddf34_1681587483.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/11e5dede-f24c-4e39-a0cd-0a49a91481dc_1680703444.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/38cc426b-ade4-48b3-8b59-a73339915244_1679393359.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/33eab3f0-49a1-476d-8c1f-2fe4159bcf4d_1679394544.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/b9adf16c-441f-4f64-825d-7127cf4f82cd_1683291461.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/401d8ed0-5e07-490e-a8ca-a108ab563812.png",
    "https://onemg.gumlet.io/c8794fcd-a05a-453f-9ac4-c130582df149_1682408433.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/55862f78-7fff-4519-82fc-ebab1e517fdf.png",
  ];
  return (
    <>
    <Box>
    <Navbar1/>
      <Box pt={"5px"} w={"100%"} m={"auto"}>
        <Grid
          templateColumns={{ base: "100% 0%", md: "100%% 0%", lg: "70% 30%" }}
          border={"0px solid red"}
          h={["130px", "160px", "200px"]}
          m={"auto"}
        >
          <GridItem>
            <Box
              position={"relative"}
              height={"100%"}
              width={"full"}
              overflow={"hidden"}
            >
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />

              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                  <Box key={index} height={["150px", "170px", "237px"]}>
                    <Image w={"100%"} h={"100%"} src={url} />
                  </Box>
                ))}
              </Slider>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/421855e3-ec1c-42c9-a5b4-d5153c8f2f54.png"
              alt={"auto-slider-right-static-image"}
              height={["150px", "170px", "237px"]}
            />
          </GridItem>
        </Grid>
        <Center pt={[0, 0, 1, 1, 2]} mt={10} border={"0px solid red"}>
          <Text
            fontSize={["10px", "12px", "18px", "20px", "24px"]}
            color="#666666"
          >
            Medi Green: India’s Leading Online Pharmacy & Healthcare Platform
          </Text>
        </Center>
      </Box>
      <Maped />
    </Box>
    <Footer/>
    </>
  );
};

export default Home;
