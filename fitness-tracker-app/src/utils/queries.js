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

export const Query_Sets = gpl`
  query getSets {
    sets {
      _id
      name
      duration
      target
    }
  }
`;