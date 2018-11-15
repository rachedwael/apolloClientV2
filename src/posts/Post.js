import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from '../../node_modules/react-apollo';
import UpdatePost from './UpdatePost';
import EditMode from './EditMode';
const POST_QUERY = gql`
query post($id: ID!) {
  post(where:{id:$id}) {
    id
    title
    body
  }
  isEditMode @client
  name @client
}
`;
export default class Post extends Component {
  render() {
    const { match } = this.props
    
    return (
      <Query
        query={POST_QUERY}
        variables={{
          id: match.params.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return <div className="lds-hourglass"></div>
          const { post, isEditMode } = data;
          console.log("data",data.name)
          return (
            <div>
              <EditMode isEditMode={isEditMode}/>
              {
                !isEditMode ? (
                  <section>
                    <h1>{post.title}</h1>
                  </section>
                ) :
                  (
                    <section>
                      <h1>Edit Post</h1>
                      <UpdatePost post={post} />
                    </section>
                  )
              }
            </div>
          )
        }}
      </Query>
    )
  }
}
