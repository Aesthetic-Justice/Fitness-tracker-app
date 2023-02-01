const { User, Workout, Set } = require(`../models`);
const { AuthenticationError } = require(`apollo-server-express`);
const { ProfilingLevel } = require("mongodb");
/* const { signToken } = require(`../utils`); */

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent,{userId}) => {
      return User.findone({_id:userId})
    }
    
  },
  Mutation: {
    Signup: async(parent, {username,email,password}) => {
      return User.create({username,email,password});
    },
    Login: async(parent,{username,password}) =>{
      
    }
  },
};

module.exports = resolvers;
