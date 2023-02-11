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

export const Query_Sets = gql`
  query getSets {
    sets {
      _id
      name
      duration
      target
    }
  }
`;

export const Query_Set = gql`
  query getSet {
    sets {
      _id
      name
      duration
      target
    }
  }
`;