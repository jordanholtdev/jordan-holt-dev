import {
  Link as ChakraLink,
  AspectRatio,
  Box,
  Tag,
  Text,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

export const VideoLinkCard = ({
  videoURL,
  linkURL,
  title,
  description,
  tags,
}) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'white', dark: 'gray.700' };
  const linkColor = { light: 'blue.700', dark: 'green.200' };
  return (
    <Box borderWidth='1px' bg={bgColor[colorMode]}>
      <AspectRatio ratio={16 / 9}>
        <Box as='iframe' title={title} src={videoURL} allowFullScreen />
      </AspectRatio>
      <Box p={4}>
        <ChakraLink
          mt='1'
          fontWeight='bold'
          lineHeight='tight'
          isExternal
          color={linkColor[colorMode]}
          href={linkURL}
        >
          {title}
        </ChakraLink>{' '}
        <Stack spacing={4} isInline my={2}>
          {tags.map((name) => (
            <Tag b='sm' key={name} colorScheme='green' variant='outline'>
              {name}
            </Tag>
          ))}
        </Stack>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};
