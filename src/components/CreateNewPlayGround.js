import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateNewPlayGround = () => {
  let navigate = useNavigate();

  const createNewPlayGround = () => {
    const id = uuidv4();
    navigate(`/${id}`);
  };

  return <button onClick={() => createNewPlayGround()}>New Playground</button>;
};

export default CreateNewPlayGround;
