import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Navbar extends Component {
  render() {
    return (
      <div className="Home" >
        <AppBar
            title="Bucket App"
            iconElementRight={
                <div> 
                    <FlatButton label="Register" />
                    <FlatButton label="Login" />
                </div>
            }
        />
      </div>
    );
  }
}

export default Navbar;
