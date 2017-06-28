var React = require('react');

var FriendItem = React.createClass({

  render: function(){
    return(
      <div className="col-md-3">
        <form>
          <label>Name:</label><span className="clearfix">{this.props.item.name}</span>
          <label>Age:</label><span className="clearfix">{this.props.item.age}</span>
          <div className="btnContainer">
            <input type="submit" className="btn btn-primary" value="Edit"/>
            <input onClick={this.handleDelete} type="submit" className="btn btn-delete" value="Delete"/>
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
