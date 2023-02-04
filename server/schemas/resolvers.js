const { User, Workout, Set } = require(`../models`);
const { AuthenticationError } = require(`apollo-server-express`);
const { ProfilingLevel } = require("mongodb");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //get this User
    me: async (_parent, _args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You have to log in first!");
    },
    //get All workouts
    workouts: async () => {
      if (context.user) {
        return Workout.find();
      }
      throw new AuthenticationError("You have to log in first!");
    },
    //get workout by ID
    workout: async ({ workoutId }) => {
      if (context.user) {
        try {
          const workoutData = await Workout.findOne({ _id: workoutId });
          return workoutData;
        } catch (err) {
          throw new Error("No workout by the given ID");
        }
      }
      throw new AuthenticationError("You have to log in first!");
    },
    //get All sets
    sets: async () => {
      if (context.user) {
        return Set.find();
      }
      throw new AuthenticationError("You have to log in first!");
    },
    //get set by ID
    set: async ({ setId }) => {
      if (context.user) {
        try {
          const setData = await Set.findOne({ _id: setId });
          return setData;
        } catch (err) {
          throw new Error("No Set by the given ID");
        }
      }
      throw new AuthenticationError("You have to log in first!");
    },
  },

  Mutation: {
    signup: async (_parent, _args) => {
      const user = await User.create(_args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("User not found");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Password is Incorrect.");
      }

      const token = signToken(user);
      return { token, user };
    },
    addWorkoutToUser: async (_parent, workoutId) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { workouts: workoutId } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You have to log in first.");
    },
    removeWorkoutFromUser: async (_parent, workoutId) => {
      if (context.user) {
        const updatedUser = await User.findOneAndDelete(
          { _id: context.user._id },
          { $pull: { workouts: workoutId } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You have to log in first.");
    },
    createWorkout: async (_parent, { date, sets }) => {
      if (context.user) {
        try {
          const newWorkout = await Workout.create(
            {
              date: date,
              sets: sets
            }
          )
          return newWorkout;
        } catch (err) {
          throw new Error("Creation failed.")
        }
      }
      throw new AuthenticationError("You have to log in first.");
    },
    deleteWorkout: async (_parent, { date, sets }) => {
      if (context.user) {
        try {
          const newWorkout = await Workout.findOneAndDelete(
            {
              date: date,
              sets: sets
            }
          )
          return newWorkout;
        } catch (err) {
          throw new Error("Deletion failed.")
        }
      }
      throw new AuthenticationError("You have to log in first.");
    }
  },
};

module.exports = resolvers;
