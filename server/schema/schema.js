const graphql = require('graphql');


const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//dummy data
var books = [
                {name : 'Name of the wind',genre: 'Fantasy',id:'1'},
                {name : 'The Final Empire',genre: 'Fantasy',id:'2'},
                {name : 'The Long Earth',genre: 'Sci-Fi',id:'3'},
            ]

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id : {type:GraphQLString},
        name : {type:GraphQLString},
        genre : {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent, args) {
                //return _.find(books,{id:args.id})
                return books.find(book => book.id === args.id);
          } 
        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery
})