import React from 'react'

export default class Post extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.loading ? <div>loading...</div>:
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