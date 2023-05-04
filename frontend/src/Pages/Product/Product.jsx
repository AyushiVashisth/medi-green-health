import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterAndSort from "./FilterAndSort";
import TopSectionProductsPage from "./TopSectionProductsPage";
import ProductsSkeleton from "./ProductsSkeleton";
import ProductCard from "./ProductCard";
import { getData } from "../../redux/Product/actionProduct";

const Products = () => {
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  const data = useSelector((store) => store.ProductReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        display={{ lg: "flex", md: "flex", base: "grid" }}
        gap={{ lg: "50px", md: "20px" }}
        bg="#f6f6f6"
      >
        <FilterAndSort />

        <Box className="allProductSection" p={{ base: "20px" }}>
          <TopSectionProductsPage />
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
            {loading ? (
              <ProductsSkeleton />
            ) : (
              data?.map((item, i) => {
                return <ProductCard key={i + 1} {...item} />;
              })
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Products;
