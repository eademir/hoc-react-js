import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Post from './components/posts'
import User from './components/users'
import FN from './components/fn'
import SN from './components/sn'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: [],
            user: [],
            firstNumber: Math.random(),
            secondNumber: Math.random()
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
    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    firstNumber: Math.random(),
                });
            }, 1000
        )
    }

    render() {
    return (
      <div className="App">
          <FN firstNumber={this.state.firstNumber}/>
          <SN secondNumber={this.state.secondNumber}/>
          <br/>
          <hr/>
          <br/>
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
