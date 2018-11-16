import React, { Component } from 'react'
import PostForm from './PostForm';
import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'
import  {NEW_POST} from './../graphql/mutations.js'
export default class NewPost extends Component {

    render() {
        return (
            <div>
                <h1>New post</h1>
                <Mutation
                    mutation={NEW_POST}
                >
                    {createPost => (<PostForm onSubmit={createPost}/>)}
                </Mutation>

            </div>
        )
    }
}