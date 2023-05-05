
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
  Grid
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

let data= [
  {
    "_id": "6426fc0afcf829b54a307ae1",
    "title": "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/0fa72f2c-072d-4c6a-bc52-446edab403a4/tata-1mg-salmon-omega-3-fish-oil-capsule.jpeg",
    "packsize": "bottle of 60 capsules",
    "price": 524,
    "strike-price": "995",
    "discount": "47",
    "maxQty": 7,
    "rating": "4.4",
    "CardRatingDetail": "1506 rating",
    "description": "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule is your complete daily health supplement, packed with 25 essential vitamins and minerals that boost immunity, maintain cardiovascular health, and improve fitness and strength, enhance memory and concentration and support overall wellbeing.",
    "category": "supplement"
  },
  {
    "_id": "6426fc0afcf829b54a307ae2",
    "title": "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablet, Joint Support, Bones Health, Immunity & Energy Support",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gc3u9gfc331wtsipnljl/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablet-joint-support-bones-health-immunity-energy-support.jpg",
    "packsize": "bottle of 60 tablets",
    "price": 277,
    "strike-price": "595",
    "discount": "53",
    "maxQty": 3,
    "rating": "4.3",
    "CardRatingDetail": "2418 ratings",
    "description": "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablet is a dietary supplement that supports joint health, bone health, immunity and energy. It contains calcium, which is essential for building and maintaining strong bones, vitamin D3, which helps the body absorb calcium, zinc, which supports the immune system, and magnesium, which plays a role in muscle and nerve function. Additionally, it also contains alfalfa, which is rich in antioxidants and nutrients that support overall health and well-being. This bottle contains 60 tablets, and each tablet is designed to be easy to swallow.",
    "category": "calcium"
  },
  {
    "_id": "6426fc0afcf829b54a307ae3",
    "title": "Tata 1mg Lumbar Sacral Belt for Lower Back Support Universal",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gggpxmbrgyv0uqhzwyy8/tata-1mg-lumbar-sacral-belt-for-lower-back-support-universal.jpg",
    "packsize": "box of 1 Unit",
    "price": 451,
    "strike-price": "800",
    "discount": "43",
    "maxQty": 7,
    "rating": "4.2",
    "CardRatingDetail": "94 ratings",
    "description": "The Tata 1mg Lumbar Sacral Belt is designed to provide support to the lower back and to help alleviate pain and discomfort caused by various back conditions. The belt is made of high-quality materials that are durable and provide the necessary compression to support the lumbar region. The belt is also adjustable and can be customized to fit different body sizes. The Tata 1mg Lumbar Sacral Belt is ideal for individuals who have to stand or sit for long periods, as well as those who engage in physical activities that put a strain on the lower back. It is recommended by doctors and physiotherapists for use during recovery from back injuries or surgery.",
    "category": "fitness"
  },
  {
    "_id": "6426fc0afcf829b54a307ae4",
    "title": "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gmkrpf1imjj9djwvq4gq/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-capsule-for-immunity-energy-overall-health.jpg",
    "packsize": "bottle of 60 capsules",
    "price": 422,
    "strike-price": "995",
    "discount": "57",
    "maxQty": 8,
    "rating": "4.2",
    "CardRatingDetail": "1243 ratings",
    "description": "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule is a dietary supplement that helps support immunity, energy and overall health. It contains essential vitamins and minerals such as zinc, calcium, and vitamin D, which are important for maintaining healthy bones and teeth, and also plays a crucial role in maintaining a healthy immune system. This multivitamin capsule is designed to help provide the body with the necessary nutrients to help support overall health and well-being. This bottle contains 60 capsules and each capsule is designed to be easy to swallow.",
    "category": "calcium"
  },
  {
    "_id": "6426fc0afcf829b54a307ae5",
    "title": "i-Know Ovulation Strip Kit",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/59d4bf61-6252-419d-80f7-340459744690/i-know-ovulation-strip-kit.jpeg",
    "packsize": "packet of 5 Test Kits",
    "price": 47,
    "strike-price": "549",
    "discount": "14",
    "maxQty": 5,
    "rating": "3.7",
    "CardRatingDetail": "339 ratings",
    "description": "The i-Know Ovulation Strip Kit is a home diagnostic tool used to detect ovulation in women. This kit contains 5 ovulation test strips that are easy to use and provide accurate results. It works by detecting the luteinizing hormone (LH) in the urine, which surges just before ovulation. By tracking the LH levels in the urine, women can determine the optimal time to conceive. The i-Know Ovulation Strip Kit is designed to be convenient and easy to use in the privacy of your own home. This pack contains 5 test kits that can be used for multiple cycles.",
    "category": "Kits"
  },
  {
    "_id": "6426fc0afcf829b54a307ae6",
    "title": "Tata 1mg BIS Approved FFP2 N95 Mask for Kids 5 Mask",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/078eadc81a60489bb211ca51ed75c921/tata-1mg-bis-approved-ffp2-n95-mask-for-kids-5-mask.jpg",
    "packsize": "box of 5 masks",
    "price": 240,
    "strike-price": "400",
    "discount": "40",
    "maxQty": 7,
    "rating": "4.2",
    "CardRatingDetail": "101 ratings",
    "description": "Protect your kids from harmful pollutants and viruses with Tata 1mg BIS Approved FFP2 N95 Masks. These masks are specially designed for kids and come in a pack of 5 masks. The masks are made of high-quality materials and provide effective protection against particles, dust, and other harmful pollutants. The masks are BIS-approved and have a 4-layer filtration system to ensure maximum protection. With a 40% discount, these masks are a cost-effective solution to keep your kids safe and healthy.",
    "category": "mask"
  },
  {
    "_id": "6426fc0afcf829b54a307ae7",
    "title": "Nicotex Sugar Free Mint Plus Chewing Gums",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/kqupivjrbrq0ctcywfcs/nicotex-sugar-free-mint-plus-chewing-gums.jpg",
    "packsize": "Tin of 25 chewing gums",
    "price": 206,
    "strike-price": "245",
    "discount": "16",
    "maxQty": 7,
    "rating": "4.1",
    "CardRatingDetail": "275 ratings",
    "description": "Quit smoking and maintain your oral hygiene with Nicotex Sugar Free Mint Plus Chewing Gums. These chewing gums are specially designed to help you quit smoking by controlling your urge to smoke. The sugar-free formula helps maintain your oral hygiene and prevents tooth decay. The mint flavor provides a fresh and pleasant taste that helps you fight the urge to smoke. Each tin contains 25 chewing gums that are easy to carry and use on the go. With a 16% discount, Nicotex Sugar Free Mint Plus Chewing Gums are a cost-effective way to quit smoking and maintain your oral health.",
    "category": "hygiene"
  },
  {
    "_id": "6426fc0afcf829b54a307ae8",
    "title": "Protinex Health and Nutritional Drink Tasty Chocolate",
    "src": "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/sebt72otrs6a2gnqfpcb/protinex-health-and-nutritional-drink-tasty-chocolate.jpg",
    "packsize": "Tin of 250 gm Powder",
    "price": 415,
    "strike-price": "435",
    "discount": "46",
    "maxQty": 7,
    "rating": "4.4",
    "CardRatingDetail": "1070 ratings",
    "description": "Protinex Health and Nutritional Drink Tasty Chocolate is a high protein supplement that helps in the development and maintenance of your body's muscles. It contains 34 vital nutrients, including vitamins and minerals, that are essential for your overall growth and development. The tasty chocolate flavor makes it a delight to consume, and the powder form makes it easy to mix and use. It is suitable for people of all ages and helps in providing a balanced and nutritious diet. Each tin contains 250 gm of powder, which is enough for 12 servings.",
    "category": "supplement"
  }
]
const AdminProducts = () => {
  
  


  return (
    <Box w="80%" ml="20%" >
              <Grid
    templateColumns={{
      xl: "repeat(4, 1fr)",
      lg: "repeat(3, 1fr)",
      md: "repeat(2, 1fr)",
      base: "repeat(1, 1fr)",
    }}
    gap="20px 20px"
    mt="30px"
  >
    
      
        {data.map((item)=>(
          <GridItem
                w="240px"
                h="auto"
                padding="5"
                textAlign="left"
                bg="white"
                m="auto"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                borderRadius={"10px"}
              >
                <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"}>
                  <Image
                    objectFit={"contain"}
                    h="100%"
                    src={item.src}
                    alt={item.id}
                    cursor="pointer"
                  />
                </Box>
                <Text fontSize="14px" fontWeight="600" mb="5px" cursor="pointer">
                  {item.title.substring(0, 24).concat("...")}
                </Text>
                <Text color="grey" fontSize="13px" fontWeight="600" mb="10px">
                  {item.category}
                </Text>
                <Flex gap={"20px"}>
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
                    {item.rating}
                    <AiFillStar />
                  </Button>
                  
                </Flex>
                <Flex gap={"10px"} >

                <Heading fontSize={"15px"} mb="2px" fontWeight={600}>
                    ₹{item.price}
                  </Heading>

                  <Text
                    color="grey"
                    fontSize={"12px"}
                    mb={"10px"}
                    textDecor="line-through"
                    fontWeight={600}
                  >
                   {item.price+item.price*Number(item.discount)/100}
                  </Text>

                  <Text fontSize={"13px"} mb={"10px"} color="#1aab2a" fontWeight={600}>
                    {item.discount}%
                  </Text>

                </Flex>

                <Flex align={"center"} justify="space-between">
                  
                  <Flex justifyContent={"space-between"} w="100%" >
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
                    <Link to="/admineditproduct">Edit</Link>
                  </Button>
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
                    Delete
                  </Button>
                  </Flex>
                  
                </Flex>
              </GridItem>
                  ))} 
      
    
  </Grid>

    
    </Box>
  )
}

export default AdminProducts;

