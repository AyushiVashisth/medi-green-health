import FilterAndSort from "./FilterAndSort";
// import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import ProductsSkeleton from "./ProductsSkeleton";
import TopSectionProductsPage from "./TopSectionProductsPage";
import { getData } from "../../redux/Product/actionProduct";
import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";

const Products = () => {
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  const data = useSelector((store) => store.ProductReducer.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("");
  const [filterValues, setFilterValues] = useState([]);
  const [order, setOrder] = useState("asc");
  const dispatch = useDispatch();

  let pageSize = 8;
  let items = 38;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortPrice = (value1,value2) => {
    setSort(value1);
    setOrder(value2);
  };
  const handleSortRating = (value1,value2) => {
    setSort(value1);
    setOrder(value2);
  };
  const handleSortReset = () => {
    setSort("");
    setOrder("");
    dispatch(getData("", ""));
  };

  const handleFilter = (value) => {
    dispatch(getData({ category: value, sortBy: order, order }));
  };
  useEffect(() => {
    const params = {
      category: filterValues,
      sortBy: sort,
      order,
    };
    dispatch(getData(params));
  }, [filterValues, sort, order]);
  // useEffect(() => {
  //   const params ={
  //     sortBy: sort,
  //     order: order,

  //   };

  //   dispatch(getData(params));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sort,order]);

  return (
    <>
      <Box
        display={{ lg: "flex", md: "flex", base: "grid" }}
        gap={{ lg: "50px", md: "20px" }}
        bg="#f6f6f6"
      >
        <FilterAndSort
          handleFilter={handleFilter}
          handleSortPrice={handleSortPrice}
          handleSortRating={handleSortRating}
          handleSortReset={handleSortReset}
        />

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
              data?.length &&
              data
                ?.filter((item, i) => {
                  return i >= 8 * (currentPage - 1) && i < 8 * currentPage;
                })
                .map((item, i) => {
                  return <ProductCard key={i + 1} {...item} />;
                })
            )}
          </Grid>
        </Box>
      </Box>
      <Pagination
        onPageChange={onPageChange}
        pageSize={pageSize}
        items={items}
        currentPage={currentPage}
      />
      {/* <Footer /> */}
    </>
  );
};

export default Products;