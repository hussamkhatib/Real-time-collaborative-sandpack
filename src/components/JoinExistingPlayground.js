import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import { useRef } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";
import { atom, useAtom } from "jotai";

const errorAtom = atom(null);

const JoinExistingPlayground = () => {
  const _input = useRef();
  const [error, setError] = useAtom(errorAtom);
  let navigate = useNavigate();
  const joinExistinPlayground = (e) => {
    e.preventDefault();
    const id = _input.current.value;
    const dbRef = firebase.database().ref();
    dbRef
      .child(id)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) navigate(`/${id}`);
        else setError(`playground "${id}" does not exist`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Box my="4">
      <Heading size="lg" my="1.5">
        Or Join Existing Playground
      </Heading>
      <FormControl as="form" isInvalid={error} onSubmit={joinExistinPlayground}>
        <FormLabel htmlFor="playground-id">Playground Id</FormLabel>
        <Input id="playground-id" ref={_input} type="text" isRequired />
        {error ? (
          <FormErrorMessage>{error}</FormErrorMessage>
        ) : (
          <FormHelperText>
            Eg: 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
          </FormHelperText>
        )}
        <Button colorScheme="main" type="submit">
          Join
        </Button>
      </FormControl>
    </Box>
  );
};

export default JoinExistingPlayground;
