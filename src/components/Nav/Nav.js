import { DarkModeSwitch } from "../DarkModeSwitch";
import {
  useDisclosure,
  Text,
  Button,
  Box,
  Input,
  Flex,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/core";

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        variant="ghost"
        variantColor="green"
        onClick={onOpen}
        size="sm"
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
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="solid" variantColor="green">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export const Nav = () => {
  return (
    <Flex
      position="fixed"
      direction="row"
      py="1rem"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth="48rem"
    >
      <Text fontSize="lg">Jordan | Holt</Text>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth="200px"
      >
        <Button variant="ghost" variantColor="green" size="sm">
          Contact
        </Button>
        <MenuDrawer />
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
};
