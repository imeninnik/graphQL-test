import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';
import * as _ from 'lodash';

import { AuthorType } from "./Author.type";
import { Authors } from './../data/authors';

export const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'This represents Post',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        body: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve: function (post) {
                return _.find((Authors:Authors[], a) => a.id === post.author_id);
            }
        }

    })

});