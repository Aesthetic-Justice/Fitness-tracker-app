import { gql } from "@apollo/client";

export const Query_User = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
