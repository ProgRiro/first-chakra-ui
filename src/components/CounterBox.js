import React, { useContext } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/core";
import { CountContext } from "../App";

function CounterBox() {
  const countContext = useContext(CountContext);
  return (
    <Box m="3">
      <Heading textAlign="center">
        {countContext.countState.firstCounter}
      </Heading>
      <Flex direction="column" align="center" justify="center">
        <ButtonGroup spacing={4} mb={2}>
          <Button
            variantColor="green"
            size="sm"
            onClick={() => {
              countContext.countDispatch({ type: "INC", value: 1 });
            }}
          >
            +1
          </Button>
          <Button
            variantColor="blue"
            size="sm"
            onClick={() => {
              countContext.countDispatch({ type: "DEC", value: 1 });
            }}
          >
            -1
          </Button>
        </ButtonGroup>
        <Input placeholder="Basic usage" w="50%" />
      </Flex>
    </Box>
  );
}

export default CounterBox;
