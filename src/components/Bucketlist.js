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
import BucketCard from './BucketCard';
import { Link } from 'react-router-dom';

const axios = require('axios');

class Bucketlist extends Component {
  constructor() {
    super();
    this.state = {
      bucketlists: []
    };
  }

  deleteBucket = (id) => {
    axios.delete('http://127.0.0.1:5000/bucketlists/'+ id, {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
    }).then(resp => {
        if (resp.status === 200) {
            const bucketlists = this.state.bucketlists;
            const filteredList = bucketlists.filter((item)=> item.id !== id)
            this.setState({bucketlists: filteredList})
        }
    }).catch((error) => {
        console.log(error)
    })
  }

  componentWillMount() {
    axios.get('http://127.0.0.1:5000/bucketlists', {
        headers: {
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
    }).then(resp => {
        if (resp.status === 200) {
            this.setState({bucketlists: resp.data.bucketlist})
        }
    }).catch((error) => {
        console.log(error)
        console.log('test we aregetting here!')
    })
  }
  render() {
    const style = {
      addBucket: {
        right: 20,
        bottom: 20,
        position: 'fixed'
      }
    }
    let bucketlist;
    if (this.state.bucketlists) {
      bucketlist = this.state.bucketlists.map(bucket => {
        // console.log(bucket)
        return (
          <BucketCard key={bucket.id} bucket={bucket} deleteBucket={this.deleteBucket}/>
        );
      });
    }
    return (
      <div className="Bucketlist" >
          <Navbar/>
          {bucketlist}
        <Link to={'/addBucketlist'}>
        <FloatingActionButton style={style.addBucket}>
          <ContentAdd />
        </FloatingActionButton>
        </Link>
      </div>
    );
  }
}

export default Bucketlist;
