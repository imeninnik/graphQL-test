import {GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';

import { InvoiceType } from './Invoice.type';
import { ItemType } from './Item.type';

import ItemModel from './../Models/Item.model';
import InvoiceModel from './../Models/Invoice.model';



const BlogQueryRootType = new GraphQLObjectType({
    name: 'AppSchema',
    description: 'Application Schema Query Root',
    fields: () => ({
        items: {
            type: new GraphQLList(ItemType),
            description: 'List of all Items',
            args: {
              item_id: {type: GraphQLString}
            },
            resolve: (root, args) => {
                if (args.item_id) return ItemModel.getById(args.item_id);
                return ItemModel.getAll();
            }
        },
        invoices: {
            type: new GraphQLList(InvoiceType),
            description: 'List of all Invoices',
            args: {
                invoice_id: {type: GraphQLString}
            },
            resolve: (root, args) => {
                if (args.invoice_id) return InvoiceModel.getById(args.invoice_id);
                return InvoiceModel.getAll();
            }
        },
    })
});

export const RootSchema = new GraphQLSchema({
    query: BlogQueryRootType
});

