
import { Box, SimpleGrid } from "@chakra-ui/react";
import zIndex from "@mui/material/styles/zIndex";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const temp = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export function Piechart() {
  let [data01, setdata01] = useState([...temp]);

  async function getData() {
    let arr = [];
    let obj = {};

    let allproducts = await axios.get("https://onemg-database.onrender.com/vitamin");
    allproducts = allproducts.data.length;
    obj = {};
    obj.name = "Allproducts";
    obj.value = allproducts;
    arr.push(obj);

    let Men = await axios.get("https://onemg-database.onrender.com/vitamin/?category=calcium");
    Men = Men.data.length;
    obj = {};
    obj.name = "calcium";
    obj.value = Men;
    arr.push(obj);

    let Women = await axios.get("https://onemg-database.onrender.com/vitamin/?category=supplement");
    Women = Women.data.length;
    obj = {};
    obj.name = "supplement";
    obj.value = Women;
    arr.push(obj);

    let Kids = await axios.get("https://onemg-database.onrender.com/vitamin/?category=mask");
    Kids = Kids.data.length;
    obj = {};
    obj.name = "Mask";
    obj.value = Kids;
    arr.push(obj);

    let Both = await axios.get("https://onemg-database.onrender.com/vitamin/?category=aryurvedic");
    Both = Both.data.length;
    obj = {};
    obj.name = "aryurvedic";
    obj.value = Both;
    arr.push(obj);
    setdata01([...arr]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box ml={["3", "3", "110", "250"]}>
      <SimpleGrid
        fontWeight={"bold"}
        width={["370px", "100%", "90%", "100%"]}
        margin={"auto"}
        columns={[1, 1, 1, 4]}
        borderRadius="36px"
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        alignItems="center"
        gap={["", "", "", "700px"]}
      >
        <Box ml={["20px", "20px", "150px", "130px"]}>
          <PieChart width={380} height={400} >
            <Pie
            
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx={170}
              cy={200}
              outerRadius={110}
              fill="skyblue"
              label
            />
            <Tooltip />
          </PieChart>
        </Box>
        <Box ml={["1px", "20px", "120px", "130px"]} >
          <LineChart1 />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export function LineChart1() {
  const [data01, setdata01] = useState([{ name: "Price", uv: 0 }]);
  async function getData() {
    let arr = [{ name: "Price", uv: 0 }];

    let products = await axios.get("https://onemg-database.onrender.com/vitamin/?category=calcium");
    products = products.data;
    products.map((el) => {
      return arr.push({ uv: parseInt(el.price) });
    });

    let men = await axios.get("https://onemg-database.onrender.com/vitamin/?category=calcium");
    men = men.data;
    men.map((el) => {
      return arr.push({ uv: parseInt(el.price) });
    });

    let Women = await axios.get("https://onemg-database.onrender.com/vitamin/?category=calcium");
    Women = Women.data;
    Women.map((el) => {
      return arr.push({ uv: parseInt(el.price) });
    });

    let Kids = await axios.get("https://onemg-database.onrender.com/vitamin/?category=calcium");
    Kids = Kids.data;
    Kids.map((el) => {
      return arr.push({ uv: parseInt(el.price) });
    });

    let Both = await axios.get("https://onemg-database.onrender.com/vitamin/?category=calcium");
    Both = Both.data;
    Both.map((el) => {
      return arr.push({ uv: parseInt(el.price) });
    });

    setdata01([...arr]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <LineChart
      width={350}
      height={300}
      data={data01}
      // cx={40}
      // cy={100}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="blue" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="orange" />
    </LineChart>
  );
}