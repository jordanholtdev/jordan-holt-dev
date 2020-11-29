import { SimpleGrid, Heading, Box } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <Box textAlign='left' id='projects' pt={32}>
      <Heading pb={10} as='h2' size='lg'>
        Side-Projects
      </Heading>
      <SimpleGrid columns={[1]} spacing={10}>
        <ProjectCard
          imageUrl={'/static/images/blog-image.jpg'}
          name={'My Blog'}
          description={
            'My personal blog. I write about learning to code, technology and web development. All the code is open source and readers can edit the articles written in MDX and open a pull request. Built in React using Gatsby, Chakra-UI, Jest and React Testing Library   '
          }
          liveLink={'https://blog.jordanholt.dev/'}
          gitLink={'https://github.com/jordanholtdev/jordan-holt-blog'}
        />
        <ProjectCard
          imageUrl={'/static/images/crypto-image.jpg'}
          name={'Crypto Exchanges'}
          description={
            'Search crypto exchange information. This is a simple app that allows users to search and compare prices at crypto currency exchanges. Built using vanilla JavaScript, BootStrap and Chart.js'
          }
          liveLink={'https://musing-aryabhata-7e5303.netlify.app/'}
          gitLink={'https://github.com/jordanholtdev/crypto-exchanges'}
        />
        {/* <ProjectCard
          imageUrl={'/static/images/blog-image.jpg'}
          name={'Crypto Exchanges'}
          description={'Up-to-date crypto exchange information'}
          liveLink={'https://musing-aryabhata-7e5303.netlify.app/'}
          gitLink={'https://github.com/jordanholtdev/crypto-exchanges'}
        /> */}
      </SimpleGrid>
    </Box>
  );
};
