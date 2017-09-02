import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
      redirect: false
    }

    this.addBucketlist = (e) => {
      e.preventDefault()
      console.log('this is a test.')
      axios.post('http://127.0.0.1:5000/bucketlists', 
        {name: this.state.bucketName}, {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }}
    ).then(resp => {
        if (resp.status === 201) {
            console.log(resp.data.message)
            this.setState({redirect: true})
        }
    }).catch((error) => {
        console.log(error)
    })
    }
  }
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
            <form onSubmit={this.addBucketlist.bind(this)}>
              <CardText>
              <TextField
                  hintText="Bucketlist name"
                  floatingLabelText="Bucketlist name"
                  onChange={(e) => {
                      this.setState({bucketName: e.target.value})
                  }}
              /><br />
              <br />
              <RaisedButton type="submit" label="Add Bucket" primary={true} />
              </CardText>
            </form>
        </Card>
      </div>
    );
  }
}

export default AddBucketlist;
