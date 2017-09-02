import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="Home" >
        <AppBar
            title="Bucket App"
            iconElementRight={
                <div> 
                  <Link to={'/register'}>
                    <FlatButton label="Register" />
                  </Link>
                  <Link to={'/login'}>
                    <FlatButton label="Login" />
                  </Link>
                </div>
            }
        />
      </div>
    );
  }
}

export default Navbar;
