import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  useToast,
  FormHelperText,
} from "@chakra-ui/core";

import { useForm } from "@formspree/react";

export const ContactForm = () => {
  // const [state, handleSubmit] = useForm("signupForm");
  const toast = useToast();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch(
      `https://formspree.io/p/1531282609055727227/f/signupForm`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: new FormData(form),
      }
    );
    const { error } = await res.json();

    if (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Success!.",
      description: error,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <FormControl>
        <FormLabel htmlFor="email" id="email">
          Email:
        </FormLabel>
        <Input
          aria-label="your email"
          id="email"
          name="email"
          type="email"
          isRequired
          focusBorderColor="pink.400"
          placeholder="email"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="name" id="name">
          Name:
        </FormLabel>
        <Input
          aria-label="your name"
          id="name"
          name="name"
          type="text"
          isRequired
          focusBorderColor="pink.400"
          placeholder="name"
        />
      </FormControl>
      <FormControl aria-label="your message">
        <FormLabel htmlFor="message" id="message">
          Message:
        </FormLabel>
        <Textarea
          id="message"
          name="message"
          type="text"
          placeholder="Enter your message here..."
        />
        <FormHelperText id="message-helper-text">
          A brief message regarding your inquirey
        </FormHelperText>
      </FormControl>
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <Button
        // isDisabled={state.submitting}
        mt={4}
        variantColor="teal"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};
