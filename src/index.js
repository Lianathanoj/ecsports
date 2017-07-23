import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './routes/LandingPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandingPage/>, document.getElementById('root'));
registerServiceWorker();
