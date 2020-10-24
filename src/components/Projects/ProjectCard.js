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

  const bgColor = { light: "gray.50", dark: "gray.800" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      py={4}
      alignItems="center"
      direction="column"
      justifyContent="center"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Box py={2}>
        <Image
          src={imageUrl}
          alt={name}
          objectFit="cover"
          rounded="18px"
          size="100px"
        />
      </Box>
      <Box fontSize="xl" textTransform="capitalize" fontWeight="bolder">
        {name}
      </Box>
      <Box py={2} fontSize="md">
        {description}
      </Box>
      <Box>
        <Container
          flexDirection="row"
          width="100%"
          py={2}
          bg={bgColor[colorMode]}
          color={color[colorMode]}
        >
          <ChakraLink
            isExternal
            href={liveLink}
            flexGrow={1}
            mx={2}
            role="link"
          >
            <Button width="100%" variantColor="teal" variant="outline">
              View Live
            </Button>
          </ChakraLink>
          <ChakraLink isExternal href={gitLink} flexGrow={3} mx={2}>
            <Button width="100%" variantColor="teal" variant="solid">
              GitHub
            </Button>
          </ChakraLink>
        </Container>
      </Box>
    </Flex>
  );
};
