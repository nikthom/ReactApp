import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    console.log("stuff");
    this.state = {value: '', result: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
    this.setState({result: this.state.value});
  }
  

  render(){
    return(
      <div> 
        {/* <Result data = {this.state.result}/>  */}
        {this.state.result}
        <label id = "input">
          Enter stock name:
          <input id = "input" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input id = "submitButton" type="button" value="Submit" onClick={this.handleSubmit} />
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
