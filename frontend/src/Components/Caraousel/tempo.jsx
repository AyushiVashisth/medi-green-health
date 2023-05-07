<VStack
        style={{ cursor: "pointer" }}
        position={"relative"}
        border={"0px solid red"}
        padding={3}
        spacing={0}
        justifyContent={"center"}
        alignItems={"flex-start"}
        _hover={{ boxShadow: "xl", borderRadius: "xl" }}
      >
       
          <Box
            position={"absolute"}
            top={1}
            left={1}
            bg="#19AB2A"
            color="white"
            w="max-content"
            borderRadius="4px"
            fontSize={"12px"}
            padding={[0, 1, 1]}
          >
            SALE
          </Box>
       
        <Image
          h={["90px", "120px", "150px"]}
          style={{ display: "flex", margin: "2px auto" }}
          src={elem.image}
        />       
        <Text
          textAlign="left"
          py="1"
          noOfLines={[1, 1, 2]}
          fontSize={"14px"}
          fontWeight={"semibold"}
        >
          {elem.title}
        </Text>      
        <VStack ml={[0, 1, 2]}>
          <Flex>
            <Flex>
              <Text fontSize={"14px"}>MRP ₹ </Text>
              <Text fontSize={"14px"} ml="1" textDecoration={"line-through"}>
                {elem.price+400}
              </Text>
            </Flex>
            <Text ml={[0, 1, 2]} color={"green"}>
              {elem.discount}
            </Text>
          </Flex>
        </VStack>
        <Text ml="2" as="b">
          ₹ {elem.price}
        </Text>
      </VStack>