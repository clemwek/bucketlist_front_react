import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';
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
      let formatedDate = (newDate.getMonth()+1) + '/' + newDate.getDate() + '/' + newDate.getFullYear()
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
              this.setState({redirect: true})
          }
      }).catch((error) => {
        this.setState({error: error.response.data.error})
        this.setState({open: true})
      })
      console.log(formatedDate)
      console.log()

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

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({[name]: value})
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
                  name="itemName"
                  hintText="Item name"
                  floatingLabelText="Item name"
                  onChange={this.handleChange}
                /><br />
                <br />
                <TextField
                  name="description"
                  hintText="Item description"
                  floatingLabelText="Item description"
                  onChange={this.handleChange}
                /><br />
                <br />
                <DatePicker hintText="Choose A date" container="inline"
                  onChange={(e, date) => {
                    this.setState({date: date})
                  }}
                /><br />
                <br />
                <RaisedButton type="submit" label="Add Bucket" primary={true} />
              </CardText>
            </form>
        </Card>
        <Snackbar
          open={this.state.open}
          message={this.state.error}
          autoHideDuration={5000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default AddItem;
