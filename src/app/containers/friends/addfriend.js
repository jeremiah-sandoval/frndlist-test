var React = require('react');
import Form from '../../components/form';
import { addFriend } from '../../actions/friendaction';
import { createBrowserHistory } from 'history';

var AddFriend = React.createClass({
  handleSubmit(data) {
    addFriend(data);
    createBrowserHistory().push("/home");
  },
  render(){
    return(
      <Form onSubmit={this.handleSubmit}></Form>
    );
  }
});
module.exports = AddFriend;
