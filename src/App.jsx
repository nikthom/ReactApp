import React from 'react';
import logo from './logo.svg';
import './App.css';

class EnterStock extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label id = "input">
          Enter stock name:
          <input id = "input" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input id = "submitButton" type="submit" value="Submit" />
      </form>
    );
  }
}


function App() {
    return (
      <div>
        <div className="App-header">
          <div id = "title">GetStock</div>
          <div className = "form-container">
            <EnterStock />
          </div>
        </div>
      </div>
    );
}

export default App;
