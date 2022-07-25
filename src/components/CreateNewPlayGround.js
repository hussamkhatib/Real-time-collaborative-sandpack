import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Select } from "@chakra-ui/react";
import { useRef } from "react";

const templates = [
  "angular",
  "react",
  "react-ts",
  "vanilla",
  "vanilla-ts",
  "vue",
  "vue3",
  "svelte",
  "solid",
];

const CreateNewPlayGround = () => {
  let navigate = useNavigate();
  const _template = useRef();
  const createNewPlayGround = (e) => {
    e.preventDefault();
    const id = uuidv4();
    navigate(`/${id}/${_template.current.value}`);
  };
  return (
    <Box my="4">
      <Heading size="lg" my="1.5">
        Create New Playground
      </Heading>

      <Box as="form" onSubmit={createNewPlayGround}>
        <Select placeholder="Select Template" ref={_template} required>
          {templates.map((template) => (
            <option key={template} value={template}>
              {template}
            </option>
          ))}
        </Select>
        <Button mt="1.5" type="submit" colorScheme="main">
          Create
        </Button>
      </Box>
    </Box>
  );
};
export default CreateNewPlayGround;
