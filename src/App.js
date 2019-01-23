import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Post from './components/posts'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: [],
            loading: true,
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
                            post,
                            loading: false
                        })
                    }, 2000
                )
            }
        )
    }

    render() {
    return (
      <div className="App">
          <Post {...this.state}/>
      </div>
    );
  }
}

export default App;
