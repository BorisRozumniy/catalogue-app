const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const Products = require('../models/product');

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    img: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    numberDaysUntilEndDiscount: { type: GraphQLInt },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
				return Products.findById(args.id);
      },
    },
		products: {
			type: new GraphQLList(ProductType),
			resolve(parent, args) {
				return Products.find({});
			}
		},
  }
});

module.exports = new GraphQLSchema({
  query: Query,
});
