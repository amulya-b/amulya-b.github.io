import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Route path = "/" component = {App} />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
