import { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="text-sm text-gray-400 py-2">
                <p>
                    Utilizado <a href='https://pt-br.reactjs.org/' target="_blank" className="text-blue-400 inline-block">reactjs</a>, <a href='https://tailwindcss.com/' target="_blank" className="text-blue-400 inline-block">tailwindcss</a>, <a href='https://quilljs.com/' target="_blank" className="text-blue-400 inline-block">quilljs</a> e <a href='https://vitejs.dev/' target="_blank" className="text-blue-400 inline-block">vite</a>.
                </p>
            </footer>
        );
    }
}