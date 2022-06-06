import { useState, useEffect } from "react";
import MultiUserSandpack from "./MultiUserSandpack";
import initialize from "./firebaseConfig";

export default function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
  };

  useEffect(() => {
    initialize();
  }, []);

  if (name) return <MultiUserSandpack name={name} />;
  else
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Name :
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            required
          />
        </label>
        <button type="submit">Enter </button>{" "}
      </form>
    );
}
