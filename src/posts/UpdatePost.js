import React, { Component } from 'react'
import PostForm from './PostForm'
import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'
import    {UPDATE_POST}   from './../graphql/mutations.js'

export default class UpdatePost extends Component {
    render() {
        const {post}=this.props
        return (
            <div>
                <Mutation mutation={UPDATE_POST}>
                    {(updatePost, result) => {
                        const onSuccess=() => result.client.writeData({ data: { isEditMode: false } })
                        return (<PostForm onSubmit={updatePost} post={post} onSuccess={onSuccess}/>)
                    }
                    }
                </Mutation>
            </div>
        )
    }
}

