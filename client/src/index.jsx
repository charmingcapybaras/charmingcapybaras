import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class MainComponent extends Component{
  constructor(){
    super();
  }

  componentWillMount() {
  }

  render(){
    return (
      <div>
        <h1>HELLO WORLD FROM REACT CLIENT FRONTEND!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MainComponent/>, document.getElementById('app'));