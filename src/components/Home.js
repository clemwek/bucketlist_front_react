import React, { Component } from 'react';
import Navbar from './Navbar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }
  render() {
    return (
      <div className="Home" >
        <Navbar></Navbar>
        <Card>
          <CardMedia
            overlay={<CardTitle title="Road to achieving your goals" subtitle="Get started right now" />}
          >
            <img src="assets/img/random-road.jpg" alt="" />
          </CardMedia>
          <CardTitle title="Bucketlist App" />
          <CardText>
          What would you like to do in the next few years? Climb a mountain? Learn to ride a bike? :) It’s important to keep track of what you have already done and what you are yet to achieve. Register and start tracking..
          </CardText>
          <CardActions>
            <RaisedButton label="Register" primary={true} />
            <RaisedButton label="Login" secondary={true} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Home;
