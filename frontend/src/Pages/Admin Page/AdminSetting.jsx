import useValueChange from "./useValueChange";
import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../Components/AdminSidebar";

const AdminSettings = () => {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editMobile, setEditMobile] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const [name, setname] = useValueChange("Ayushi Vashisth");
  const [email, setEmail] = useValueChange("ayushi@gmail");
  const [mobile, setMobile] = useValueChange("+918746382454");
  const [gender, setGender] = useValueChange("Female");
  // const handleLogout = async () => {
  //   dispatch(userLogout());
  //   await signOut(auth);
  // };
  const [selectedImage, setSelectedImage] = useState("https://avatars.githubusercontent.com/u/107119119?v=4");

const handleImageUpload = (event) => {
  setSelectedImage(URL.createObjectURL(event.target.files[0]));
};
  const navigate = useNavigate();
  const upload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <AdminSidebar />{" "}
      <Box bgColor={"#d8dff7"} >
        <Flex bgColor={"#d8dff7"} w={["97%","97%","65%","67%","67%"]} m={"auto"} >
          <Box w={"250vh"} h={"90vh"} m={"auto"}  bgColor={"white"} p={["8","","","",""]} mt={["80px","60px","10px","40px","30px"]}>
            <Heading m={"auto"} w={"fit-content"}>
              Admin Settings
            </Heading>
            <Flex justifyContent={"space-around"} mt={"30px"}>
              <Stack w={"60%"}>
                <Box mb={"20px"}>
                  <Flex
                    alignItems={"center"}
                    w={"150px"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>Display Name</Text>
                    <EditIcon
                      _hover={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditName(true);
                      }}
                    />
                  </Flex>
                  {editName ? (
                    <Stack>
                      <Input
                        variant={"filled"}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                      <Flex w={"100px"} justifyContent={"space-between"}>
                        <Button
                          onClick={() => {
                            setEditName(false);
                          }}
                        >
                          <TiTick />
                        </Button>
                        <Button
                          onClick={() => {
                            setname("");
                            setEditName(false);
                          }}
                        >
                          <RxCross2 />
                        </Button>
                      </Flex>
                    </Stack>
                  ) : (
                    <Text fontSize={"17px"} color={"500"}>
                      {name}
                    </Text>
                  )}
                </Box>
                <Box mb={"20px"}>
                  <Flex
                    alignItems={"center"}
                    w={"150px"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>Email</Text>
                    <EditIcon
                      _hover={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditEmail(true);
                      }}
                    />
                  </Flex>
                  {editEmail ? (
                    <Stack>
                      <Input
                        variant={"filled"}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <Flex w={"100px"} justifyContent={"space-between"}>
                        <Button
                          onClick={() => {
                            setEditEmail(false);
                          }}
                        >
                          <TiTick />
                        </Button>
                        <Button
                          onClick={() => {
                            setEmail("");
                            setEditEmail(false);
                          }}
                        >
                          <RxCross2 />
                        </Button>
                      </Flex>
                    </Stack>
                  ) : (
                    <Text fontSize={"17px"} color={"500"}>
                      {email}
                    </Text>
                  )}
                </Box>
                <Box mb={"20px"}>
                  <Flex
                    alignItems={"center"}
                    w={"150px"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>Mobile</Text>
                    <EditIcon
                      _hover={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditMobile(true);
                      }}
                    />
                  </Flex>
                  {editMobile ? (
                    <Stack>
                      <Input
                        variant={"filled"}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                      <Flex w={"100px"} justifyContent={"space-between"}>
                        <Button
                          onClick={() => {
                            setEditMobile(false);
                          }}
                        >
                          <TiTick />
                        </Button>
                        <Button
                          onClick={() => {
                            setMobile("");
                            setEditMobile(false);
                          }}
                        >
                          <RxCross2 />
                        </Button>
                      </Flex>
                    </Stack>
                  ) : (
                    <Text fontSize={"17px"} color={"500"}>
                      {mobile}
                    </Text>
                  )}
                </Box>
                <Box mb={"20px"}>
                  <Flex
                    alignItems={"center"}
                    w={"150px"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>Gender</Text>
                    <EditIcon
                      _hover={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditGender(true);
                      }}
                    />
                  </Flex>
                  {editGender ? (
                    <Stack>
                      <Input
                        variant={"filled"}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <Flex w={"100px"} justifyContent={"space-between"}>
                        <Button
                          onClick={() => {
                            setEditGender(false);
                          }}
                        >
                          <TiTick />
                        </Button>
                        <Button
                          onClick={() => {
                            setGender("");
                            setEditGender(false);
                          }}
                        >
                          <RxCross2 />
                        </Button>
                      </Flex>
                    </Stack>
                  ) : (
                    <Text fontSize={"17px"} color={"500"}>
                      {gender}
                    </Text>
                  )}
                </Box>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Button
                  bgColor={"500"}
                  w={"200px"}
                  left={["140px","","","",""]}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Sign Out
                </Button>
              </Stack>
              <Stack>
                <Box textAlign={"center"} ml={["30px","","","",""]}>
                  <Image
                    objectFit={"cover"}
                    borderRadius={"50%"}
                    alt="not found"
                    width={"250px"}
                    h={"250px"}
                    src={selectedImage ? selectedImage : upload}
                  />
                  <input
                    type="file"
                    name="myImage"
                    onChange={handleImageUpload}
                  />
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AdminSettings;
