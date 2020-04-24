import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './redux/reducer';

const store = createStore(searchRobots);

ReactDOM.render( 
<Provider store = {store} >
   <App />
</Provider>
 , document.getElementById('root')
);


serviceWorker.unregister();