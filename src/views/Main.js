import { useAtom } from "jotai";
import { userAtom } from "../atom";
import UserForm from "../components/userForm";
import MultiUserSandpack from "../components/MultiUserSandpack";

const Main = () => {
  const [user] = useAtom(userAtom);
  return user ? <MultiUserSandpack /> : <UserForm />;
};

export default Main;
