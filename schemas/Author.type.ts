import {GraphQLString, GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLSchema } from 'graphql';

export const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents author',
    fields:() => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        twitterHandle: {type:  GraphQLString}
    })
});