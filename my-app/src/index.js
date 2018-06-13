import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Forms';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Form /></div>, document.getElementById('root'));
registerServiceWorker();
