import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Forms';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Form /><App /></div>, document.getElementById('root'));
registerServiceWorker();
