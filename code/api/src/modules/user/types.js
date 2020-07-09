// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    shippingAddress: { type: GraphQLString },
    description: { type: GraphQLString},
    image: {type: GraphQLString}
  })
})

// const UserType1 = new GraphQLObjectType({
//   name: 'user1',
//   description: 'User type 1',

//   fields: () => ({
//     // id: { type: GraphQLInt },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     // password: { type: GraphQLString },
//     shippingAddress: { type: GraphQLString },
//     // createdAt: { type: GraphQLString },
//     description: { type: GraphQLString }
//   })
// })

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { UserType, UserLoginType, UserGenderType }