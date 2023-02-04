const { gql } = require(`apollo-server-express`);

const typeDefs = gql`
  type Set {
    _id: ID
    name: String
    duration: Int
    intensity: Int
    target: String
  }

  type Workout {
    _id: ID
    date: String
    sets: [Set]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    routines: [Workout]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    workouts: [Workout]!
    workout(workoutId: ID!): Workout 
    sets: [Set]!
    set(setId: ID!): Set
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!): Auth
    addWorkoutToUser(workoutId: ID!): User
    removeWorkoutFromUser(workoutId: ID!): User
    createWorkout(date: String!, sets: [String!]!): Workout
  }
`;

module.exports = typeDefs;
