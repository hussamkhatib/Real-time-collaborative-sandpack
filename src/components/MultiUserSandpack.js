import Editor from "@monaco-editor/react";
import React, { useRef, useEffect, useState } from "react";
import { userAtom } from "../atom";
import firebase from "firebase/app";
import { fromMonaco } from "@hackerrank/firepad";
import { useAtom } from "jotai";
import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useParams, useSearchParams } from "react-router-dom";

const MultiUserSandpack = () => {
  const params = useParams();
  const template = params.template;
  return (
    <SandpackProvider template={template}>
      <SandpackLayout theme="dark">
        <SandpackEditor />
        <SandpackPreview customStyle={{ height: "100vh" }} />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default MultiUserSandpack;

const SandpackEditor = () => {
  const params = useParams();
  let [, setSearchParams] = useSearchParams();
  const [name] = useAtom(userAtom);
  const editorRef = useRef(null);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const { activePath } = sandpack;

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    setEditorLoaded(true);
  }

  useEffect(() => {
    if (!editorLoaded) {
      return;
    }

    const dbRef = firebase
      .database()
      .ref()
      .child(
        `${params.id}/${params.template}/${replaceInvalidCharacters(
          activePath,
          "-"
        )}`
      );
    const firepad = fromMonaco(dbRef, editorRef.current);
    firepad.setUserName(name);
    setSearchParams({
      file: activePath,
    });
    return () => {
      firepad.dispose();
      setEditorLoaded(false);
    };
  }, [
    editorLoaded,
    activePath,
    name,
    params.id,
    params.template,
    setSearchParams,
  ]);

  return (
    <SandpackStack customStyle={{ height: "100vh", margin: 0 }}>
      <FileTabs />
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        <Editor
          defaultLanguage="javascript"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          defaultValue={code}
          width="100%"
          height="90vh"
          language="javascript"
          key={sandpack.activePath}
          onChange={(value) => {
            updateCode(value || "");
          }}
        />
      </div>
    </SandpackStack>
  );
};

/**
 * This function replaces special characters like \,#,. etc
 * which are not allowed in firebase database ref
 * with the string provided in paramter
 * @param {the path that will be provided to firebase database reference} str
 * @param {the string that gets replaced by invalid characters } replaceStr
 */

function replaceInvalidCharacters(str, replaceStr) {
  return str.replace(/[ ./#$[\] ]/g, replaceStr);
}
