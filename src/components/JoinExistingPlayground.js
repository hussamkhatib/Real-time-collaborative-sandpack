import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import { useRef } from "react";

const JoinExistingPlayground = () => {
  const _input = useRef();
  let navigate = useNavigate();
  const joinExistinPlayground = (e) => {
    e.preventDefault();
    const link = _input.current.value;
    const dbRef = firebase.database().ref();
    dbRef
      .child(link)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) navigate(`/${link}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={joinExistinPlayground}>
      <label>Playground Link</label>
      <input ref={_input} type="text" required />
      <button type="submit">Join Existing Playground</button>
    </form>
  );
};

export default JoinExistingPlayground;
