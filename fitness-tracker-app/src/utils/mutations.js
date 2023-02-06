import { gql } from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATEWORKOUT = gql`
  mutation createWorkout($date: String!, $sets: [SetInput!]!){
    createWorkout(date: $date, sets: $sets){
      _id
      date
      sets {
        name
      }
    }
  }
`;