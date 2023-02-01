const { gpl } = require(`apollo-server-express`);

const typeDefs = gpl`    
    type Set {
        _id: ID
        name: String
        duration: Number
        intensity: Number
        target: String
    }

    type Workout {
        _id: ID
        date: Date
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
        toke: ID!
        user: User
    }
`;

module.exports = typeDefs;