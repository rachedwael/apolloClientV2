import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Post from './posts/Post';
import Posts from './posts/Posts';
import NewPost from './posts/NewPost';


class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <header className="App-header">
              <Link to={"/"} >
                <img src={logo} className="app-logo" alt="logo" />
                <h1>GraphQl is Great</h1>
              </Link>
            </header >
            <main>
              <Switch>
                <Route path="/post/:id" component={Post} />
                <Route path="/posts/new" component={NewPost} />
                <Route exact path="/" component={Posts} />
              </Switch>
            </main>
          </div>
        </Router>

    );
  }
}
export default App;
