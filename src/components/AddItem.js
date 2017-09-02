import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

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

      let strDate = this.state.date.toString()
      let newDate = new Date(strDate)
      let formatedDate = newDate.getDate() + '/' + (newDate.getMonth()+1) + '/' + newDate.getFullYear()
      axios.post('http://127.0.0.1:5000/bucketlists/'+this.props.match.params.bucketId+'/items', 
      {
        name: this.state.itemName,
        description: this.state.description,
        date: formatedDate
      }, {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }}
    ).then(resp => {
          if (resp.status === 201) {
              console.log(resp.data)
              this.setState({redirect: true})
          }
      }).catch((error) => {
          console.log(error)
      })
      console.log(formatedDate)
      console.log()

    }
  }
  render() {
    if (this.state.redirect) {
        return <Redirect to='/bucketlist' />
    }
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
