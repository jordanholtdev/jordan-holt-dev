import {
  ChakraProvider,
  CSSReset,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';
import { FormspreeProvider } from '@formspree/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo.config';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <FormspreeProvider project='1531282609055727227'>
        <Head>
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </FormspreeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
