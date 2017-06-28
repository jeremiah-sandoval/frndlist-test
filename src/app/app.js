var React = require('react');

import { BrowserRouter as Router, Route, Switch, IndexRoute } from 'react-router-dom';
import FriendsList from './containers/friends/friendslist';
import AddFriend from './containers/friends/addfriend';
import UpdateFriend from './containers/friends/updatefriend';

var About = React.createClass({
  render() {
    return (
      <h1>About Page</h1>
    );
  }
})

var Contact = React.createClass({
  render() {
    return (
      <h1>Contact Page</h1>
    );
  }
})

var App = React.createClass({
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/home" component={FriendsList}/>
          <Route path="/add" component={AddFriend}/>
          <Route path="/update/:friendId" component={UpdateFriend}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    );
  }
});
module.exports = App;
