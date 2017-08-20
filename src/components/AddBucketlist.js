import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './Navbar';

class AddBucketlist extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        margin: 'auto',
        width: '50%',
        height: 'auto',
        textAlign: 'center',
      }
    }
  }
  render() {
    return (
      <div className="AddBucketlist" >
          <Navbar/>
          <Card style={this.state.style}>
            <CardHeader
            title="Login here"
            />
            <CardText>
            <TextField
                hintText="Username"
                floatingLabelText="Username"
            /><br />
                <br />
            <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
            /><br />
            <br />
            <RaisedButton label="Login" primary={true} />
            <br />
            <p>forgot your password?</p>
            </CardText>
        </Card>
      </div>
    );
  }
}

export default AddBucketlist;
