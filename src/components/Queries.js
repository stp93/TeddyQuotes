import { gql } from '@apollo/client'

export const  QUOTES = gql`
query {
    quotes{
        id
        content
        author
    }
    
}
`