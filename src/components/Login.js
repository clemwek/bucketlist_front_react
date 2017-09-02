import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

const axios = require('axios')

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      open: false,
      login_success: false
    }
  }
  login = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:5000/auth/login', {
      username: this.state.username,
      password: this.state.password
    }).then(resp => {
        this.setState({login_success: true})
        localStorage.setItem('username', resp.data['username']);
        localStorage.setItem('token', resp.data['token']);
    }).catch((error) => {
      this.setState({error: error.response.data.error})
      this.setState({open: true})
      console.log(error)
    })
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
            <Snackbar
              open={this.state.open}
              message={this.state.error}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
        </Card>
      </div>
    );
  }
}

export default Login;
