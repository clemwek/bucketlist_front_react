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
import ItemList from './ItemList';


const axios = require('axios');

class BucketCard extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    console.log()
    axios.get('http://127.0.0.1:5000/bucketlists/'+this.props.bucket.id+'/items', {
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
    let item_list;
    if (this.state.items) {
      item_list = this.state.items.map(item => {
        console.log(" this place works")
        return (
          <ItemList key={item.id} bucket={item}/>
        );
      });
    }
    return (
      <div className="BucketCard" >
          <div style={style.root} className="bucket-wrap">
            <Card style={style.card}>
            <CardHeader
              title={this.props.bucket.name}
            />
            <CardActions>
            <Link to={'/addItem'}>
              <RaisedButton label="Add Item" />
            </Link>
              <RaisedButton label="Edit" primary={true}/>
              <RaisedButton label="Delete" secondary={true}/>
            </CardActions>
            <CardText>
              <div>
                {item_list}
                </div>
              </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default BucketCard;
