var React = require('react');
import Form from '../../components/form';
import { addFriend } from '../../actions/friendaction';

var AddFriend = React.createClass({
  handleSubmit(e, data) {
    e.preventDefault();
    console.log(data);
    addFriend(data);
  },
  render(){
    return(
      <Form onSubmit={this.handleSubmit}></Form>
    )
  }
});
module.exports = AddFriend;
