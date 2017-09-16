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
import AddBucketlist from './components/AddBucketlist';
import EditBucket from './components/EditBucketlist';
import EditItem from './components/EditItem';
import AddItem from './components/AddItem';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
    <MuiThemeProvider>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/bucketlist" component={Bucketlist}/>
            <Route exact path="/addBucketlist" component={AddBucketlist}/>
            <Route exact path="/addItem/:bucketId" component={AddItem}/>
            <Route exact path="/editBucket/:bucketId" component={EditBucket}/>
            <Route exact path="/editItem/:bucketId/items/:itemId" component={EditItem}/>
            {/* <Route path="/topics" component={Topics}/> */}
        </div>
    </MuiThemeProvider>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
