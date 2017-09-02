import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

const axios = require('axios');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          email: '',
          password: '',
          passwordAgain: '',
          error: '',
          open: false,
          login_success: false
        }

      }

      register = (e) => {
        e.preventDefault()
          if (this.state.password === this.state.passwordAgain) {
            axios.post('http://127.0.0.1:5000/auth/register', {
                username: this.state.userName,
                email: this.state.email,
                password: this.state.password
            }).then(resp => {
                if (resp.status === 201) {
                    this.setState({login_success: true})
                    localStorage.setItem('username', resp.data['username']);
                    localStorage.setItem('token', resp.data['token']);
                }
            }).catch((error) => {
                this.setState({error: error.response.data.error})
                this.setState({open: true})
                console.log(error)
            })
        }
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
    };
    if (this.state.login_success === true) {
        return <Redirect to='/bucketlist' />
    }
    return (
      <div className="Login" >
          <Navbar/>
          <Card style={style}>
            <CardHeader
            title="Register here"
            />
            <CardText>
                <form onSubmit={this.register.bind(this)}>
                    <TextField
                        ref="userName"
                        hintText="Username"
                        floatingLabelText="Username"
                        onChange={(e) => {
                            this.setState({userName: e.target.value})
                        }}
                    /><br />
                        <br />
                    <TextField
                        ref="email"
                        hintText="Email"
                        floatingLabelText="Email"
                        onChange={(e) => {
                            this.setState({email: e.target.value})
                        }}
                    /><br />
                        <br />
                    <TextField
                        ref="password"
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        onChange={(e) => {
                            this.setState({password: e.target.value})
                        }}
                    /><br />
                    <br />
                    <TextField
                        ref="passwordAgain"
                        hintText="password again"
                        floatingLabelText="password again"
                        value={this.state.passwordAgain}
                        onChange={(e) => {
                            this.setState({passwordAgain: e.target.value})
                        }}
                        type="password"
                    /><br />
                    <br />
                    <RaisedButton type="submit" label="Register" primary={true} />
                </form>
                <Snackbar
                    open={this.state.open}
                    message={this.state.error}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </CardText>
        </Card>
      </div>
    );
  }
}

export default Login;
