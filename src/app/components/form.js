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
      <form name="friend-form" onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type="text" id="friend-name" value={this.state.name} onChange={this.handleNameChange}/>
        <label>Name:</label>
        <input type="text" id="friend-age" value={this.state.age} onChange={this.handleAgeChange}/>
        <input type="submit" value="Add Friend"/>
      </form>
    );
  }

});

export default Form;
