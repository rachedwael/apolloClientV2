import React, { Component } from 'react'
import PostForm from './PostForm'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
export default class UpdatePost extends Component {
    render() {
        const {post}=this.props
        return (
            <div>
                <Mutation mutation={UPDATE_POST}>
                    {updatePost => (<PostForm onSubmit={updatePost} post={post}/>)}
                </Mutation>
            </div>
        )
    }
}

const UPDATE_POST = gql`
mutation update($id:ID!,$title:String!, $body:String!) {
    updatePost(
      where: {
        id: $id
      }, 
      data: {
        title: $title,
        status:PUBLISHED,
        body: $body  
      }
    ){
      id
      title
      status
    }
  }
`;