import { useEffect } from "react";
import initialize from "./firebaseConfig";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import { Provider } from "jotai";
import Main from "./view/Main";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App() {
  useEffect(() => {
    initialize();
  }, []);

  const theme = extendTheme({
    colors: {
      main: {
        500: "#6FEC5B",
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Main />} />
        </Routes>
      </Provider>
    </ChakraProvider>
  );
}
