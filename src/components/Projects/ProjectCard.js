import {
  Link as ChakraLink,
  Button,
  Box,
  Flex,
  Image,
  useColorMode,
  Stack,
} from '@chakra-ui/react';

import { FaNodeJs, FaHtml5, FaReact } from 'react-icons/fa';

import { Container } from '../Container';

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
  const bgColor = { light: 'white', dark: 'gray.800' };
  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      py={2}
      alignItems='center'
      direction={['column', 'row']}
      justifyContent={['center', 'start']}
      borderWidth='1px'
      rounded='18px'
      overflow='hidden'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Flex
        flexDirection='column'
        alignItems='center'
        py={2}
        px={4}
        w={['100%', '50%']}
      >
        <Image
          src={imageUrl}
          alt={name}
          objectFit='cover'
          rounded='8px'
          boxSize='205px'
          boxShadow={dropShadow[colorMode]}
        />
      </Flex>
      <Stack
        ml={4}
        spacing={2}
        alignItems={['center', 'start']}
        justifyContent='center'
        w='100%'
        h='100%'
      >
        <Box fontSize='xl' textTransform='capitalize' fontWeight='bolder'>
          {name}
        </Box>
        {/* <Stack isInline>
          <Box as={FaNodeJs} size="28px" color="green.400" />
          <Box as={FaHtml5} size="28px" color="orange.400" />
          <Box as={FaReact} size="28px" color="blue.200" />
        </Stack> */}
        <Box
          py={1}
          fontSize='md'
          maxWidth='500px'
          textAlign={['center', 'start']}
        >
          {description}
        </Box>
        <Box>
          <Container
            flexDirection='row'
            width='100%'
            justifyContent='center'
            pt={4}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
          >
            <ChakraLink
              isExternal
              href={liveLink}
              flexGrow={1}
              mr={2}
              role='link'
            >
              <Button
                width='100%'
                size='sm'
                colorScheme='blue'
                variant='outline'
              >
                View Live
              </Button>
            </ChakraLink>
            <ChakraLink isExternal href={gitLink}>
              <Button size='sm' colorScheme='blue' variant='solid'>
                GitHub
              </Button>
            </ChakraLink>
          </Container>
        </Box>
      </Stack>
    </Flex>
  );
};
