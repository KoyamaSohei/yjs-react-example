import React, { Component } from "react";
import { YText } from "yjs/types/YText";
import { WebsocketProvider } from "yjs/provider/websocket";
import { TextareaBinding } from "yjs/bindings/textarea";

export default class YjsTextArea extends Component {
    componentDidMount() {
        const provider = new WebsocketProvider("wss://yjs-react-example.herokuapp.com/");// change to 'ws://localhost:3000'
        const ydocument = provider.get("textarea");
        const type = ydocument.define("textarea", YText);
        new TextareaBinding(type, this.refs.share);
    }
    render() {
        return (
            <textarea ref="share" />
        );
    }
}
