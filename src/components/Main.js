import { Stack } from '@chakra-ui/react';

export const Main = (props) => (
  <Stack
    spacing='1.5rem'
    width='100%'
    as='main'
    maxWidth='50rem'
    // mt="-45vh"
    // pt="8rem"
    px='1rem'
    {...props}
  />
);
