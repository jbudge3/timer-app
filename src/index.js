import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimerApp from './components/timer-app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimerApp />, document.getElementById('root'));
registerServiceWorker();
