import React, { useRef } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Icon,
  useColorMode,
  useToast,
} from "@chakra-ui/core";

export const Subscribe = () => {
  const inputEl = useRef(null);
  const { colorMode } = useColorMode();
  const bgColor = { light: "blue.100", dark: "gray.700" };
  const borderColor = { light: "blue.500", dark: "blue.100" };
  const toast = useToast();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      toast({
        title: "An error occurred.",
        description: error,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    inputEl.current.value = "";
    toast({
      title: "Success!.",
      description: "Thank you! 🎉 You are now subscribed",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
      <Heading as="h4" fontSize="2xl">
        Join the newsletter
      </Heading>
      <FormControl>
        <FormLabel py={2} htmlFor="email">
          Email
        </FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Icon name="email" color="gray.300" />
          </InputLeftElement>
          <Input
            focusBorderColor="lime"
            type="email"
            variant="outline"
            id="email"
            ref={inputEl}
            aria-label="your email"
            aria-describedby="email-helper-text"
            placeholder="jane@acme.com"
          />
        </InputGroup>
      </FormControl>
      <Button
        mt={4}
        variantColor="blue"
        variant="outline"
        onClick={onFormSubmit}
      >
        Subscribe
      </Button>
    </Box>
  );
};
