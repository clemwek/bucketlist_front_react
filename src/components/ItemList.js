import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {red500, blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const axios = require('axios');

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    const style = {
        root: {
            margin: 'auto',
            width: '90%',
            height: 'auto',
            textAlign: 'center',
          },
          card: {
            margin: '10px',
            width: '350px',
            height: 'auto'
          },
          imgHeader: {
            height: '50%',
            width: '100%'
          }
    }
    return (
        <list>
            <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
            rightIcon={
            <div>
                <FontIcon className="material-icons" >edit</FontIcon>
                <FontIcon className="material-icons" color={red500} onClick={(e) => {
                  axios.delete('http://127.0.0.1:5000/bucketlists/'+this.props.bucketId+'/items/'+this.props.item.id, {
                      headers: {
                        'Authorization': localStorage.getItem('token'),
                        'Content-Type': 'application/json'
                      }
                  }).then(resp => {
                      if (resp.status === 200) {
                          this.setState({items: resp.data.items})
                      }
                  }).catch((error) => {
                      console.log(error)
                  })
                }}>delete</FontIcon>
            </div>
            }
            primaryText={this.props.item.name}
            secondaryText={this.props.item.date}
            />
        </list>
    );
  }
}

export default ItemList;
