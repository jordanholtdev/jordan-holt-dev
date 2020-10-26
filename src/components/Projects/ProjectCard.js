import {
  Link as ChakraLink,
  Button,
  Box,
  Tag,
  TagLabel,
  Flex,
  Image,
  useColorMode,
  Stack,
} from "@chakra-ui/core";

import { Container } from "../Container";

export const ProjectCard = ({
  imageUrl,
  name,
  description,
  liveLink,
  gitLink,
}) => {
  const { colorMode } = useColorMode();
  const dropShadow = {
    light: `-10px 10px 30px #dee1e3, 
    10px -10px 30px #ffffff;`,
    dark: `-16px 16px 32px #14151e, 
    16px -16px 32px #1a1d28`,
  };
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "black", dark: "white" };
  return (
    <Flex
      py={2}
      alignItems="center"
      direction={["column", "row"]}
      justifyContent={["center", "start"]}
      borderWidth="1px"
      rounded="18px"
      overflow="hidden"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Box py={2} px={4}>
        <Image
          src={imageUrl}
          alt={name}
          objectFit="cover"
          rounded="18px"
          size="150px"
          boxShadow={dropShadow[colorMode]}
        />
      </Box>
      <Stack spacing={2} alignItems={["center", "start"]}>
        <Box fontSize="xl" textTransform="capitalize" fontWeight="bolder">
          {name}
        </Box>
        <Box py={1} fontSize="md">
          {description}
        </Box>
        <Box>
          <Container
            flexDirection="row"
            width="100%"
            pt={2}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
          >
            <ChakraLink
              isExternal
              href={liveLink}
              flexGrow={1}
              mr={2}
              role="link"
            >
              <Button width="100%" variantColor="green" variant="outline">
                View Live
              </Button>
            </ChakraLink>
            <ChakraLink isExternal href={gitLink} flexGrow={3} mx={2}>
              <Button variantColor="green" variant="solid">
                GitHub
              </Button>
            </ChakraLink>
          </Container>
        </Box>
      </Stack>
    </Flex>
  );
};
