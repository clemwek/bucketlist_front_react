import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Navbar from './Navbar';

const axios = require('axios');

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        margin: 'auto',
        width: '50%',
        height: 'auto',
        textAlign: 'center',
      },
      redirect: false,
      itemName: '',
      description: '',
      date: ''
    }

    this.AddItem = (e) => {
      e.preventDefault()
      // axios.post('http://127.0.0.1:5000//items', {
      //   username: this.state.userName,
      //   email: this.state.email,
      //   password: this.state.password
      // }).then(resp => {
      //     if (resp.status === 201) {
      //         console.log(resp.data)
      //         this.setState({login_success: true})
      //         localStorage.setItem('username', resp.data['username']);
      //         localStorage.setItem('token', resp.data['token']);
      //     }
      // }).catch((error) => {
      //     console.log(error)
      // })
      let strDate = this.state.date.toString()
      let newDate = new Date(strDate)
      let formatedDate = newDate.getDate() + '/' + (newDate.getMonth()+1) + '/' + newDate.getFullYear()
      console.log(formatedDate)

    }
  }
  render() {
    return (
      <div className="AddItem" >
          <Navbar/>
          <Card style={this.state.style}>
            <CardHeader
            title="Add A Item"
            />
            <form onSubmit={this.AddItem.bind(this)}>
              <CardText>
                <TextField
                    hintText="Item name"
                    floatingLabelText="Item name"
                    onChange={(e) => {
                        this.setState({itemName: e.target.value})
                    }}
                /><br />
                <br />
                <TextField
                    hintText="Item description"
                    floatingLabelText="Item description"
                    onChange={(e) => {
                        this.setState({description: e.target.value})
                    }}
                /><br />
                <br />
                  <DatePicker hintText="Choose A date" container="inline"
                  onChange={(e, date) => {
                    console.log(date)
                        this.setState({date: date})
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

export default AddItem;
