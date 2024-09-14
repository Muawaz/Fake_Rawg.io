import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading as="h4">Oopps</Heading>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exists"
            : "An unexpected Error Occurred"}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
