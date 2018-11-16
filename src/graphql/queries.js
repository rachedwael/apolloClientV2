import gql from 'graphql-tag'

export const POSTS_QUERY = gql`
query allPosts($skip:Int) {
    posts(orderBy:createdAt_DESC, first:5, skip:$skip) {
      id
      title
      body
    }
}`

export const POST_QUERY = gql`
query post($id: ID!) {
post(where:{id:$id}) {
  id
  title
  body
  check
}
isEditMode @client
}`
