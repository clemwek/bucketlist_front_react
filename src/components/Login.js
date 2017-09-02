import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

const axios = require('axios')

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      login_success: false
    }
    this.login = (e) => {
      e.preventDefault()
      axios.post('http://127.0.0.1:5000/auth/login', {
        username: this.state.username,
        password: this.state.password
      }).then(resp => {
        if (resp.status === 202) {
          this.setState({login_success: true})
          localStorage.setItem('username', resp.data['username']);
          localStorage.setItem('token', resp.data['token']);
          console.log(resp.data)
        } else {
          console.log(resp.data)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  render() {
    const style = {
      margin: 'auto',
      width: '50%',
      height: 'auto',
      textAlign: 'center',
    }
    if (this.state.login_success) {
        return <Redirect to='/bucketlist' />
    }
    return (
      <div className="Login" >
          <Navbar/>
          <Card style={style}>
            <CardHeader
            title="Login here"
            />
            <form onSubmit={this.login.bind(this)}>
              <CardText>
              <TextField
                  hintText="Username"
                  floatingLabelText="Username"
                  onChange={(e) => {
                    this.setState({username: e.target.value})
                  }}
              /><br />
                  <br />
              <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  type="password"
                  onChange={(e) => {
                    this.setState({password: e.target.value})
                  }}
              /><br />
              <br />
              <RaisedButton type="submit" label="Login" primary={true} />
              <br />
              <p>forgot your password?</p>
              </CardText>
            </form>
        </Card>
      </div>
    );
  }
}

export default Login;
