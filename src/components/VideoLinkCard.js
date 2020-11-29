import {
  Link as ChakraLink,
  AspectRatioBox,
  Box,
  Tag,
  Text,
  Stack,
  useColorMode,
} from "@chakra-ui/core";

export const VideoLinkCard = ({
  videoURL,
  linkURL,
  title,
  description,
  tags,
}) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "white", dark: "gray.700" };
  const linkColor = { light: "blue.700", dark: "green.200" };
  return (
    <Box borderWidth="1px" bg={bgColor[colorMode]}>
      <AspectRatioBox ratio={16 / 9}>
        <Box as="iframe" title={title} src={videoURL} allowFullScreen />
      </AspectRatioBox>
      <Box p={4}>
        <ChakraLink
          mt="1"
          fontWeight="bold"
          lineHeight="tight"
          isExternal
          color={linkColor[colorMode]}
          href={linkURL}
        >
          {title}
        </ChakraLink>{" "}
        <Stack spacing={4} isInline my={2}>
          {tags.map((name) => (
            <Tag size="sm" key={name} variantColor="green" variant="outline">
              {name}
            </Tag>
          ))}
        </Stack>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};
