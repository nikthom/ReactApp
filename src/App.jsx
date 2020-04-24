import React from 'react';
import logo from './logo.svg';
import './App.css';
import key from './key.js';

class Result extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <p> {this.props.data} </p>
      </div>
    );
  }
}
class EnterStock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: '', 
      result: '', 
      objectHead: 'Global Quote',
      objectTail: '05. price'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
    event.preventDefault();
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + this.state.value + "&apikey=" + key.key)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({result: data[this.state.objectHead][this.state.objectTail]})
    })
    .catch((e) => {
      this.setState({result: "Not a valid stock symbol"})
    });
  }
  

  render(){
    return(
      <div> 
        <Result data = {this.state.result}/>
        <form onSubmit = {this.handleSubmit}>
          <label id = "input">
            Enter stock name:
            <input id = "input" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input id = "submitButton" type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
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
