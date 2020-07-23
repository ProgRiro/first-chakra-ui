import React, { useContext, useState } from "react";
import { Button, Flex, Box, Heading } from "@chakra-ui/core";
import { HelloContext } from "../App";

function LoadingBtn() {
  const hello = useContext(HelloContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Flex direction="column" align="center">
      <Heading>{hello}</Heading>
      {console.log("render")}
      <Box m={3}>
        <Button
          isLoading={isLoading}
          loadingText="Submitting"
          variantColor="teal"
          variant="outline"
          onClick={() => {
            setIsLoading(!isLoading);
          }}
        >
          Submit
        </Button>
      </Box>
      <Button
        variantColor="green"
        size="md"
        onClick={() => {
          setIsLoading(false);
        }}
      >
        Stop Loading
      </Button>
    </Flex>
  );
}

export default LoadingBtn;
