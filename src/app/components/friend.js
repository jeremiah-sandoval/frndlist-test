var React = require('react');
import { Link } from 'react-router-dom';


var FriendItem = React.createClass({
  render: function(){
    return(
      <div className="col-md-3">
        <form>
          <label>Name:</label><span className="clearfix">{this.props.item.name}</span>
          <label>Age:</label><span className="clearfix">{this.props.item.age}</span>
          <div className="btnContainer">
            <Link to={`/update/${this.props.item.id}`}  className="btn btn-primary">Edit</Link>
            <a onClick={this.handleDelete} className="btn btn-delete">Delete</a>
          </div>
        </form>
      </div>
    );
  },
  handleDelete: function() {
    this.props.onDelete(this.props.item.id);
  }
});

module.exports = FriendItem;
