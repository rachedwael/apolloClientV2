import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import  { POSTS_QUERY }  from './../graphql/queries'
export default class Posts extends Component {
    render() {
        return (
            <div>
                <Link className="button" to={"/posts/new"} >new Post</Link>
                <ul className={"post-listing"}>
                    <Query query={POSTS_QUERY}>
                        {({ loading, data, fetchMore }) => {
                            if (loading) return <div className="lds-hourglass"></div>
                            const { posts } = data;
                            return (
                                <React.Fragment>
                                    {
                                        posts.map((post, i) => {
                                            return (
                                                <div>
                                                    <li>
                                                        <Link key={post.id} to={`post/${post.id}`}>
                                                            {post.title}
                                                        </Link>
                                                        <button className="button">X</button>
                                                    </li>
                                                </div>
                                            )
                                        })
                                    }
                                     <button onClick={()=>fetchMore({
                                        variables:{
                                            skip:posts.length
                                        },
                                        updateQuery:(prev,{fetchMoreResult})=>{
                                            if(!fetchMoreResult) return prev;
                                            return Object.assign({},prev,{
                                                posts:[...prev.posts,...fetchMoreResult.posts]
                                            })
                                        }
                                    })}>Lead More</button>
                                </React.Fragment>
                            )

                        }}
                    </Query>
                </ul>
            </div>
        )
    }
}
