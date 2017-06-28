var React = require('react');
import { fetchFriends, deleteFriend } from '../../actions/friendaction';
import AddFriend from './addfriend';
import FriendItem from '../../components/friend';

//Create Friends List component
var FriendsList = React.createClass({
  getInitialState: function(){
    return {
      friends: []
    };
  },
  componentDidMount: function() {
    fetchFriends().then( json => {
      this.setState({
        friends: json
      });
    });
  },
  render: function() {
    var friend = this.state.friends;
    friend = friend.map(function(item, index){
      return(
        <FriendItem key={index} item={item} onDelete={this.onDelete}/>
      );
    }.bind(this));

    return(
      <div className="container">
        <AddFriend></AddFriend>
        {friend}
      </div>
    );
  },
  onDelete: function(id){
    //console.log(id);
    deleteFriend(id);
  }
});

module.exports = FriendsList;
