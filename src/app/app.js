var React = require('react');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FriendsList from './containers/friends/friendslist';
import AddFriend from './containers/friends/addfriend';

var App = React.createClass({
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" component={FriendsList}/>
          <Route path="/add" component={AddFriend}/>
        </Switch>
      </Router>
    );
  }
});
module.exports = App;
