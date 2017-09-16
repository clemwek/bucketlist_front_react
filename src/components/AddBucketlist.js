import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

const axios = require('axios');

class AddBucketlist extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        margin: 'auto',
        width: '50%',
        height: 'auto',
        textAlign: 'center',
      },
      bucketName: '',
      redirect: false,
      error: '',
      open: false
    }
  }

  addBucketlist = (event) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:5000/bucketlists', 
      {name: this.state.bucketName}, {
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }}
    ).then(resp => {
        if (resp.status === 201) {
            this.setState({redirect: true})
        }
    }).catch((error) => {
      this.setState({error: error.response.data.error})
      this.setState({open: true})
    })
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({[name]: value})
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    if (this.state.redirect) {
        return <Redirect to='/bucketlist' />
    }
    return (
      <div className="AddBucketlist" >
          <Navbar/>
          <Card style={this.state.style}>
            <CardHeader
            title="Add A Bucketlist"
            />
            <form onSubmit={this.addBucketlist}>
              <CardText>
              <TextField
                name="bucketName"
                hintText="Bucketlist name"
                floatingLabelText="Bucketlist name"
                onChange={this.handleChange}
              /><br />
              <br />
              <RaisedButton type="submit" label="Add Bucket" primary={true} />
              </CardText>
            </form>
        </Card>
        <Snackbar
          open={this.state.open}
          message={this.state.error}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default AddBucketlist;
