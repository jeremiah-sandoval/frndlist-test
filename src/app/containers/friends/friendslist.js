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
        {friend}
      </div>
    );
  },
  onDelete: function(id){
    console.log(id);
    deleteFriend(id).then((data) => {
      let friends = this.state.friends.filter((friend) => {
        return id !== friend.id;
      });
      this.setState(state => {
        state.friends = friends;
        return state;
      }).bind(this);
    }).catch((err) => {
      consoler.error('err',err);
    });
  }
});

module.exports = FriendsList;
