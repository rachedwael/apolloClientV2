import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
export default class Posts extends Component {
    render() {
    const POSTS_QUERY = gql`
    query allPosts {
      posts {
        id
        title
        body
      }
    }
    `;
        return (
            <div>
                <Link className="button" to={"/posts/new"} >new Post</Link>
                <ul className={"post-listing"}>
                <Query query={POSTS_QUERY}>
                    {({ loading, data }) => {
                        if (loading) return <div className="lds-hourglass"></div>
                        const { posts } = data;
                        return posts.map((post, i) => {
                            return (
                                <div>
                                    <li>
                                    <Link key={post.id} to={`post/${post.id}`}>
                                    {post.title}
                                    </Link>
                                    </li>
                                </div>
                            )
                        })
                    }}
                </Query>
                </ul>
            </div>
        )
    }
}
