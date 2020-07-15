import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  ContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import "./styles.css";

function Draftjs() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  console.log(editorState);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  function onBoldClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  }
  function onItalicClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  }
  function onCodeClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "CODE"));
  }

  return (
    <div className="container">
      <h1 className="title">Editor!</h1>
      <div className="button-container">
        <button className="bold" onClick={onBoldClick}>
          Bold
        </button>
        <button className="italic" onClick={onItalicClick}>
          Italic
        </button>
        <button className="code" onClick={onCodeClick}>
          Code
        </button>
      </div>
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
}
export default Draftjs;
