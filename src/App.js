import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Post from './posts/Post';
import Posts from './posts/Posts';
import NewPost from './posts/NewPost';
const defaultState = {
  isEditMode: false,
  name:"wael"
}
const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjogy994809c501glpnyuca6l/master',
  clientState:{
    defaults:defaultState,
    resolvers:{}
  }
})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    );
  }
}
export default App;
