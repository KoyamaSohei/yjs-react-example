import React, { Component } from "react";
import { YText } from "yjs/types/YText";
import { WebsocketProvider } from "yjs/provider/websocket";
import { TextareaBinding } from "yjs/bindings/textarea";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const provider = new WebsocketProvider("wss://yjs-react-example.herokuapp.com/");// change to 'ws://localhost:3000'
    const ydocument = provider.get("textarea");
    const type = ydocument.define("textarea", YText);
    const binding = new TextareaBinding(type, this.refs.share);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <textarea ref="share" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
