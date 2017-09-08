import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store/createStore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'


const store = createStore({})


ReactDOM.render(<App store={store}/>, document.getElementById('root'))
registerServiceWorker()
