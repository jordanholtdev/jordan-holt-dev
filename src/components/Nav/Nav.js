import { DarkModeSwitch } from "../DarkModeSwitch";
import { useRef } from "react";
import {
  useDisclosure,
  Text,
  Button,
  Box,
  Flex,
  Link as ChakraLink,
  Icon,
  List,
  ListItem,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  useColorMode,
} from "@chakra-ui/core";
import NextLink from "next/link";
import styled from "@emotion/styled";

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        variant="ghost"
        aria-label="open menu"
        variantColor="gray"
        onClick={onOpen}
        size="md"
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <List spacing={4}>
              <ListItem>
                <NextLink href="/" passHref>
                  <ChakraLink aria-label="home page">Home</ChakraLink>
                </NextLink>
              </ListItem>
              <ListItem>
                <ChakraLink
                  href="https://blog.jordanholt.dev"
                  isExternal
                  aria-label="visit blog"
                >
                  Blog <Icon name="external-link" mx="2px" />
                </ChakraLink>
              </ListItem>
              <ListItem>
                <NextLink href="/contact" passHref>
                  <ChakraLink aria-label="contact page">Contact</ChakraLink>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/newsletter" passHref>
                  <ChakraLink aria-label="newsletter page">
                    Newsletter
                  </ChakraLink>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/about" passHref>
                  <ChakraLink aria-label="about page">About</ChakraLink>
                </NextLink>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button
              aria-label="close"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export const Nav = () => {
  const { colorMode } = useColorMode();
  const navBgColor = {
    light: "rgba(247, 250, 252, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  };

  return (
    <StickyNav
      direction="row"
      bg={navBgColor[colorMode]}
      py="1rem"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth="50rem"
      p={4}
    >
      <NextLink href="/">
        <ChakraLink>
          <Text fontSize="xl">
            <Text
              as="span"
              fontSize="xl"
              fontWeight="bolder"
              letterSpacing="wide"
            >
              Jordan{" "}
            </Text>
            | Holt
          </Text>
        </ChakraLink>
      </NextLink>

      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth="200px"
      >
        <NextLink href="/contact" passHref>
          <Button
            aria-label="contact"
            variant="ghost"
            as="a"
            variantColor="gray"
            size="md"
          >
            Contact
          </Button>
        </NextLink>
        <MenuDrawer />
        <DarkModeSwitch />
      </Box>
    </StickyNav>
  );
};
