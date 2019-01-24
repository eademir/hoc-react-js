import React from 'react'

export default class FN extends React.Component{
    render(){
        console.log('fn rendered')
        return(
            <div>
                {this.props.firstNumber}
            </div>
        )
    }
}