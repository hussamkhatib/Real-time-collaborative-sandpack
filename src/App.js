import { useEffect } from "react";
import initialize from "./firebaseConfig";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";

export default function App() {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
