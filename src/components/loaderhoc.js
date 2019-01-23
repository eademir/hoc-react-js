import React from 'react'

const LoaderHOC  = (WrapperComponent, field) => {
    return class LoaderHOC extends React.Component{
        render(){
            return this.props[field].length === 0 ? <div>loading...</div> : <WrapperComponent {...this.props}/>
        }
    }
};

export default LoaderHOC