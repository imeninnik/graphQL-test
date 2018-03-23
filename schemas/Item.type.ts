import {GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLBoolean, GraphQLList} from 'graphql';

import ItemService from './../item.service';


export const ItemType = new GraphQLObjectType({
    name: 'Item',
    description: 'This represents Item',
    fields: () => ({

        item_id: {type: GraphQLString},
        item_name: {type:GraphQLString},
        sku: {type: GraphQLString},

        group_id: { type: GraphQLString},
        group_name: {type: GraphQLString},
        unit: {type: GraphQLString},
        item_type: {type: GraphQLString},
        is_taxable: {type: GraphQLBoolean},
        tax_id: {type: GraphQLString},
        description: {type: GraphQLString},
        tax_name: {type: GraphQLString},
        tax_percentage: {type: GraphQLInt},
        tax_type: {type: GraphQLString},
        status: {type: GraphQLString},

        rate:{type: GraphQLInt},
        pricebook_rate:{type: GraphQLInt},
        purchase_rate:{type: GraphQLInt},
        reorder_level: {type: GraphQLInt},
        initial_stock: {type: GraphQLInt},
        initial_stock_rate: {type: GraphQLInt},
        vendor_id: {type: GraphQLString},
        vendor_name: {type: GraphQLString},
        stock_on_hand: {type: GraphQLInt},

        image_id: {type: GraphQLString},
        image_name: {type: GraphQLString},
        purchase_description: {type: GraphQLString},
        image_type: {type: GraphQLString},


        total_sold : {
            type:  GraphQLInt,
            resolve: (item) => ItemService.getTotalSold(item.item_id)
        },
        total_sold_today : {
            type:  GraphQLInt,
            resolve: (item) => ItemService.getTotalSold(item.item_id, 'today')
        },
        total_sold_per_week : {
            type:  GraphQLString,
            resolve: (item) => ItemService.getTotalSold(item.item_id, 'perWeek')
        },
        total_sold_per_month : {
            type:  GraphQLString,
            resolve: (item) => ItemService.getTotalSold(item.item_id, 'perMonth')
        },
        frequently_bought_with: {
            type:  new GraphQLList(ItemType),
            resolve:(item) => ItemService.getBoughtWith(item)
        }


    })

});


