import { gql } from '@apollo/client';

export const Query_User = gql`

query getUsers{
    users{
     _id
     username
     email
     password
     routines   
    }
}`