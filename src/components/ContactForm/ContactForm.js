import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  useToast,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/core";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(15, "Too Short!")
    .max(300, "Too Long!")
    .required("Required"),
});

export const ContactForm = () => {
  const toast = useToast();

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const FORM_ID = process.env.FORMSPREE_FORM_ID;

        const res = await fetch(
          "https://formspree.io/p/1531282609055727227/f/signupForm",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(values),
          }
        );
        const { error } = await res.json();

        if (error) {
          setSubmitting(false);
          resetForm();
          toast({
            title: "An error occurred.",
            description: error,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
          return;
        }

        setSubmitting(false);
        resetForm();
        toast({
          title: "Success!",
          description: "Thank you, message submitted",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name" id="name">
                  Name:
                </FormLabel>
                <Input
                  {...field}
                  aria-label="your name"
                  id="name"
                  type="text"
                  isRequired
                  focusBorderColor="teal.200"
                  placeholder="name"
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input
                  {...field}
                  aria-label="your email"
                  id="email"
                  isRequired
                  type="email"
                  focusBorderColor="teal.200"
                  placeholder="email"
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message">
            {({ field, form }) => (
              <FormControl
                aria-label="your message"
                isInvalid={form.errors.message && form.touched.message}
              >
                <FormLabel htmlFor="message" id="message">
                  Message:
                </FormLabel>
                <Textarea
                  {...field}
                  id="message"
                  isRequired
                  type="text"
                  focusBorderColor="teal.200"
                  placeholder="Enter your message here..."
                />
                <FormHelperText id="message-helper-text">
                  A brief message regarding your inquirey
                </FormHelperText>
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <Button
            mt={4}
            variantColor="teal"
            type="submit"
            isLoading={formik.isSubmitting}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};
