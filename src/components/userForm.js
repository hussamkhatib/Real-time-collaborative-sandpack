import { userAtom } from "../atom";
import { useRef } from "react";
import { Button } from "@chakra-ui/react";
import { Box, Input, FormLabel } from "@chakra-ui/react";
import { useAtom } from "jotai";

const UserForm = () => {
  const [, setUser] = useAtom(userAtom);
  const _input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(_input.current.value);
  };

  return (
    <Box p="4" maxW="960px" mx="auto">
      <Box as="form" onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Enter your Name</FormLabel>
        <Input id="name" type="text" ref={_input} required />
        <Button mt="1.5" colorScheme="main" type="submit">
          Enter
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;
