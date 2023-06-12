import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../ckeditor/build/ckeditor";
import InputField from "../InputField";
import EditorSidebar from "./EditorSidebar";

const RichEditor = () => {
  // const [content, setContent] = useState("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
      <div className="col-span-6 text-gray-700">
        <InputField placeholder={"Title goes here!"} />
        <CKEditor
          editor={Editor}
          data=""
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "400px",
                editor.editing.view.document.getRoot()
              );
            });
            // You can store the "editor" and use when it is needed.
            // console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // setContent(data);
            // console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            // console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            // console.log("Focus.", editor);
            // editor.editing.view.change((writer) => {
            //   writer.setStyle(
            //     "border",
            //     "1px solid green",
            //     editor.editing.view.document.getRoot()
            //   );
            // });
          }}
        />
      </div>
      <div className="col-span-2">
        <EditorSidebar />
      </div>
    </div>
  );
};

export default RichEditor;
