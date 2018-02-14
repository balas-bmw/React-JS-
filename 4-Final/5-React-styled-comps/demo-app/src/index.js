import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal} from 'styled-components'

injectGlobal`
    body{
        margin:0;
        padding:0,
        font-family:monoco;
    }
`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
