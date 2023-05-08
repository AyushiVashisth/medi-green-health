import React from "react";
import {
  health,
  brands,
  healthCare_device,
  ayurveda,
  produts,
  second,
} from "./data";
import ManualCarousels from "./Caraousel";
import Full from "./full";
import Path from "./path";
import { Box, Text } from "@chakra-ui/react";
import BigProduct from "./BigProduct";
const Maped = () => {
  return (
    <div>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          Shop by health concerns
        </Text>
        <ManualCarousels allData={health} />
      </Box>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          Featured brands
        </Text>
        <ManualCarousels allData={brands} />
      </Box>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          Full body health checkups
        </Text>
        <Full />
      </Box>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          Ayurveda top brands
        </Text>
        <ManualCarousels allData={ayurveda} />
      </Box>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          Pathology Tests | Up to 70% off{" "}
        </Text>
        <Path />
      </Box>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          Super saving deals
        </Text>
        <BigProduct allData={produts} />
      </Box>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          Tata 1mg health products
        </Text>
        <ManualCarousels allData={healthCare_device} />
      </Box>
      <Box>
        <Text
          ml={["3%", "3%", "3%", "4%", "6%"]}
          fontSize={["16px", "16px", "18px", "20px", "24px"]}
          fontWeight={600}
          mb={"-2%"}
        >
          स्वास्थ्य ही धन है
        </Text>
        <BigProduct allData={second} />
      </Box>
    </div>
  );
};

export default Maped;
