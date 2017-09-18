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
      login_success: false,
    }
  }

  login = (event) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:5000/auth/login', {
      username: this.state.username,
      password: this.state.password
    }).then(resp => {
        localStorage.setItem('username', resp.data['username']);
        localStorage.setItem('token', resp.data['token']);
    })
    .then(() => this.setState({login_success: true }))
    .catch((error) => {
      this.setState({error: error.response.data.error})
      this.setState({open: true})
      console.log(error)
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
    const style = {
      margin: 'auto',
      width: '50%',
      height: 'auto',
      textAlign: 'center',
    }
    let login = '';
    if (this.state.login_success) {
        login = (
          <Redirect to='/bucketlist' />
        );
    }
    else if(this.state.login_success === false) {
      login = (
          <div className="Login" >
          <Navbar/>
          <Card style={style}>
            <CardHeader
            title="Login here"
            />
            <form onSubmit={this.login}>
              <CardText>
              <TextField
                name="username"
                hintText="Username"
                floatingLabelText="Username"
                onChange={this.handleChange}
              />
              <br />
                  <br />
              <TextField
                name="password"
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                onChange={this.handleChange}
              />
              <br />
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
    return (
      <div>{login}</div>
    );
  }
}

export default Login;
