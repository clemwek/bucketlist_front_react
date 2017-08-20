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

class Bucketlist extends Component {
  constructor() {
    super();
    this.state = {
      style: {
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
        },
        addBucket: {
          right: 20,
          bottom: 20,
          position: 'fixed'
        }
      },
    };
  }
  render() {
    return (
      <div className="Bucketlist" >
          <Navbar/>
          <div style={this.state.style.root} className="bucket-wrap">
            <Card style={this.state.style.card}>
            <CardHeader
              title="This is a bucket"
            />
            <CardActions>
              <RaisedButton label="Add Item" />
              <RaisedButton label="Edit" primary={true}/>
              <RaisedButton label="Delete" secondary={true}/>
            </CardActions>
            <CardText>
              <div>
                <list>
                  <ListItem
                    leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                    rightIcon={
                    <div>
                      <FontIcon className="material-icons" >edit</FontIcon>
                      <FontIcon className="material-icons" color={red500}>delete</FontIcon>
                    </div>
                    }
                    primaryText="Vacation itinerary"
                    secondaryText="Jan 20, 2014"
                    />
                  </list>
                </div>
              </CardText>
          </Card>
        </div>
        <FloatingActionButton style={this.state.style.addBucket}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default Bucketlist;
