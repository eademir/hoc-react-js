import React from 'react'
import LoaderHOC from './loaderhoc'

class User extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.user.map(
                        user =>
                        <div key={user.id}>
                            {user.name}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default LoaderHOC(User, 'user')