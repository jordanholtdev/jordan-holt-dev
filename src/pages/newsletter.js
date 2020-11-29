import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';
import { Subscribe } from '../components/Subscribe/Subscribe';
import { NextSeo } from 'next-seo';

import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon, RepeatClockIcon } from '@chakra-ui/icons';

const url = 'https://jordanholt.dev/newsletter';
const title = 'Newsletter - Jordan Holt';
const description = 'Sign up now to start recieving my newsletter';

const Newsletter = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Container>
        <Nav />
        <Main>
          <Flex
            pt={12}
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Heading as='h1' size='2xl'>
              Newsletter
            </Heading>
            <Text py={4} fontSize='lg'>
              Every Friday, I send out an email with tips, tricks, resources and
              other interesting things in the world of web development that I've
              come across.
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={RepeatClockIcon} color='green.500' />
                Every Friday
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Useful tips and techniques
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Intriguing apps and services
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                SaaS and indie dev projects
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Intersting things to read/listen/watch
              </ListItem>
            </List>
          </Flex>
          <Box>
            <Subscribe />
          </Box>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Newsletter;
