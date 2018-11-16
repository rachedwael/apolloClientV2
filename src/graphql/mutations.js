import gql from 'graphql-tag'
export const UPDATE_POST_CHECK = gql`
mutation updatePost($id:ID!,$check:Boolean) {
    updatePost(
      where: {
        id: $id
      }, 
      data: {
        check: $check
      }
    ){
      id
      title
      status
      check
    }
  }
`
export const NEW_POST = gql`
mutation addPost($title:String!,$body:String!) {
  createPost(data:{
      status:PUBLISHED
      title: $title
      body: $body
  }){
      title
      body
      id
  }
}
`
export const UPDATE_POST = gql`
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
  }`


export const DELETE_POST = gql`
mutation delete($id: ID!) {
    deletePost(where:{id:$id})
    {
        id
        title
        body
        
    }
  }`
