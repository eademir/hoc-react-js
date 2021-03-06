import React from 'react'
import LoaderHOC from './loaderhoc'

class Post extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.post.map(
                        post =>
                        <div key={post.id}>
                            {post.title}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default LoaderHOC(Post, 'post')