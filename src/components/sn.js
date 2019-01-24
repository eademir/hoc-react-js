import React from 'react'

export default class SN extends React.PureComponent{
    render(){
        console.log('sn rendered');
        return(
            <div>
                {this.props.secondNumber}
            </div>
        )
    }
}