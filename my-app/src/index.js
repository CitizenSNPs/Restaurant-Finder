import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Form from './Forms';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div><Form /></div>, document.getElementById('root'));
registerServiceWorker();
