var React = require('react');

var Form = React.createClass({
  getInitialState(){
    return {
      name: this.props.name,
      age: this.props.age
    }
  },
  componentWillReceiveProps(props){
    this.setState(props);
  },
  handleNameChange(e){
    this.setState({
      name: e.target.value
    });
  },
  handleAgeChange(e){
    this.setState({
      age: e.target.value
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  },
  render() {
    return(
      <form id="friendForm" name="friend-form" onSubmit={this.handleSubmit}>
        <div className="col-md-2 label-container">
          <label className="clearfix">Name:</label>
          <label className="clearfix">Age:</label>
        </div>
        <div className="col-md-3 input-container">
          <input className="clearfix" type="text" id="friend-name" value={this.state.name} onChange={this.handleNameChange}/>
          <input className="clearfix" type="text" id="friend-age" value={this.state.age} onChange={this.handleAgeChange}/>
        </div>
        <input className="btn btn-primary clearfix" type="submit" value="Submit"/>
      </form>
    );
  }

});

export default Form;
