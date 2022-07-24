import { useAtom } from "jotai";
import { userAtom } from "../atom";
import { useRef } from "react";

const Home = () => {
  const [user, setUser] = useAtom(userAtom);
  const _input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(_input.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Name :
          <input type="text" ref={_input} required />
        </label>
        <button type="submit">Enter </button>{" "}
      </form>
    </div>
  );
};

export default Home;
