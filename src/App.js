import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Post from './components/posts'
import User from './components/users'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: [],
            user: []
        }
    }
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            post => post.data
        ).then(
            post => {
                setTimeout(
                    () =>{
                        this.setState({
                            post
                        })
                    }, 2000
                )
            }
        );
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            user => user.data
        ).then(
            user => {
                setTimeout(
                    () =>{
                        this.setState({
                            user
                        })
                    }, 1000
                )
            }
        )
    }

    render() {
    return (
      <div className="App">
          <User {...this.state}/>
          <br/>
          <hr/>
          <br/>
          <Post {...this.state}/>
      </div>
    );
  }
}

export default App;
