import React from "react";
import YjsTextArea from "./YjsTextArea";
import QuillEditor from "./QuillEditor";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Yjs-React-Example</h1>
      <h4>There are great benefits to combining the efforts of numerous experts. Expand your ideas by working together.</h4>
      <p>The current project is aimed to provide a collaborative writing tool open-source, and to example the use of Yjs for realtime  communication.</p>
      <p>This example have two components, the first using  Quill as WYSIWYG text editor, with custom getter and setter for text, and a textarea, both using Yjs as backend.</p>
      <p>First lets see see our textarea: </p>
      <YjsTextArea />
      <p>Now the  QuillEditor:</p>
      <QuillEditor />
      <p>As you can see, writing in one make the other change, since both of them are connected.</p>
      <p>You can open another instance, and see how all editors are connected!</p>
      <p>ToDos:</p>
      <dl>
        <dt>Create Rooms/Sessions on Yjs</dt>
        <dd>- Make your text private and share with links that reference only the text you want</dd>
        <dt>Add a DataBase</dt>
        <dd>- Use the database you prefer:sql, mongo, dynamo, etc., so you can persists text.</dd>
        <dt>Personalize style</dt>
        <dd>- Use custom css, bootstrap, material-ui, styled-components, etc, to give your touch (or your company brand) to colaborative text.</dd>
      </dl>
      <h3><b>Collaborating</b></h3>
      <p>Reach the repo for this project in <a href='https://github.com/KoyamaSohei/yjs-react-example'>GitHub</a> to enhance this example!</p>
      <br/><hr/>
    </div>
  )
}

export default App;