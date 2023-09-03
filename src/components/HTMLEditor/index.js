import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, EditorState } from "draft-js";
import { convertToRaw, convertFromHTML } from "draft-js";
import htmlToDraft from "html-to-draftjs";

const HTMLEditor = ({
  labelText,
  required,
  editorStates,
  onEditorStateChange,
}) => {
  //   let state = editorState ?? EditorState.createEmpty();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const html = "<p></p>";
    const blocksFromHtml = htmlToDraft(editorStates ?? html);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHtml.contentBlocks,
      blocksFromHtml.entityMap
    );
    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  }, []);

  const handleOnChange = (val) => {
    setEditorState(val);
    onEditorStateChange(val);
  };

  return (
    <div className="mb-4">
      <label className="d-block prime-label mb-3 mx-md-3" htmlFor="email">
        {labelText}
        {required && <span className="text-danger">*</span>}
      </label>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleOnChange}
      />
    </div>
  );
};

export default HTMLEditor;
