var React = require('react');
import Form from '../../components/form';
import { fetchFriend, updateFriend } from '../../actions/friendaction';

var UpdateFriend = React.createClass ({
  getInitialState() {
    return {
      friend: {}
    };
  },
  componentDidMount() {
    fetchFriend(this.props.params.friendId)
      .then((data) => {
        this.setState(state => {
          state.friend = data;
          return state;
        });
      }).catch((err) => {
        console.error('err', err);
      });
  },
  handleSubmit(data) {
    updateFriend(this.state.friend.id, data);
  },
  render() {
    return (
      <Form onSubmit={this.handleSubmit} name={this.state.friend.name} age={this.state.friend.age}></Form>
    );
  }
});

module.exports = UpdateFriend;
