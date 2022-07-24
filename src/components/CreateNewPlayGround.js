import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading } from "@chakra-ui/react";

const CreateNewPlayGround = () => {
  let navigate = useNavigate();
  const createNewPlayGround = () => {
    const id = uuidv4();
    navigate(`/${id}`);
  };
  return (
    <Box my="4">
      <Heading size="lg" my="1.5">
        Create New Playground
      </Heading>
      <Button colorScheme="main" onClick={() => createNewPlayGround()}>
        Create
      </Button>
    </Box>
  );
};
export default CreateNewPlayGround;
