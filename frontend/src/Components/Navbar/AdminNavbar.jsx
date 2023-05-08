import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useDisclosure,
    Divider,
    Img,
    Circle,
    MenuItem,
    MenuDivider,
    Menu,
    HStack,
    MenuButton,
    Avatar,
    VStack,
    MenuList,
  } from "@chakra-ui/react";
  
  import { FaShoppingCart } from "react-icons/fa";
  import logo from "../../Images/logo.png";
  import { Link, NavLink, useNavigate } from "react-router-dom";
  import { NAV_ITEMS, AUTH_ITEMS } from "../../utils/navbar.data";
  import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
  import {FiChevronDown} from "react-icons/fi"
  import { useContext } from "react";
  import { AuthContext } from "../../Context/AuthContext";

  
  export default function AdminNavbar() {
    const { isOpen, onToggle, onOpen, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
  
    return (
      <Box position={"sticky"} top={0} >
        <Flex
          bgColor={"white"}
          color={useColorModeValue("gray.900")}
          minH={"40px"}
          py={{ base: 2 }}
          px={{ base: 2 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justify="center"
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
  
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start", lg: "start" }}
          >
            <Box
              as={NavLink}
              to="/"
              cursor={"pointer"}
              border={"0px solid black"}
              mx={[1, 1, 2, 23]}
            >
              <Img
                src={logo}
                alt={"logo"}
                w={["60px", "90px", "100px"]}
                h={["30px", "30px", "30px"]}
                onClick={() => navigate("/")}
              />
            </Box>
  
            <Flex
              display={{ base: "none", md: "none", lg: "flex" }}
              alignItems={"center"}
              mx={"15px"}
              border={"0px solid black"}
            >
              <DesktopNav />
            </Flex>
          </Flex>
  
      
          <Flex alignItems={"center"}  mr="2rem">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Ankush Kumar</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <Link to="/"><MenuItem>Sign out</MenuItem></Link>
            </MenuList>
          </Menu>
        </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkHoverColor = useColorModeValue("#ff6f61", "white");
    return (
      <Stack
        direction={"row"}
        spacing={[1, 2, 3]}
        alignItems={"center"}
        m={"auto"}
        justifyContent={"center"}
      >
        {NAV_ITEMS.map((navItem, i) => (
          <Flex
            key={navItem.label}
            justifyContent={"center"}
            alignItems={"center"}
            display={["none", "none", "none", "none", "flex"]}
          >
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <NavLink to={navItem.href}>
                  <Text
                    p={0}
                    border={"0px solid green"}
                    fontSize={["sm", "md", "md"]}
                    fontWeight={[400, 500, 700]}
                    fontFamily="Clear Sans"
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Text>
                </NavLink>
              </PopoverTrigger>
            </Popover>
          </Flex>
        ))}
      </Stack>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack p={4} display={{ md: "none" }} bg="#FFFFFF">
        {AUTH_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
  
        <Divider />
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  