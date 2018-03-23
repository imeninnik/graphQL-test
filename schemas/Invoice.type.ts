import {GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLBoolean, GraphQLList} from 'graphql';

import { ItemType } from "./Item.type";


import  ItemModel  from './../Models/Item.model'

export const InvoiceType = new GraphQLObjectType({
    name: 'Invoice',
    description: 'This represents Invoice',
    fields: () => ({
        invoice_number:{type: GraphQLString},

        item_id: {
            type: new GraphQLList(ItemType),
            resolve: (invoice) => {
                const itemsArray = invoice.item_id.map((itemId) =>  ItemModel.getById(itemId));
                return itemsArray;
            }
        },

        "invoice_id":{type: GraphQLString},
        "customer_name": {type: GraphQLString},
        "customer_id": {type: GraphQLString},
        "status":{type: GraphQLString},
        "reference_number":{type: GraphQLString},
        "date": {type: GraphQLString},
        "due_date": {type: GraphQLString},
        "due_days": {type: GraphQLString},
        "currency_id": {type: GraphQLString},
        "currency_code": {type: GraphQLString},
        "total": {type: GraphQLInt},
        "balance": {type: GraphQLInt},
        "created_time": {type: GraphQLString},
        "is_emailed": {type: GraphQLBoolean},
        "reminders_sent": {type: GraphQLInt},
        "payment_expected_date": {type: GraphQLString},
        "last_payment_date": {type: GraphQLString},

    })

});


