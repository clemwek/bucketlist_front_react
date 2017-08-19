import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Bucketlist from './components/Bucketlist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
    <MuiThemeProvider>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/bucketlist" component={Bucketlist}/>
            {/* <Route path="/topics" component={Topics}/> */}
        </div>
    </MuiThemeProvider>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
