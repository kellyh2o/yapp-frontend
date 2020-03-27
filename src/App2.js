import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Drawer from '@material-ui/core/Drawer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Drawer anchor='left' open={true} />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:postId" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
