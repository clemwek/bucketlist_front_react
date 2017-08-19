import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './Navbar';

class Bucketlist extends Component {
  render() {
    return (
      <div className="Bucketlist" >
          <Navbar/>
          <Card>
            <CardHeader
            title="Bucketlist"
            />
            <CardText>
            
            </CardText>
        </Card>
      </div>
    );
  }
}

export default Bucketlist;
