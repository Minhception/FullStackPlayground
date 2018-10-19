import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './Containers/Content/Home/Home'
import Page from './Containers/Content/Page/Page'
import Navigation from './Containers/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <BrowserRouter>
          <div>
            <Navigation/>
            <Route exact path="/" component={Home}/>
            <Route path="/page" component={Page}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
