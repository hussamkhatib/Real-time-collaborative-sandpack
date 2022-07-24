import { useEffect } from "react";
import initialize from "./firebaseConfig";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import { Provider } from "jotai";

export default function App() {
  useEffect(() => {
    initialize();
  }, []);

  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}
