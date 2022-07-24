import CreateNewPlayGround from "../components/CreateNewPlayGround";
import JoinExistingPlayground from "../components/JoinExistingPlayground";
import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p="4" maxW="960px" mx="auto">
      <Heading as="h1">
        Example of Collabrative Code Editor using Sandpack and Firepad-x
      </Heading>
      <CreateNewPlayGround />
      <JoinExistingPlayground />
    </Box>
  );
};

export default Home;
