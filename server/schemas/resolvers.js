const { User, Workout, Set } = require(`../models`);
const { AuthenticationError } = require(`apollo-server-express`);
/* const { signToken } = require(`../utils`); */

const resolvers = {
  Query: {
    //
  },
  Mutation: {
    // TODO: addUser
  },
};

module.exports = resolvers;
