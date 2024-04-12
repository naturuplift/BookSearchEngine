// Include packages needed for this application
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      // Add query resolvers
      me: async (parent, args, context) => {
          if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('savedBooks');
          }
          throw new AuthenticationError('You need to be logged in!');
      },
  },
  Mutation: {
    // Add mutation resolvers
    login: async (parent, { email, password }) => {

      // console.log("Recieved Query: ", email, password);
      
        const user = await User.findOne({ email });
        if (!user) {
            throw new AuthenticationError('No user found with this email address');
        }
    
        const correctPasword = await user.isCorrectPassword(password);
    
        if (!correctPasword) {
            throw new AuthenticationError('Incorrect password');
        }
    
        const token = signToken(user);
        return { token, user };
    },
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
    },
    saveBook: async (parent, { input }, context) => {

      // Log the received book input
      // console.log('Received saveBook request:', input);

      if (context.user) {
        const bookSaved = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true }
        ).populate('savedBooks');
        return bookSaved;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
          const removeBook = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId } } },
            { new: true }
          ).populate('savedBooks');
          return removeBook;
        }
        throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;