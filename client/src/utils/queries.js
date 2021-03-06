import gql from 'graphql-tag';

export const QUERY_ME = gql`
{
    me {
        _id
        email
        username
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }
}
`