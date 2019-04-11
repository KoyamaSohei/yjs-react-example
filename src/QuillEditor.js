import React from "react";
import { YText } from "yjs/types/YText";
import { WebsocketProvider } from "yjs/provider/websocket";
import { QuillBinding } from 'yjs/bindings/quill.js'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {
  let quillRef=null;
  let reactQuillRef=null;

  React.useEffect(() => {
    attachQuillRefs()
    const provider = new WebsocketProvider("wss://yjs-react-example.herokuapp.com/");// change to 'ws://localhost:3000' for local development
    const ydocument = provider.get("textarea");
    const type = ydocument.define("textarea", YText);
    new QuillBinding(type, quillRef);
  }, [])

  const attachQuillRefs = () => {
    if (typeof reactQuillRef.getEditor !== 'function') return;
    quillRef = reactQuillRef.getEditor();
  }
  
  const insertText = () => {
    var range = quillRef.getSelection();
    let position = range ? range.index : 0;
    quillRef.insertText(position, 'Hello, World! ')
  }
  return (
    <div>
        <ReactQuill 
          ref={(el) => { reactQuillRef = el }}
          theme={'snow'} />
        <button onClick={insertText}>Insert 'Hello World!' in Text</button>
      </div>
  )
}

export default QuillEditor;