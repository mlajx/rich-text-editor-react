import { Component } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import './Editor.css';

interface IEditor {
    id: String,
    height: String|Number,
}

export default class Editor extends Component<IEditor> {
    componentDidMount() {
        new Quill(`#${this.props.id}`, {
            theme: 'snow'
        });
    }

    render() {
        const height = typeof this.props.height === 'string' ? this.props.height : `${this.props.height}px`;

        return (
            <div id={this.props.id} style={{height}}/>
        );
    }
}