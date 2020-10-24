import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { FormspreeProvider } from "@formspree/react";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <CSSReset />
        <FormspreeProvider project="1531282609055727227">
          <Component {...pageProps} />
        </FormspreeProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
